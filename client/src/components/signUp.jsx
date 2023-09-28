import React,{useState} from "react";


const SignUp=(props)=>{
  
    console.log(props)
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [image,setImage]=useState('')
    const myImage = cld.image(image)
    const myURL = myImage.toURL();
    


    const checkUser=(e)=>{
        let check=false
        if( (name==="" ) || (password==="")  || (email ==="" ) ){
          
           ( alert("Enter your data")  )
    
            }
            else {
            props.usersData.forEach(element => {
                if( (element.name===name) && (element.password===password) && (element.email===email)){
                  check=true
                    console.log(element)
                
                }
                
             } )
               if(check===true){
                 alert("YOU ALREADY HAVE AN ACCOUNT") 
                 
      
               }
                else if(check===false) {
                    setImage(myURL)
                    props.addUser({name:name,password:password,email:email,image:image})
                    
                }    
                
            }
         
    
    }
return (
    <div className="signIn">
<form className="form">
    <p className="title">Register </p>
    <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
        <label>
            <input className="input" type="text" placeholder="" required="" onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <span>Firstname</span>
        </label>

        <label>
            <input className="input" type="text" placeholder="" required="" />
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input className="input" type="email" placeholder="" required="" onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
        <span>Email</span>
    </label> 
        
    <label>
        <input className="input" type="password" placeholder="" required="" onChange={(e)=>{
            setPassword(e.target.value)
        }}
            />
        <span>Password</span>
    </label>
    <label>
        <input className="input" type="file" placeholder="" required="" onChange={(e)=>{
                setImage(e.target.value)
            }}/>
        <span>Choice Picture</span>
    </label>
    <button className="submit" onClick={()=>{
              checkUser()
    }}>Submit</button>
    <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
</div>
)


}

export default SignUp