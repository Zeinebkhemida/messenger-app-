const { getAllMessages, getOneMessage, add,deleted,updated}=require("../controller/controller-messages")
const express = require('express')
const routerMessages = express.Router()


// routerMessages.get('/allMessages',getAllMessages)
routerMessages.get('/:userId',getOneMessage)
// routerMessages.post('/newMessage',add)
routerMessages.delete('/:userId',deleted)
routerMessages.put('/:name',updated)
routerMessages.post('/message/:RoomId',add)
module.exports=routerMessages
