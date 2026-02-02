const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, text, attachments }) => {
    // Validate email configuration
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error("Email configuration is missing");
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtp.gmail.com",
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        // Remove rejectUnauthorized: false for security
        // Only set to false in development if needed
        tls: {
            rejectUnauthorized: process.env.NODE_ENV === "production",
        },
    });

    try {
        const info = await transporter.sendMail({
            from: `"Maanavta Hitaay Organisation" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
            attachments,
        });
        console.log("Email sent successfully:", info.messageId);
        return info;
    } catch (error) {
        console.error("Email sending error:", error);
        throw error;
    }
};

module.exports = sendEmail;
