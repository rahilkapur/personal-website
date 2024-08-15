const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const fs = require('fs');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.post('/contact', (req, res) => { //contact 
    const {emailName, emailBody } = req.body;
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
            text: emailBody
        }
        transport.sendMail(message);
        res.status(200).send('Message received'); 
    }
    catch (e) {
        console.error('Error sending email:', e);
        res.status(500).send('Failed to send message');

    }
})


console.log('Current directory:', __dirname);

const frontendBuildPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendBuildPath));
app.use(express.static('public'));
// Handle all other routes by serving the frontend's index.html
app.get('*', (req, res) => {
    res.sendFile(frontendBuildPath, 'index.html');
});

app.listen(port, () => {
    console.log(`My API has been opened on :${port}`);
});