const express = require('express');
const router = express.Router();
const product = require('../controller/Productdata')
const checkout = require('../controller/Checkout')

router.get('/product' , product )
router.post('/checkout' , checkout )

module.exports = router