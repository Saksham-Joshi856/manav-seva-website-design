const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const helmet = require("helmet");

const donationRoutes = require("./routes/donation.routes");

// Validate required environment variables
const requiredEnvVars = ["MONGO_URI", "EMAIL_USER", "EMAIL_PASS"];
const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingEnvVars.length > 0) {
    console.error("❌ Missing required environment variables:", missingEnvVars.join(", "));
    process.exit(1);
}

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration - restrict to frontend URL in production
const corsOptions = {
    origin: process.env.NODE_ENV === "production" 
        ? (process.env.FRONTEND_URL?.split(",") || [])
        : true, // Allow all origins in development
    credentials: true,
    optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parser with size limits
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Serve receipts from public directory
app.use("/receipts", express.static("public/receipts"));

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    });
});

// Test route
app.get("/", (req, res) => {
    res.send("Backend is running successfully 🚀");
});

// Routes
app.use("/api", donationRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error("Global Error:", err);
    res.status(err.status || 500).json({
        success: false,
        message: process.env.NODE_ENV === "production" 
            ? "Internal server error" 
            : err.message,
    });
});

// Connect to MongoDB with retry logic
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        // In production, exit process if DB connection fails
        if (process.env.NODE_ENV === "production") {
            process.exit(1);
        }
    }
};

connectDB();

// Handle MongoDB connection events
mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB disconnected");
});

mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB error:", err);
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});

// Graceful shutdown
const gracefulShutdown = (signal) => {
    console.log(`\n${signal} received. Shutting down gracefully...`);
    server.close(() => {
        console.log("HTTP server closed");
        mongoose.connection.close(false, () => {
            console.log("MongoDB connection closed");
            process.exit(0);
        });
    });
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
    console.error("Unhandled Promise Rejection:", err);
    gracefulShutdown("unhandledRejection");
});
