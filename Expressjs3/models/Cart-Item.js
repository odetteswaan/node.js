const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const CartItem=sequelize.define('CartItem',{
    id:{
        allowNull:false,
        autoIncrement:true,
        type:Sequelize.INTEGER,
        primaryKey:true,
    },
    quantity:Sequelize.INTEGER,
})

module.exports=CartItem