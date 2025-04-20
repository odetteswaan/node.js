const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Cart=sequelize.define('Cart',{
  id:{
    autoIncrement:true,
    allowNull:false,
    type:Sequelize.INTEGER,
    primaryKey:true,

  }
});

module.exports=Cart;