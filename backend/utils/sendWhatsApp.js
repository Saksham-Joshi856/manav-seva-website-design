const https = require("https");

const buildMessage = ({ name, amount, transactionId }) => {
    return `Dear ${name}, thank you for your generous donation of INR ${amount}. Transaction ID: ${transactionId}. Your support means a lot to us. - Maanavta Hitaay Organisation`;
};

const postJson = (url, token, body) =>
    new Promise((resolve, reject) => {
        const request = https.request(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            },
            (res) => {
                let data = "";
                res.on("data", (chunk) => {
                    data += chunk;
                });
                res.on("end", () => {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(data);
                        return;
                    }
                    reject(new Error(`WhatsApp API error ${res.statusCode}: ${data}`));
                });
            }
        );

        request.on("error", reject);
        request.write(JSON.stringify(body));
        request.end();
    });

const sendWhatsAppMessage = async ({ to, name, amount, transactionId }) => {
    const apiUrl = process.env.WHATSAPP_API_URL;
    const apiToken = process.env.WHATSAPP_API_TOKEN;
    const senderId = process.env.WHATSAPP_SENDER_ID;

    if (!apiUrl || !apiToken || !senderId) {
        throw new Error(
            "Missing WhatsApp API configuration. Set WHATSAPP_API_URL, WHATSAPP_API_TOKEN, and WHATSAPP_SENDER_ID."
        );
    }

    const payload = {
        to,
        from: senderId,
        type: "text",
        text: {
            body: buildMessage({ name, amount, transactionId }),
        },
    };

    return postJson(apiUrl, apiToken, payload);
};

module.exports = sendWhatsAppMessage;
