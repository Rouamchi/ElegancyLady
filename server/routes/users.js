const express = require('express');
const router = express.Router();
const Users = require('../schemas/users.schema');
const bcrypt = require('bcrypt');

// GET users listing
router.get('/', async function (req, res, next) {
  const users = await Users.find();
  res.send(users);
});

// Register a new user
router.post('/', async function (req, res, next) {
  const { username, password, email, address, city, postalCode, country, isAdmin } = req.body;
  const newUser = await Users.create({
    username,
    password,
    email,
    address,
    city,
    postalCode,
    country,
    isAdmin,
    createdAt: new Date(),
  });
  res.send(newUser);
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
router.post('/login', async function (req, res, next) {
  const { username, password } = req.body;
  const user = await Users.findOne({ username, isVisible: true });

  if (!user) {
    return res.status(401).send({ success: false, message: "Invalid username or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send({ success: false, message: "Invalid username or password" });
  }

  res.send({ success: true, message: "Login successful", user });
});

module.exports = router;


// Login route
router.post('/login', async function (req, res, next) {
  const { username, password } = req.body;
  const user = await Users.findOne({ username, isVisible: true });

  if (!user) {
    return res.status(401).send({ success: false, message: "Invalid username or password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).send({ success: false, message: "Invalid username or password" });
  }

  res.send({ success: true, message: "Login successful", user });
});

module.exports = router;






// const express = require('express');
// const router = express.Router();
// const Users = require('../schemas/users.schema')

// router.get('/', async function (req, res, next) {
//   const users = await Users.find()
//   res.send(users);
// });

// router.post('/', async function (req, res, next) {
//   const { username, password,  email, address, city, postalCode, country, isAdmin } = req.body
//   const newUser = await Users.create({
//     username,
//     password,
//     email,
//     address,
//     city,
//     postalCode,
//     country,
//     isAdmin,
//     createdAt: new Date(),
//   })
//   res.send(newUser)
// })

// router.put('/', async function (req, res, next) {
//   const { username, password, email, address, city, postalCode, country, isAdmin, _id } = req.body
//   const newUser = await Users.findByIdAndUpdate(_id,
//     {
//       username,
//       password,
//       email,
//       address,
//       city,
//       postalCode,
//       country,
//       isAdmin,
//     }, { new: true })
//   res.send(newUser);
// })
// router.delete('/', async function (req, res, next) {
//   const { _id } = req.body
//   const newUser = await Users.findByIdAndUpdate(_id,
//     {
//       isVisible: false
//     }, { new: true })
//   res.send(newUser);
// })

// module.exports = router;