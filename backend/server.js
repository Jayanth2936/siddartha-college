const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Standard for Node.js email handling

const app = express();
app.use(cors());
app.use(express.json()); // Essential to read the student's form data

// 1. Set up the "Mailman" (Nodemailer)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Saidarao12@gmail.com', // Your "sender" account
    pass: 'YOUR_16_LETTER_APP_PASSWORD_HERE' // Paste your 16-letter App Password (no spaces)
  }
});

// 2. The Route that handles the submission
app.post("/api/apply", async (req, res) => {
  const { name, email, course } = req.body;

  try {
    const mailOptions = {
      from: 'Saidarao12@gmail.com',
      to: 'siddharthagroup.org@gmail.com', // 🎯 This is where notifications will arrive
      subject: `🎓 New Student Application: ${name}`,
      text: `
        You have a new inquiry for Siddartha Degree College!
        
        Details:
        Name: ${name}
        Email: ${email}
        Course: ${course}
        
        Date: ${new Date().toLocaleString()}
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Success: Email sent to college administration.");

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Backend failed to send email notification." });
  }
});

// Health check route
app.get('/', (req, res) => {
  res.send('Backend is running and ready to send emails! 🚀');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is active on port ${PORT}`);
});