/**
 * Validation middleware for donation creation
 * Can be used as an alternative to inline validation
 */

const validateDonation = (req, res, next) => {
    const { name, email, amount, utr } = req.body;
    const errors = [];

    // Name validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
        errors.push("Name must be at least 2 characters long");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
        errors.push("Valid email is required");
    }

    // Amount validation
    const donationAmount = parseFloat(amount);
    if (isNaN(donationAmount) || donationAmount <= 0) {
        errors.push("Amount must be a positive number");
    } else if (donationAmount > 10000000) {
        errors.push("Amount exceeds maximum limit");
    }

    // Transaction ID validation
    if (!utr || typeof utr !== "string" || utr.trim().length < 5) {
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

