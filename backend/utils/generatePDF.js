const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const generatePDF = (donation) => {
    return new Promise((resolve, reject) => {
        try {
            // Use public/receipts directory for consistency
            const receiptsDir = path.join(__dirname, "../public/receipts");

            // Create directory if it doesn't exist (recursive)
            if (!fs.existsSync(receiptsDir)) {
                fs.mkdirSync(receiptsDir, { recursive: true });
            }

            const fileName = `receipt-${donation.receiptNo}.pdf`;
            const filePath = path.join(receiptsDir, fileName);

            const doc = new PDFDocument();
            const stream = fs.createWriteStream(filePath);

            doc.pipe(stream);

            doc.fontSize(20).text("Donation Receipt", { align: "center" });
            doc.moveDown();
            doc.fontSize(12).text(`Receipt No: ${donation.receiptNo}`);
            doc.text(`Name: ${donation.name}`);
            doc.text(`Email: ${donation.email}`);
            doc.text(`Amount: ₹${donation.amount}`);
            doc.text(`Transaction ID: ${donation.transactionId}`);
            doc.text(`Date: ${new Date(donation.createdAt).toLocaleString()}`);

            doc.end();

            // 🔥 WAIT until file is fully written
            stream.on("finish", () => resolve(filePath));
            stream.on("error", reject);

        } catch (err) {
            reject(err);
        }
    });
};

module.exports = generatePDF;
