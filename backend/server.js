const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// 1. Explicitly allow your Vercel website to talk to this backend
app.use(cors({
  origin: 'https://siddartha-college.vercel.app', 
  methods: ['GET', 'POST']
}));

app.use(express.json()); 

// 2. Set up the Mailman
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Saidarao12@gmail.com', 
    pass: 'rpxuaehzzlrfewhb' // ⚠️ DON'T FORGET TO PASTE THIS AGAIN!
  }
});

// 3. The Route
app.post("/api/apply", async (req, res) => {
  const { name, email, course } = req.body;

  try {
    const mailOptions = {
      from: 'Saidarao12@gmail.com',
      to: 'siddharthagroup.org@gmail.com', 
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

    await transporter.sendMail(mailOptions);
    console.log("Success: Email sent to college administration.");
    res.status(200).json({ message: "Email sent successfully!" });

  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ error: "Backend failed to send email notification." });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('Backend is running and ready to send emails! 🚀');
});

// 4. The Dynamic Port Fix (Lets Back4App choose the port)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is active on port ${PORT}`);
});