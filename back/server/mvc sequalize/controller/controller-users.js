
const sequalize =require('sequelize')
const {db}=require("../model/databaseModel")

module.exports={
    getAllUsers: async function (req,res){
       try {
           const allUsers= await db.Users.findAll()
           res.status(200).send(allUsers)
       } catch (error) {
           throw error
       
       }
    },
    signIn: async function (req,res){
        try {
            const user= await db.Users.findOne({
                where:{email: req.body.email}
            })
            if(!user){
                return res.status(401).send()
            }
            if(user.password===req.body.password){
                 return res.status(401).send()
            }
            return res.status(200).send(user)
        } catch (error) {
            throw error
        
        }
    },
    getOneUser: async function (req,res){
       try {
           const oneUser= await db.Users.findOne({
              where :{name:req.params.name }
           })
           res.status(200).send(oneUser)
       } catch (error) {
           throw error
       }
    },
    add: async function (req,res){
       try {
           const newUser= await db.Users.create({
              name:req.body.name,
               email:req.body.email,
               password:req.body.password,
               image:req.body.image
           })
           res.status(201).send(newUser.dataValues)
       } catch (error) {
           throw error
       }
    },
    deleted: async function (req,res){
       try {
           const userDeleted= await db.Users.destroy({
         where:{  name:req.params.name }
           })
           res.json(userDeleted)
       } catch (error) {
           throw error
       }
    },
    updated:async function (req,res){
        try {
            const userUpdate= await db.Users.update(req.body,{
          where:{  name:req.params.name }
            })
            res.send(userUpdate)
        } catch (error) {
            throw error
        }
     }
   
   }

