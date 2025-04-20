const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const OrderItem=sequelize.define('OrderItem',{
    id:{
        allowNull:false,
        autoIncrement:true,
        type:Sequelize.INTEGER,
        primaryKey:true,
    },
    quantity:Sequelize.INTEGER,
})

module.exports=OrderItem