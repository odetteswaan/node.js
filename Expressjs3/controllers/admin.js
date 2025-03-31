const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
 Product.create({
  title:title,
  imageUrl:imageUrl,
  price:price,
  description:description
 }).then(result=>{
  console.log(result)
  res.redirect('/')
 }).catch(err=>{
  console.log(err)
 })
};
exports.getEditProduct = (req, res, next) => {
  const prodId=req.params.productId;
  Product.findByPk(prodId).then((product)=>{
    if(!product){
      return res.redirect('/')
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/Edit-product',
      editing:true,
      product:product
    });

  })
  .catch(err=>{
    console.log(err)
  })
};

exports.getProducts = (req, res, next) => {
  Product.findAll().then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err=>{
    console.log(err)
  })
};

exports.postEditProduct=(req,res,next)=>{
  const prodId=req.body.productId;
  const updatedTitle=req.body.title;
  const updatedPrice=req.body.price;
  const updatedDescription=req.body.description;
  const updatedImageUrl=req.body.imageUrl;
 Product.findByPk(prodId).then(data=>{
  data.title=updatedTitle;
  data.price=updatedPrice;
  data.description=updatedDescription;
  data.imageUrl=updatedImageUrl;
  data.save()
 })
 .catch(err=>console.log(err))
  res.redirect('/admin/products')

}

exports.deleteProduct=(req,res,next)=>{
const prodId=req.body.productId;
Product.findByPk(prodId).then(result=>{
  return result.destroy()
}).then(()=>{
  console.log("Product destroyed")
}).catch(err=>{
  console.log(err)
})
res.redirect('/')
}