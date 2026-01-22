const generateReceiptId = require("../utils/generateReceipt");

exports.createDonation = (req, res) => {
    const { name, email, amount, transactionId } = req.body;

    // Basic validation
    if (!name || !amount || !transactionId) {
        return res.status(400).json({
            success: false,
            message: "Missing required donation details",
        });
    }

    const receiptId = generateReceiptId();

    // TEMP: No DB yet (we add later)
    const donationData = {
        receiptId,
        name,
        email,
        amount,
        transactionId,
        date: new Date().toISOString(),
    };

    return res.status(201).json({
        success: true,
        message: "Donation acknowledged successfully",
        data: donationData,
    });
};
