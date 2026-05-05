const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Set up the Email Postman (Nodemailer)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'siddharthagroup.org@gmail.com',
    pass: 'iqvqyxymkhyyfrje' // <-- Paste your Google App Password here (no spaces)
  }
});

// 2. The Route that sends the email
app.post("/api/apply", async (req, res) => {
  const { name, email, course } = req.body;

  try {
    const mailOptions = {
      from: 'Saidarao12@gmail.com',
      to: 'Saidarao12@gmail.com', 
      subject: `🎓 New Application: ${name}`,
      text: `
        New admission inquiry for Siddartha Degree College!
        
        Student Details:
        Name: ${name}
        Email: ${email}
        Course: ${course}
        
        Date Received: ${new Date().toLocaleString()}
      `
    };

    await transporter.sendMail(mailOptions);
    console.log("Email notification sent for:", name);

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Failed to send email notification" });
  }
});

app.get('/', (req, res) => {
  res.send('Backend is live! Email system ready. 🚀');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});