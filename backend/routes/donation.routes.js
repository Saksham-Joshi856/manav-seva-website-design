const express = require("express");
const router = express.Router();
const { createDonation } = require("../controllers/donation.controller");

router.post("/donate", createDonation);

module.exports = router;
