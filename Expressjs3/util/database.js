const mysql=require('mysql2')

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'17082001',
})



module.exports=pool.promise()