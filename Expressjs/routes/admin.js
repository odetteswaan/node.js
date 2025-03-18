const express=require('express')
const router=express.Router()
const path=require('path')
const rootDirectory=require('../utils/path')
router.get('/', (req, res, next) => {
    if (req.url === '/favicon.ico') {
        return res.status(204).end();
    }
    console.log('In path /');
    res.sendFile(path.join(rootDirectory,'views','shop.html'))
});
module.exports=router