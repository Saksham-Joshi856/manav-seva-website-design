const express = require("express");
const router = express.Router();

const donationController = require("../controllers/donation.controller");

// Create donation
router.post("/donate", donationController.createDonation);

module.exports = router;
