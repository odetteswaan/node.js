const express=require('express')
const userRoutes=express.Router()
userRoutes.get('/add-user', (req, res, next) => {
    res.send(`<form method="POST" action='/user'>
        <input type="text" name="user" placeholder="Enter text"/>
        <button type="submit">Submit</button>
    </form>`);
});

userRoutes.post('/user', (req, res) => {
    console.log('++++')
    console.log(req.body); 
    res.redirect('/');
});

module.exports=userRoutes