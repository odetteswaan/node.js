const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const sequelize=require('./util/database')
const errorController = require('./controllers/error');
const Product=require('./models/product')
const User=require('./models/User')
const Cart=require('./models/Cart')
const CartItem=require('./models/Cart-Item')
const Order=require('./models/Order')
const OrderItem=require('./models/Order-item')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req,res,next)=>{
User.findByPk(1).then(user=>{
    req.user=user;
    next();
})
.catch(err=>{
    console.log(err)
})
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User,{constraints:true,onDelete:'CASCADE'});
User.hasMany(Product)
Cart.belongsTo(User)
User.hasOne(Cart)
Cart.belongsToMany(Product,{through:CartItem})
Product.belongsToMany(Cart,{through:CartItem})
Order.belongsTo(User)
User.hasMany(Order)
Product.belongsToMany(Order,{through:OrderItem})
Order.belongsToMany(Product,{through:OrderItem})

sequelize.sync().then((result)=>{
    
    return User.findByPk(1);
}).then(user=>{
    if(!user){
       return User.create({name:'AKASH',email:'akash@gmail.com'})
    }
    return user;
}).then(user=>{
    let cart=user.getCart().then(cart=>{
        if(!cart){ 
           return user.createCart({});

        }
        return cart
    })

})
.then(cart=>{
    console.log(cart)
    app.listen(3000,()=>{console.log('your port is runiing at 3000')})
})
.catch(err=>{
    console.log(err)
})
