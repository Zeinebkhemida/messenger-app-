const routerUsers=require("./mvc sequalize/router/router-users")
const routerMessages=require("./mvc sequalize/router/router-messages")
const routerRooms=require("./mvc sequalize/router/router-rooms")
const express = require('express')
var cors = require('cors')

const app = express()
const PORT = 3000
app.use(express.json())

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors())


app.use('/Users',routerUsers)
app.use('/Message',routerMessages)
app.use('/Rooms',routerRooms)

app.listen(PORT, () =>{
        console.log("Server is Successfully Running"+ PORT)
    }
)
module.exports.app=app