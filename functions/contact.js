const express = require('express');
const serverless = require('serverless-http');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/contact', async (req, res) => {
    const { emailName, emailBody } = req.body;
    try {
        let transport = nodemailer.createTransport({
            host: process.env.EMAIL,
            secure: false,
            auth: {
                user: process.env.EMAILNAME,
                pass: process.env.EMAILPASSWORD,
            },
        });
        let message = {
            from: process.env.EMAILNAME,
            to: process.env.EMAILNAME,
            subject: `Contact Form Submission from: ${emailName}`,
            text: emailBody,
        };
        await transport.sendMail(message);
        res.status(200).send('Message received');
    } catch (e) {
        console.error('Error sending email:', e);
        res.status(500).send('Failed to send message');
    }
});

const frontendBuildPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendBuildPath));
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.join(frontendBuildPath, 'index.html'));
});

module.exports.handler = serverless(app);
