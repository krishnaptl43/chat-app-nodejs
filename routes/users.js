const express = require("express");
const User = require("../model/user.model");
const router = express.Router();


// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  res.json(user);
});

module.exports = router;
