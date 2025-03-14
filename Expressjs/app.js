const http=require('http')
const express=require('express')
const app=express()

const server=http.createServer(app)
server.listen(3000,()=>console.log('your port is running at 3000'))