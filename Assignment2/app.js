const Express=require('express')
const app=Express()

// app.use((req,res,next)=>{
//     if (req.url === '/favicon.ico') {
//         return res.status(204).end(); // Ignore favicon request
//     }
//     else{

//         console.log('this is first response')
//         console.log('Requested URL:', req.url);
//         next()
//     }
// })
// app.use((req,res,next)=>{
//     console.log('This is Second Response')
//     res.send('<h1>Hello From  Second Response</h1>')
// })
app.use('/user',(req,res,next)=>{
    if (req.url === '/favicon.ico') {
        return res.status(204).end(); // Ignore favicon request
    }
    else{

        //console.log('this is first response')
        res.send('<h1>Hello From   Response</h1>')
    
    }
})
app.use('/',(req,res,next)=>{
    console.log('This is / Response')
})


app.listen(3001,()=>console.log('Port is Running at 3001'))