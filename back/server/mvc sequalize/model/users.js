
module.exports=(sequelize, DataTypes)=>{

const Users = sequelize.define('users', {

    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey:true,
       autoIncrement:true
     },
    name: DataTypes.STRING,
     password: DataTypes.STRING,
    image:DataTypes.STRING,
    email:DataTypes.STRING
     
 
   }
   )
   return Users
  }
