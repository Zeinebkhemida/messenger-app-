
module.exports=(sequelize, DataTypes)=>{

const Messages = sequelize.define('Messages', {

    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey:true,
       autoIncrement:true
     },
  
    message:DataTypes.STRING
    
   }
 
   )
   return Messages
}
