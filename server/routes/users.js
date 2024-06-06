const express = require('express');
const router = express.Router();
const Users = require('../schemas/users.schema');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken'); 

// GET users listing
router.get('/', async function (req, res, next) {
  const users = await Users.find();
  res.send(users);
});

// Register a new user
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      username,
      password: hashedPassword,
      email,
      address,
      city,
      postalCode,
      country,
      isAdmin,
      createdAt: new Date(),
    });
    await newUser.save();
    res.json({ success: true, userId: newUser._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
  }
});

// Update user information
router.put('/', async function (req, res, next) {
  const { username, password, email, address, city, postalCode, country, isAdmin, _id } = req.body;
  const updatedUser = await Users.findByIdAndUpdate(_id, {
    username,
    password,
    email,
    address,
    city,
    postalCode,
    country,
    isAdmin,
  }, { new: true });
  res.send(updatedUser);
});

// Soft delete user
router.delete('/', async function (req, res, next) {
  const { _id } = req.body;
  const deletedUser = await Users.findByIdAndUpdate(_id, {
    isVisible: false
  }, { new: true });
  res.send(deletedUser);
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ username });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
    res.json({ success: true, userId: user._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
  }
});

//LogOut 
router.post('/logout', (req, res) => {
  res.json({ success: true, message: "Logged out successfully" });
});

module.exports = router;
