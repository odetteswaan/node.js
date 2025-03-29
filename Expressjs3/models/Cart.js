const fs=require('fs')
const path=require('path')

const p=path.join(path.dirname(require.main.filename),'data','cart.json')
module.exports=class Cart{
    static addProduct(id,price){
      let cart={products:[],totalPrice:0}
      fs.readFile(p,(err,fileContent)=>{
        if(!err){
            cart=JSON.parse(fileContent)
        }
        const existingProductIndex=cart.products.findIndex(prod=>prod.id===id)
        const existingProduct=cart.products[existingProductIndex]
        let UpdatedProduct
        if(existingProduct){
            UpdatedProduct={...existingProduct}
            UpdatedProduct.qty=UpdatedProduct.qty+1
            cart.products[existingProductIndex]=UpdatedProduct
        }
        else{
            UpdatedProduct={qty:1,id:id};
            cart.products=[...cart.products,UpdatedProduct]
        }
        cart.totalPrice=cart.totalPrice+price;
        fs.writeFile(p,JSON.stringify(cart),(err)=>{
            console.log(err)
        })
      })
    }
}