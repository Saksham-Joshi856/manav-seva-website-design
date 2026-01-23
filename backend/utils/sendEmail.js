const nodemailer = require("nodemailer");

const sendEmail = async ({ to, subject, text, attachments }) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // IMPORTANT
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    return transporter.sendMail({
        from: `"Manavta Hitay Organisation" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text,
        attachments,
    });
};

module.exports = sendEmail;
