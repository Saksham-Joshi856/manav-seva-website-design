/**
 * Validation middleware for donation creation
 * Can be used as an alternative to inline validation
 */

const validateDonation = (req, res, next) => {
    const { name, mobile, amount, transactionId, utr } = req.body;
    const rawTransactionId = transactionId || utr;
    const errors = [];

    // Name validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
        errors.push("Name must be at least 2 characters long");
    }

    // Mobile validation
    const normalizedMobile = typeof mobile === "string" ? mobile.replace(/\D/g, "") : "";
    if (!normalizedMobile || normalizedMobile.length < 10 || normalizedMobile.length > 15) {
        errors.push("Valid mobile number is required");
    }

    // Amount validation
    const donationAmount = parseFloat(amount);
    if (isNaN(donationAmount) || donationAmount <= 0) {
        errors.push("Amount must be a positive number");
    } else if (donationAmount > 10000000) {
        errors.push("Amount exceeds maximum limit");
    }

    // Transaction ID validation
    if (!rawTransactionId || typeof rawTransactionId !== "string" || rawTransactionId.trim().length < 5) {
        errors.push("Transaction ID is required and must be at least 5 characters");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors,
        });
    }

    next();
};

module.exports = validateDonation;


