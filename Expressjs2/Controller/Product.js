const Product=require('../models/Product')

exports.addProducts=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

exports.addNewProducts=(req, res, next) => {
const product=new Product(req.body.title)
product.save()

  res.redirect('/');
}

exports.getProducts=(req, res, next) => {
  const products=Product.fetchAll()
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
}
exports.error404=(req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found',path:'/' });
  }