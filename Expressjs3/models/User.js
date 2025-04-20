const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const User=sequelize.define('user',{
    id:{
    autoIncrement:true,
    primaryKey:true,
    allowNull:false,
    type:Sequelize.INTEGER
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING,
});

module.exports=User