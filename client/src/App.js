import React,{useState,useEffect} from 'react';
import axios from 'axios';
import AllRooms  from './components/rooms.jsx';
import Room  from './components/room.jsx'
import SignUp from './components/signUp.jsx';
import SignIn from './components/signin.jsx';



const App=() =>{
  const [view,setView]= useState("rooms")
  const [usersData,setUsersData]=useState([])
  const [messagesData,setMessagesData]=useState([])
  const [messageOneUser,setMessagesOneUser]=useState([])
  const [roomsData,setRoomsData]=useState([])
  const [roomName,setNameRoom]=useState('')
  const [roomId,setRoomId]=useState('')


const changeView=(view)=>{
  setView(view)
}
////////////////////////////all data/////////////////
useEffect(()=>{
  fetch()
},[])



const fetchUsers = ()=>{
  axios.get("http://localhost:3000/Users/allUsers").then((response)=>{
setUsersData(response.data)
console.log(response.data)
  }).catch((error)=>{
   console.log(error)
  })

}
const fetchRooms = ()=>{
  axios.get("http://localhost:3000/Rooms/allRooms").then((response)=>{
    console.log('all rooms', response.data)
    setRoomsData(response.data)
  }).catch((error)=>{
   console.log(error)
  })

}
const fetchMessages = (roomId)=>{
  axios.get(`http://localhost:3000/Rooms/allMessage/${roomId}`).then((response)=>{
   
 
setMessagesData(response.data)
console.log(response.data)


  }).catch((error)=>{
   console.log(error)
  })

const fetch=()=>{
  fetchRooms()
  // fetchMessages()
  fetchUsers()
  }


  ///////////////////users////////////////////
const addUser=(newUser)=>{
  
axios.post("http://localhost:3000/Users/newUser",newUser).then((response)=>{
 
  setUsersData(response.data)
  setView("signIn")
console.log(response.data.id)
  window.localStorage.setItem('userId', response.data.id)
    }).catch((error)=>{
     console.log(error)
    })

}


//////////////////////rooms////////////////
const addRooms=(newRoom)=>{
  const userId = window.localStorage.getItem('userId');
  axios.post("http://localhost:3000/Rooms/userToRoom", {
    userId,
    name: newRoom
  } 
  ).then((response)=>{
    setView("rooms")

    console.log(response.data)
    fetchRooms()
      }).catch((error)=>{
       console.log(error)
      })
  
  }
  const signIn =()=>{
    setView("rooms")
  }
  const signUp =()=>{
    setView("signIn")
  }

  const DeletedRooms=(room)=>{
    axios.delete(`http://localhost:3000/Rooms/${room}`).then((response)=>{
      setView("rooms")
      setRoomsData(response.data)
  
      fetchRooms()
        }).catch((error)=>{
         console.log(error)
        })
    
    }
  const SearchForRooms =(roomName)=>{
   axios.get(`http://localhost:3000/Rooms/${roomName}`).then((response)=>{
      setRoomsData(response.data)
    }).catch((error)=>{
     console.log(error)
    })
  }
  const deletedRoom =(roomName)=>{
    axios.delete(`http://localhost:3000/Rooms/${roomName}`).then((response)=>{
       setRoomsData(response.data)
     }).catch((error)=>{
      console.log(error)
     })
   }
const getessagesByOneUsers=(userId)=>{
axios.get(`http://localhost:3000/Message/${userId}`).then((response)=>{
  setMessagesOneUser(response.data)
  console.log(response.data)
}).catch((error)=>{
  console.log(error)
})


}


const UpdateNameRoom=(name1,newName)=>{
axios.put(`http://localhost:3000/Rooms/updateRoom/${name1}`,{name:newName}).then((response)=>{
console.log(response)
  setView("rooms")
  fetchRooms()
}).catch((error)=>{
  console.log(error)
})
}

}

const roomOne=(name)=>{
 setNameRoom(name)
 setView("room")
}


 const getAllRoomsForOneUser =(userId)=>{
axios.get(`http://localhost:3000/Rooms/allRooms/${userId}`).then((response)=>{
  setMessagesData(response.data)
    }).catch((error)=>{
     console.log(error)
    })
  
 }
 const addMessage=(roomId,newMessage)=>{
  const userId = window.localStorage.getItem('userId')
  axios.post(`http://localhost:3000/Messages/message/${roomId}`,{userId:userId,message:newMessage}).then((response)=>{
    setMessagesData(response.data)
    
  })
 }



const render=()=>{
  if(view==="room"){
    return <Room   usersData={usersData} getessagesByOneUsers={getessagesByOneUsers}  messageOneUser={messageOneUser} messagesData={messagesData} addMessage={addMessage} roomId={roomId} roomName={roomName} />
  }
  if(view==="rooms"){
    return <AllRooms  UpdateNameRoom={UpdateNameRoom} fetchMessages={fetchMessages} setRoomId={setRoomId} roomOne={roomOne} setView={setView}  getAllRoomsForOneUser={getAllRoomsForOneUser} SearchForRooms={SearchForRooms} DeletedRooms={DeletedRooms} addRooms={addRooms}  roomsData={roomsData}  />
  }
  if(view==="signUp"){
    return <SignUp   usersData={usersData} addUser={addUser} />
  }
  if(view==="signIn"){
    return <SignIn   signIn={signIn} usersData={usersData}  />
  }
}
  return (
    <div>
      
     
     { render()}
    </div>
  )
}

export default App;
