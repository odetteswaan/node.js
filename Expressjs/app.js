const http=require('http')
const express=require('express')
const app=express()

app.use('/add-product',(req,res,next)=>{
res.send('<h1>This is Add Product Page<h1>')
})
app.use('/',(req,res,next)=>{
    console.log("Another Moddleware")
    res.send('<h1>Hello From Express js</h1>')
})
app.listen(3000,()=>console.log('server is running at 3000'))