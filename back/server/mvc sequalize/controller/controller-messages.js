const sequalize =require('sequelize')
const {db}=require("../model/databaseModel")

module.exports={
    getAllMessages: async function (req,res){
       try {
           const allMessages= await db.Messages.findAll()
           res.status(200).send(allMessages)
       } catch (error) {
           throw error
       
       }
    },
    getOneMessage: async function (req,res){
       try {
           const oneMessage= await db.Messages.findOne({
              where :{userId:req.params.userId }
           })
           res.status(200).send(oneMessage)
       } catch (error) {
           throw error
       }
    },
    add: async function (req,res){
        console.log(req.params.roomId)
        
       try {
           const newMessage= await db.Messages.create({
            message:req.body.message,
            userId:req.body.userId,
                
           })
           const addMessageToRoom=await db.RoomsMessage.create({
            MessageId: newMessage.id,
            RoomId : req.params.RoomId

        })
     
           res.status(201).send(newMessage)
       } catch (error) {
           throw error
       }
    },
    deleted: async function (req,res){
       try {
           const messageDeleted= await db.Messages.destroy({
         where:{  userId:req.params.userId }
           })
           res.json(messageDeleted)
       } catch (error) {
           throw error
       }
    },
    updated:async function (req,res){
        try {
            const msgUpdate= await db.Messages.update(req.body,{
          where:{  message:req.params.name }
            })
            res.send(msgUpdate)
        } catch (error) {
            throw error
        }
    }
  
   
   }