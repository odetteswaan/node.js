const path = require('path');

const express = require('express');
const getProductsController=require('../Controller/Product')
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', getProductsController.getProducts);

module.exports = router;
