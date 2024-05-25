const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Products = require('../schemas/products.schema')

/* GET users listing. */
router.get('/', upload.single('imageSrc'), async function (req, res, next) {
  const products = await Products.find()
  res.send(products);
});

//////////////////
router.post('/', upload.single('imageSrc'), async function (req, res, next) {
  const { users, name, imageAlt, inCart, inFavorites, brand, description, category, countInStock, price, color, rating } = req.body
  const imageSrc = req.file.path;
  const newProduct = await Products.create({
    users,
    name, 
    imageSrc,
    imageAlt, 
    description,
    brand,
    category, 
    countInStock,
    inCart,
    inFavorites,
    price, color, 
    rating,
    createdAt: new Date(),
  })
  res.send(newProduct)
})

router.put('/', async function (req, res, next) {
  const { name, imageSrc, imageAlt, brand, description, inCart, inFavorites, category, countInStock, price, color, rating, _id } = req.body
  const newProduct = await Products.findByIdAndUpdate(_id,
    {
      name, 
      imageSrc,
      imageAlt, 
      brand,
      description,
      inCart,
      inFavorites,
      category, 
      countInStock,
      price, color, 
      rating,
    }, { new: true })
  res.send(newProduct);
})
router.delete('/', async function (req, res, next) {
  const { _id } = req.body
  const newProduct = await Products.findByIdAndUpdate(_id,
    {
      isVisible: false
    }, { new: true })
  res.send(newProduct);
})

module.exports = router;