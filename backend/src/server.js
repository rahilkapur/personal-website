const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
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

app.use(express.static('../../personal website/frontend/dist'));
app.use(express.static('public'));
// Handle all other routes by serving the frontend's index.html
const frontendBuildPath = process.env.FRONTEND_BUILD_PATH || path.join(__dirname, '../../frontend/dist');
app.get('*', (req, res) => {
    res.sendFile(frontendBuildPath);
});

app.listen(port, () => {
    console.log(`My API has been opened on :${port}`);
});