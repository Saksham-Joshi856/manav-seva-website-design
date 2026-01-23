const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    amount: {
        type: Number,
        required: true,
    },

    transactionId: {
        type: String,
        required: true,
        unique: true,
    },

    receiptNo: {
        type: String,
        required: true,
        unique: true,
    },

    paymentMethod: {
        type: String,
        default: "UPI-QR",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Donation", donationSchema);
