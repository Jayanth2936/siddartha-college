const express = require("express");
const cors = require("cors");

const app = express();

// allow ALL origins (for now)
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Server running on port 5000");
});