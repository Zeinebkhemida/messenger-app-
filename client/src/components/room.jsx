import React,{useState} from "react";



const Room=(props)=>{
  const [message,setMessage]=useState('')
 
  console.log(props.usersData)
   return(

<div class="col-md-8 col-xl-6 chat">
					<div class="card">
						<div class="card-header msg_head">
							<div class="d-flex bd-highlight">
								<div class="img_cont">
									<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img"/>
									<span class="online_icon"></span>
								</div>
								<div class="user_info">
									<span>{props.roomName}</span>
									<p>1767 Messages</p>
								</div>
								<div class="video_cam">
									<span><i class="fas fa-video"></i></span>
									<span><i class="fas fa-phone"></i></span>
								</div>
							</div>
							<span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
					
						</div>
         {props.messagesData.map((e)=>{
			   
      return (


						<div class="card-body msg_card_body">
             

							<div class="d-flex justify-content-start mb-4">

								<div class="img_cont_msg">
             
									<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img_msg"/>
								</div>
			
								<div class="msg_cotainer">
								 {e.Messages[0].message}
								 
                
                    <div>
				
             
									<span class="msg_time">{e.Messages[1].user.name}</span>
               
                  </div>
       
								</div>
		
							</div>
							
         
						</div>
       )   
        })}

						<div class="card-footer">
							<div class="input-group">
								<div class="input-group-append">
									<span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
								</div>
								<textarea name="" class="form-control type_msg" placeholder="Type your message..." onChange={(e)=>{
                  setMessage(e.target.value)
                }}></textarea>
								<div class="input-group-append">
									<span class="input-group-text send_btn"><i class="fas fa-location-arrow" onClick={()=>{
                   props.addMessage(props.roomId,message)
                  }}></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
		


   )  
    


}

  export default Room



