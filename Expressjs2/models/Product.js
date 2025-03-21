const product=[]
const path = require('path');
const fs=require('fs')
module.exports=class Product{
    constructor(t){
this.title=t;
    }

    save(){
    const p=path.join(path.dirname(require.main.filename),'Data','Product.json')
   fs.readFile(p,(err,fileContent)=>{
    let Product=[]
    if(!err){
        Product=JSON.parse(fileContent)
    }
    Product.push(this)
    fs.writeFile(p,JSON.stringify(Product),(err)=>{
        console.log(err)
    })
   })
    }
    static fetchAll(cb){
        const p=path.join(path.dirname(require.main.filename),'Data','Product.json')
        fs.readFile(p,(err,fileContent)=>{
            let product=[]
            if(!err){
                cb(JSON.parse(fileContent))
            }
            
            cb(product)
            
        })
    }
}