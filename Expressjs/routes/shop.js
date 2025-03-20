const express=require('express')
const userRoutes=express.Router()
const main=require('./admin')

userRoutes.post('/user', (req, res) => {
    main.Users.push({title:req.body.title})
   res.redirect('/')
});

module.exports=userRoutes