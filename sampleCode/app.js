const http =require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
const url=req.url
const method=req.method
if(url==='/'){
    res.setHeader('Content-Type','text/html')
res.write(`<html>
    <head><title>my Form </title>
    <body>
    <form method="POST" action="/message">
    <input type="text" placeholder="enter name" name="name"/>
    <button type="submit"> Post </button>
    </form>
    </body></html>`)
return res.end()
}
if(url==="/message"&&method==="POST"){
const body=[]
req.on('data',(chunk)=>{
console.log(chunk)
body.push(chunk)
})
req.on('end',()=>{
    const parsedBody=Buffer.concat(body).toString();
   const message=parsedBody.split('=')
    fs.writeFileSync('message.txt',message[1])
})

    res.statusCode=302
    res.setHeader('Location','/')
    return res.end()

}

})

server.listen(3000)