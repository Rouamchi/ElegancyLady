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
  const { username, password,  email, address, city, postalCode, country, isAdmin } = req.body
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
  })
  res.send(newUser)
})

// router.post('/', async function (req, res, next) {
//   const { username, password, email, address, city, postalCode, country, isAdmin } = req.body

//   // Check if the user already exist:
//   // Check the Username
//   let error = false
//   const userUsername = await Users.findOne({
//     username
//   })
//   if (userUsername) {
//     error = true
//     res.send({ msg: 'Username is already registred', ok: false })
//   }
//   // Check the Password
//   const userPassword = await Users.findOne({
//     password
//   })
//   if (userPassword) {
//     error = true
//     res.send({ msg: 'The password is already registred', ok: false })
//   }
//   //Check the Email
//   const userEmail = await Users.findOne({
//     email
//   })
//   if (userEmail) {
//     error = true
//     res.send({ msg: 'The email is already registred', ok: false })
//   }
//   //Check the Address
//   const userAddress = await Users.findOne({
//     address
//   })
//   if (userAddress) {
//     error = true
//     res.send({ msg: 'The email is already registred', ok: false })
//   }
//   //Check the City
//   const userCity = await Users.findOne({
//     city
//   })
//   if (userCity) {
//     error = true
//     res.send({ msg: 'The email is already registred', ok: false })
//   }
//   //Check the PostalCode
//   const userPostalCode = await Users.findOne({
//     postalCode
//   })
//   if (userPostalCode) {
//     error = true
//     res.send({ msg: 'The email is already registred', ok: false })
//   }

//   //Check the Country
//   const userCountry = await Users.findOne({
//     country
//   })
//   if (userCountry) {
//     error = true
//     res.send({ msg: 'The email is already registred', ok: false })
//   }
//   if (!error) {
//     const newUser = await Users.create({
//       username,
//       password,
//       email,
//       address,
//       city,
//       postalCode,
//       country,
//       isAdmin,
//       createdAt: new Date(),
//     })
//     res.send({ newUser, ok: true })
//   }
// })

// // Check user
// router.post('/SignIn', async function (req, res, next) {
//   const { username, password } = req.body
//   const user = await Users.findOne({
//     username,
//     password
//   })
//   if (user) {
//     res.send({ state: 'Successfully logged in', ok: true, _id: user._id })

//   } else {
//     res.send({ state: 'Can not find this user, Please Check again', ok: false })
//   }
// })
router.put('/', async function (req, res, next) {
  const { username, password, email, address, city, postalCode, country, isAdmin, _id } = req.body
  const newUser = await Users.findByIdAndUpdate(_id,
    {
      username,
      password,
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