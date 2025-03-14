const express=require('express')
const router=express.Router()
router.get('/', (req, res, next) => {
    if (req.url === '/favicon.ico') {
        return res.status(204).end();
    }
    console.log('In path /');
    res.send('<h1>Home Page</h1>');
});
module.exports=router