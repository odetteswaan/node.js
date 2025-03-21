const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const path=require('path')
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'Public')))
app.use(bodyParser.urlencoded({extended:false}))
const users=[]
app.get('/',(req,res)=>{
res.render('user',{userList:users,name:'akash'})
console.log(users)
})
app.get('/add-user',(req,res)=>{
    res.render('AddUser')
})

app.post('/user',(req,res)=>{
    users.push({
        username:req.body.username
    })
    res.redirect('/')
})


app.listen(3000,()=>{
    console.log('your app is running at port 3000')
})