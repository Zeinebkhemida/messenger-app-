const sequalize =require('sequelize')
const {db}=require("../model/databaseModel")

module.exports={
    getAllRooms: async function (req,res){
       try {
           const allRooms= await db.Rooms.findAll({
            include: { all: true, nested: true }
           })

           res.status(200).send(allRooms)
       } catch (error) {
           throw error
       
       }
    },
    getRooms: async function (req,res){
        try {
            const allRooms= await db.Rooms.findAll({
            where:{name:req.params.name}
            })
 
            res.status(200).send(allRooms)
        } catch (error) {
            throw error
        
        }
     },
    getAllRoomsForOneUser: async function (req,res){
       try {
           const oneRoom= await db.Users.findOne({
            include:[
                          "Rooms"           
                             ],
              where :{id:req.params.userId}
           })
        
           res.status(200).send(oneRoom)
       } catch (error) {
           throw error
       }
    },
    getAllMessageForOneRoom: async function (req,res){
        try {
            const oneRoom= await db.Rooms.findAll({
                where :{id:req.params.RoomId},
                 include: [{
                    model:db.Messages,include:[{
                        model: db.Users
                    }]
                 }]
            //   include :[  
               
            //   "Messages"
              
            // //  include: [{
            // //           model: db.Messages,
            // //           include: [{
            // //             model: "users"
            // //           }]
            // //         }]
            //       ]

           
            })
         
            res.status(200).send(oneRoom)
        } catch (error) {
            throw error
        }
     },
    
    add: async function (req,res){
       try {
           const newRoom= await db.Rooms.create({
              name:req.body.name,
     
           })
           res.status(201).send(newRoom)
       } catch (error) {
           throw error
       }
    },
    deleted: async function (req,res){
       try {
           const roomDeleted= await db.Rooms.destroy({
         where:{name:req.params.name }
           })
           res.json(roomDeleted)
       } catch (error) {
           throw error
       }
    },
    addRoomsUser: async function (req,res){
        const userId = req.body.userId;
        const name = req.body.name;
        try {
            const roomResult = await db.Rooms.create({
                name
            });
            const room = roomResult.dataValues;
            const newRoom= await db.RoomsUsers.create({
              userId,
              RoomId: room.id
      
        });
            res.status(201).send(room)
        } catch (error) {
            throw error
        }
     },
      updateRoom: async function (req,res){
        try {
            const updatedRoom= await db.Rooms.update({name:req.body.name},{
          where:{name:req.params.name }
            })
            res.status(202).send(updatedRoom)
        } catch (error) {
            throw error
        }
     }


     
  
   
   }

