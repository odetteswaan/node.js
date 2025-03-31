const Product = require('../models/product');
const Cart=require('../models/Cart')
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
.then(([rows,fieldData])=>{
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
 Product.findById(prodId).then(([row])=>{
  res.render('shop/product-detail',{
    pageTitle:'Product Details',
    path:'/',
    product:row[0]
  })
 })
 .catch(err=>{
  console.log(err)
 })


}
exports.getIndex = (req, res, next) => {
  Product.fetchAll()
.then(([rows,fieldData])=>{
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

exports.getCart = (req, res, next) => {
  Cart.getCart(cartItems=>{
    Product.fetchAll(products=>{
      let cartProducts=[]
      for(let prod of products){
       const cartProduct=cartItems.products.find(ci=>ci.id===prod.id);
       if(cartProduct){

         cartProducts.push({productData:prod,qty:cartProduct.qty})
       }
      }
      
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        cartProductsData:cartProducts,
        totalPrice:cartItems.totalPrice
      });
    })
  })
};
exports.postCart=(req,res,next)=>{
const productId=req.body.productId;
const price=parseInt(req.body.price)
console.log(productId,price)
Cart.addProduct(productId,price)
res.redirect('/cart')
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

exports.deleteCartItem=(req,res,next)=>{
  const prodId=req.body.productId;
  const price=parseInt(req.body.price);
  console.log(prodId,price)
  Cart.deleteProduct(prodId,price)

  res.redirect('/cart')
}
