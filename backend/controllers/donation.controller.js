const Donation = require("../models/Donation");
const generateReceipt = require("../utils/generateReceipt");
const generatePDF = require("../utils/generatePDF");
const sendEmail = require("../utils/sendEmail");
const path = require("path");
const fs = require("fs");

// Email validation helper
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

exports.createDonation = async (req, res) => {
    try {
        const { name, email, amount, utr } = req.body;

        // Basic validation
        if (!name || !email || !amount || !utr) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Trim and validate inputs
        const trimmedName = name.trim();
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedUtr = utr.trim();

        if (!trimmedName || trimmedName.length < 2) {
            return res.status(400).json({
                success: false,
                message: "Name must be at least 2 characters long",
            });
        }

        if (!isValidEmail(trimmedEmail)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format",
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

        if (!trimmedUtr || trimmedUtr.length < 5) {
            return res.status(400).json({
                success: false,
                message: "Transaction ID is required and must be at least 5 characters",
            });
        }

        const existingDonation = await Donation.findOne({
            transactionId: trimmedUtr,
        });

        if (existingDonation) {
            return res.status(409).json({
                success: false,
                message: "This transaction is already recorded",
            });
        }

        const receiptNo = generateReceipt();

        const donation = await Donation.create({
            name: trimmedName,
            email: trimmedEmail,
            amount: donationAmount,
            transactionId: trimmedUtr,
            receiptNo,
        });

        // Generate receipt PDF
        const receiptPath = await generatePDF(donation);

        // Send email (non-blocking - don't fail donation if email fails)
        sendEmail({
            to: trimmedEmail,
            subject: "Donation Receipt - Maanavta Hitaay Organisation",
            text: `
Dear ${trimmedName},

Thank you for your generous donation of ₹${donationAmount}.
Your support means a lot to us.

Receipt Number: ${receiptNo}
Transaction ID: ${trimmedUtr}

You can download your receipt using the receipt number.

Regards,
Maanavta Hitaay Organisation
            `,
            attachments: [
                {
                    filename: "Donation_Receipt.pdf",
                    path: receiptPath,
                },
            ],
        }).catch((emailError) => {
            // Log email error but don't fail the donation
            console.error("Failed to send email:", emailError);
        });

        res.status(201).json({
            success: true,
            message: "Donation successful. Receipt sent via email.",
            data: {
                receiptNo,
                name: trimmedName,
                email: trimmedEmail,
                amount: donationAmount,
                date: donation.createdAt,
            },
        });
    } catch (error) {
        console.error("Donation Error:", error);
        
        // Handle specific MongoDB errors
        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Transaction ID or receipt number already exists",
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

exports.downloadReceipt = async (req, res) => {
    try {
        const { receiptNo } = req.params;

        // Validate receipt number format
        if (!receiptNo || receiptNo.length < 5) {
            return res.status(400).json({
                success: false,
                message: "Invalid receipt number",
            });
        }

        // Sanitize receipt number to prevent path traversal
        const sanitizedReceiptNo = receiptNo.replace(/[^a-zA-Z0-9-]/g, "");

        // Check if receipt exists in database first
        const donation = await Donation.findOne({ receiptNo: sanitizedReceiptNo });
        if (!donation) {
            return res.status(404).json({
                success: false,
                message: "Receipt not found",
            });
        }

        // Use public/receipts directory (consistent with static serving)
        const filePath = path.join(
            __dirname,
            "../public/receipts",
            `receipt-${sanitizedReceiptNo}.pdf`
        );

        // Additional check if file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                success: false,
                message: "Receipt file not found",
            });
        }

        res.download(filePath, `receipt-${sanitizedReceiptNo}.pdf`, (err) => {
            if (err) {
                console.error("Download error:", err);
                if (!res.headersSent) {
                    res.status(500).json({
                        success: false,
                        message: "Error downloading receipt",
                    });
                }
            }
        });
    } catch (error) {
        console.error("Download Receipt Error:", error);
        res.status(500).json({
            success: false,
            message: process.env.NODE_ENV === "production" 
                ? "Server error" 
                : error.message,
        });
    }
};
