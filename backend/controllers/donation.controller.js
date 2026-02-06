const Donation = require("../models/Donation");
const sendWhatsAppMessage = require("../utils/sendWhatsApp");

const normalizeMobile = (mobile) => mobile.replace(/\D/g, "");
const isValidMobile = (mobile) => {
    const digits = normalizeMobile(mobile);
    return digits.length >= 10 && digits.length <= 15;
};

exports.createDonation = async (req, res) => {
    try {
        const { name, mobile, amount, transactionId, utr } = req.body;
        const rawTransactionId = transactionId || utr;

        // Basic validation
        if (!name || !mobile || !amount || !rawTransactionId) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Trim and validate inputs
        const trimmedName = name.trim();
        const normalizedMobile = normalizeMobile(mobile);
        const trimmedTransactionId = rawTransactionId.trim();

        if (!trimmedName || trimmedName.length < 2) {
            return res.status(400).json({
                success: false,
                message: "Name must be at least 2 characters long",
            });
        }

        if (!isValidMobile(mobile)) {
            return res.status(400).json({
                success: false,
                message: "Invalid mobile number",
            });
        }

        // Validate amount
        const donationAmount = parseFloat(amount);
        if (isNaN(donationAmount) || donationAmount <= 0) {
            return res.status(400).json({
                success: false,
                message: "Amount must be a positive number",
            });
        }

        if (donationAmount > 10000000) {
            return res.status(400).json({
                success: false,
                message: "Amount exceeds maximum limit",
            });
        }

        if (!trimmedTransactionId || trimmedTransactionId.length < 5) {
            return res.status(400).json({
                success: false,
                message: "Transaction ID is required and must be at least 5 characters",
            });
        }

        const existingDonation = await Donation.findOne({
            transactionId: trimmedTransactionId,
        });

        if (existingDonation) {
            return res.status(409).json({
                success: false,
                message: "This transaction is already recorded",
            });
        }

        const donation = await Donation.create({
            name: trimmedName,
            mobile: normalizedMobile,
            amount: donationAmount,
            transactionId: trimmedTransactionId,
        });

        // Send WhatsApp message (non-blocking - don't fail donation if message fails)
        sendWhatsAppMessage({
            to: normalizedMobile,
            name: trimmedName,
            amount: donationAmount,
            transactionId: trimmedTransactionId,
        }).catch((messageError) => {
            console.error("Failed to send WhatsApp message:", messageError);
        });

        res.status(201).json({
            success: true,
            message: "Donation successful. Thank-you message sent via WhatsApp.",
            data: {
                name: trimmedName,
                mobile: normalizedMobile,
                amount: donationAmount,
                transactionId: trimmedTransactionId,
                date: donation.createdAt,
            },
        });
    } catch (error) {
        console.error("Donation Error:", error);
        
        // Handle specific MongoDB errors
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Transaction ID already exists",
            });
        }

        if (error.name === "ValidationError") {
            return res.status(400).json({
                success: false,
                message: "Validation error: " + Object.values(error.errors).map(e => e.message).join(", "),
            });
        }

        res.status(500).json({
            success: false,
            message: process.env.NODE_ENV === "production" 
                ? "Server error. Please try again later." 
                : error.message,
        });
    }
};
