const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Order=sequelize.define('Order',{
  id:{
    autoIncrement:true,
    allowNull:false,
    type:Sequelize.INTEGER,
    primaryKey:true,
  }
});

module.exports=Order;