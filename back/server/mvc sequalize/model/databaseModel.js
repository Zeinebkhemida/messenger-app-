const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize("messenger","root", "root", {
    host: 'localhost',
    dialect: 'mysql'
  })

 sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 })

 const db={}
 db.sequelize=sequelize
 db.Sequelize=Sequelize

 db.Users=require("./users") (sequelize,DataTypes)
 db.Messages=require("./message") (sequelize,DataTypes)
 db.Rooms=require("./rooms") (sequelize,DataTypes)
db.RoomsUsers=require("./roomsUser")(sequelize,DataTypes)
db.RoomsMessage=require("./roomsMessage") (sequelize,DataTypes)

db.Users.hasMany(db.Messages)
db.Messages.belongsTo(db.Users)

db.Users.belongsToMany(db.Rooms,{ through: db.RoomsUsers })
db.Rooms.belongsToMany(db.Users,{ through: db.RoomsUsers })


db.Rooms.belongsToMany(db.Messages,{ through: db.RoomsMessage })
db.Messages.belongsToMany(db.Rooms,{ through: db.RoomsMessage})



//  sequelize.sync({ force: true})

module.exports.db=db

  
  
