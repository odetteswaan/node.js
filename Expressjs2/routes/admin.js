const path = require('path');
const express = require('express');


const router = express.Router();
const addProductsController=require('../Controller/Product')
const products = [];

// /admin/add-product => GET
router.get('/add-product', addProductsController.addProducts);

// /admin/add-product => POST
router.post('/add-product', addProductsController.addNewProducts);

exports.routes = router;
exports.products = products;
