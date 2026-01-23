const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donation.controller");

// Create donation
router.post("/donate", donationController.createDonation);

// Download receipt
router.get("/receipt/:receiptNo", donationController.downloadReceipt);

module.exports = router;
