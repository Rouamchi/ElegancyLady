const express = require('express');
const router = express.Router();
const Users = require('../schemas/users.schema')

// const createUser = await Users.create(Users)
// const adminUser = createUser[0]._id

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await Users.find()
  res.send(users);
});

router.post('/', async function (req, res, next) {
  const { username, password,  email, address, city, postalCode, country, isAdmin, gender, birthdate } = req.body
  const newUser = await Users.create({
    username,
    password,
    // fullName,
    email,
    address,
    city,
    postalCode,
    country,
    isAdmin,
    createdAt: new Date(),
  })
  res.send(newUser)
})
router.put('/', async function (req, res, next) {
  const { username, password, email, address, city, postalCode, country, isAdmin, gender, birthdate, _id } = req.body
  const newUser = await Users.findByIdAndUpdate(_id,
    {
      username,
      password,
      // fullName,
      email,
      address,
      city,
      postalCode,
      country,
      isAdmin,
    }, { new: true })
  res.send(newUser);
})
router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newUser = await Users.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newUser);
})

module.exports = router;