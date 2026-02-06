const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    name: {
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

    mobile: {
        type: String,
        required: true,
        trim: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Donation", donationSchema);
