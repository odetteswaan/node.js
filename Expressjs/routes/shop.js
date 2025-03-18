const express=require('express')
const userRoutes=express.Router()
const path=require('path')
const rootDirectory=require('../utils/path')
userRoutes.get('/add-user', (req, res, next) => {
    res.sendFile(path.join(rootDirectory,'views','add-product.html'))
});

userRoutes.post('/user', (req, res) => {
    console.log(req.body); 
    
    res.send(`<h1>you product name ${req.body.title}</h1>`)
});

module.exports=userRoutes