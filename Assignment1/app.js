const http=require('http')
const PORT=3000
const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        res.setHeader('Content-Type','text/html')
        res.write('<h1>hello Node Js</h1>')
        res.write(`
            <form action="/create-user" method="POST">
           <h1>User Name:</h1> <input placeholder='enter username' name="user"/>
            <button type="submit"> Create user</button>
            </form>
            `)
        return res.end()
    }
    if(url==='/users'){
        res.setHeader('Content-Type','text/html')
        res.write(`
            <h1> List of users </h1>
            <ul>
            <li>Jose</li>
            <li>Smith </li>
            <li>Alex </li>
            </ul>`)
        return res.end()
    }
    if(url==='/create-user'&&method==='POST'){
        const body=[]
        req.on('data',chunk=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            const parseData=Buffer.concat(body).toString()
            console.log(parseData.split('=')[1])
        })
        res.statusCode=302
        res.setHeader('Location','/')
        return res.end()
    }
})

server.listen(PORT,()=>(
    console.log(`Server is Running at ${PORT}`)
))
