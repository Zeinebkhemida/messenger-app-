const { getAllUsers, getOneUser, add,deleted,updated, signIn}=require("../controller/controller-users")
const express = require('express')
const routerUsers = express.Router()


routerUsers.get('/allUsers',getAllUsers)
routerUsers.post('/signIn',signIn)

routerUsers.get('/:name',getOneUser)
routerUsers.post('/newUser',add)
routerUsers.delete('/:name',deleted)
routerUsers.put('/:name',updated)

module.exports=routerUsers
