const express = require('express');
const router = express.Router();

const Users = require('../schemas/users.schema')
const Order = require('../schemas/orders.schema')
const Products = require('../schemas/products.schema')

const importData = async () => {
  try {
    await Users.create(users)
    await Products.create()
    await Order.create()


    const createUser = await Users.create()

    const adminUser = createUser[0]._id

    const sampleProducts = Products.map((product) => {
      return { ...product, users: adminUser }
    })

    await Products.create(sampleProducts)
    console.log('Data imported')
  } 
  catch (error) {
    console.log(`${error}`)
  }
}
  importData()

module.exports = router;
