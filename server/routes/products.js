
const express = require('express');
const router = express.Router();
// const multer = require('multer');
const path = require('path');
const Products = require('../schemas/products.schema');

// Multer setup for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });
// const upload = multer({ storage });

/* GET products listing. */
router.get('/', async function (req, res, next) {
  try {
    const products = await Products.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* POST a new product. */
// router.post('/', upload.single('imageSrc'), async function (req, res, next) {
  router.post('/', async function (req, res, next) {
  try {
    const { name, imageSrc, description, countInStock, inCart, inFavorites, price, color } = req.body;
    // const imageSrc = `/uploads/${req.file.filename}`;
    const newProduct = new Products({
      name,
      imageSrc,
      description,
      countInStock,
      inCart,
      inFavorites,
      price,
      color,
      createdAt: new Date(),
    });
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* PUT update a product. */
router.put('/', async function (req, res, next) {
  try {
    const { _id, name, description, countInStock, inCart, inFavorites, price, color } = req.body;
    const updatedProduct = await Products.findByIdAndUpdate(_id, {
      name,
      description,
      countInStock,
      inCart,
      inFavorites,
      price,
      color,
    }, { new: true });
    res.send(updatedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* DELETE a product. */
router.delete('/', async function (req, res, next) {
  try {
    const { _id } = req.body;
    const updatedProduct = await Products.findByIdAndUpdate(_id, {
      isVisible: false
    }, { new: true });
    res.send(updatedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;






// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
// const Products = require('../schemas/products.schema')

// /* GET users listing. */
// router.get('/', async function (req, res, next) {
//   const products = await Products.find()
//   res.send(products);
// });

// //////////////////
// router.post('/', upload.single('imageSrc'), async function (req, res, next) {
//   const { users, name, imageAlt, inCart, inFavorites, brand, description, category, countInStock, price, color, rating } = req.body
//   const imageSrc = req.file.path;
//   const newProduct = await Products.create({
//     users,
//     name, 
//     imageSrc,
//     imageAlt, 
//     description,
//     brand,
//     category, 
//     countInStock,
//     inCart,
//     inFavorites,
//     price, color, 
//     rating,
//     createdAt: new Date(),
//   })
//   res.send(newProduct)
// })

// router.put('/', async function (req, res, next) {
//   const { name, imageSrc, imageAlt, brand, description, inCart, inFavorites, category, countInStock, price, color, rating, _id } = req.body
//   const newProduct = await Products.findByIdAndUpdate(_id,
//     {
//       name, 
//       imageSrc,
//       imageAlt, 
//       brand,
//       description,
//       inCart,
//       inFavorites,
//       category, 
//       countInStock,
//       price, color, 
//       rating,
//     }, { new: true })
//   res.send(newProduct);
// })
// router.delete('/', async function (req, res, next) {
//   const { _id } = req.body
//   const newProduct = await Products.findByIdAndUpdate(_id,
//     {
//       isVisible: false
//     }, { new: true })
//   res.send(newProduct);
// })

// module.exports = router;