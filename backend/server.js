const express = require("express");
const cors = require("cors");
require("dotenv").config();

const donationRoutes = require("./routes/donation.routes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/donations", donationRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running successfully 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
});
