const Donation = require("../models/Donation");
const generateReceipt = require("../utils/generateReceipt");
const generatePDF = require("../utils/generatePDF");
const sendEmail = require("../utils/sendEmail");
const path = require("path");
const fs = require("fs");

exports.createDonation = async (req, res) => {
    try {
        const { name, email, amount, utr } = req.body;

        if (!name || !email || !amount || !utr) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingDonation = await Donation.findOne({
            transactionId: utr,
        });

        if (existingDonation) {
            return res.status(409).json({
                success: false,
                message: "This transaction is already recorded",
            });
        }

        const receiptNo = generateReceipt();

        const donation = await Donation.create({
            name,
            email,
            amount,
            transactionId: utr,
            receiptNo,
        });

        // Generate receipt PDF
        const receiptPath = await generatePDF(donation);

        console.log("Sending email to:", email);
        // 🔥 SEND EMAIL (THIS WAS MISSING)
        await sendEmail({
            to: email, // ✅ THIS FIXES THE ERROR
            subject: "Donation Receipt - Manavta Hitay Organisation",
            text: `
Dear ${name},

Thank you for your generous donation of ₹${amount}.
Your support means a lot to us.

Receipt Number: ${receiptNo}

Regards,
Manavta Hitay Organisation
            `,
            attachments: [
                {
                    filename: "Donation_Receipt.pdf",
                    path: receiptPath,
                },
            ],
        });

        res.status(201).json({
            success: true,
            message: "Donation successful. Receipt sent via email.",
            data: {
                receiptNo,
                name,
                email,
                amount,
                date: donation.createdAt,
            },
        });
    } catch (error) {
        console.error("Donation Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

exports.downloadReceipt = async (req, res) => {
    try {
        const { receiptNo } = req.params;

        const filePath = path.join(
            __dirname,
            "../receipts",
            `receipt-${receiptNo}.pdf`
        );

        if (!fs.existsSync(filePath)) {
            return res.status(404).json({
                success: false,
                message: "Receipt not found",
            });
        }

        res.download(filePath);
    } catch (error) {
        console.error("Download Receipt Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};
