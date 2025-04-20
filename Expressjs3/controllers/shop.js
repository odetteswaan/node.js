const Product = require('../models/product');
const Cart=require('../models/Cart');
const { Where } = require('sequelize/lib/utils');
const { where } = require('sequelize');
exports.getProducts = (req, res, next) => {
  Product.findAll()
.then(rows=>{
  res.render('shop/product-list', {
    prods: rows,
    pageTitle: 'All Products',
    path: '/products'
  });
})
.catch(err=>{
  console.log(err)
})
};
exports.getProduct=(req,res,next)=>{
 const prodId=req.params.productId;
 Product.findByPk(prodId).then(product=>{
  res.render('shop/product-detail',{
    pageTitle:'Product Details',
    path:'/',
    product:product
  })
 })
 .catch(err=>{
  console.log(err)
 })


}
exports.getIndex = (req, res, next) => {
  Product.findAll().then(result=>{
    res.render('shop/product-list', {
      prods: result,
      pageTitle: 'All Products',
      path: '/products'
    });

  }).catch(err=>{
    console.log(err)
  })
};

exports.getCart = (req, res, next) => {
 req.user.getCart().then(cart=>{
  console.log(cart)
  return cart.getProducts()
 }).then((prod)=>{
  const products=prod.map(i=>i.get({plain:true}))
  console.log(products)
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
    cartProductsData:products,
    totalPrice:'13'
  });
 })

};
exports.postCart=(req,res,next)=>{
const productId=req.body.productId;
let fetchedCart
req.user.getCart().then(cart=>{
fetchedCart=cart;
return cart.getProducts({where:{id:productId}})
}).then(prod=>{
let product;
let newQuantity=1;
if(prod.length>0){
  product=prod[0]
}
if(product){
  let oldQuantity=product.CartItem.quantity;
  newQuantity=oldQuantity+1;
}
 Product.findByPk(productId).then(prod=>{
  return fetchedCart.addProduct(prod,{through:{quantity:newQuantity}})
}).then(()=>{

  res.redirect('/cart');
})
})
}

exports.getOrders = (req, res, next) => {
  req.user
  .getOrders()
  .then(orders=>{

    res.render('shop/orders', {
      path: '/orders',
      pageTitle: 'Your Orders',
      orders:orders
    });
  })
  .catch(err=>console.log(err))
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.deleteCartItem=(req,res,next)=>{
  const prodId=req.body.productId;
  req.user
  .getCart()
  .then(cart=>{
    return cart.getProducts({where:{id:prodId}})
  }).then(products=>{
    const product=products[0]
    product.CartItem.destroy();

  }).then(results=>{
    res.redirect('/cart')
  })
  .catch(err=>console.log(err))

}

exports.postOrder=(req,res,next)=>{
  let fetchedCart;
  req.user.getCart()
  .then(cart=>{
    fetchedCart=cart;
    return cart.getProducts()
  }).then(products=>
    { return req.user
      .createOrder().then(order=>{
        order.addProducts(products.map(product=>{
          product.OrderItem={quantity:product.CartItem.quantity};
          return product;
        }))
      })
      .catch(err=>console.log(err))
    }).then(result=>{
      return fetchedCart.setProducts(null)
    }).then(result=>{
      res.redirect('/orders')
    })
  .catch(err=>console.log(err))
}