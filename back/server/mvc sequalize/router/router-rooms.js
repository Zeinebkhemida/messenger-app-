const { getAllRooms, getAllRoomsForOneUser,getRooms , add,deleted,addRoomsUser,getAllMessageForOneRoom,updateRoom}=require("../controller/controller-rooms")
const express = require('express')
const routerRooms = express.Router()


routerRooms.get('/allRooms',getAllRooms)
routerRooms.get('/:name',getRooms)
routerRooms.get('/allRooms/:userId',getAllRoomsForOneUser)
routerRooms.get('/allMessage/:RoomId',getAllMessageForOneRoom)
// routerRooms.post('/newRoom/', add)
routerRooms.delete('/:name', deleted)
routerRooms.post('/userToRoom', addRoomsUser)
routerRooms.put("/updateRoom/:name",updateRoom)

module.exports=routerRooms
