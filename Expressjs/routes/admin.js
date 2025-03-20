const express=require('express')
const router=express.Router()
const path=require('path')
const rootDirectory=require('../utils/path')
const Users=[]
router.get('/', (req, res, next) => {
    if (req.url === '/favicon.ico') {
        return res.status(204).end();
    }
    console.log(Users)
    res.render('shop',{listOfFriends:Users})
});
router.get('/add-user', (req, res, next) => {
    res.render('add-product')
});
router.get('/api/data',(req,res)=>{
    res.json(Users)
})
exports.router=router;
exports.Users=Users;