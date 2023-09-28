
module.exports=(sequelize, DataTypes)=>{

const Rooms = sequelize.define('Rooms', {

    id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey:true,
       autoIncrement:true
     },
  name:DataTypes.STRING
 
    
 
   }
 
   )
   return Rooms
  }
