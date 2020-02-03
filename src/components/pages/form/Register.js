import React,{useState} from 'react';

export default function Register({setUser}){
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [passwordRepeat,setPasswordRepeat]=useState('')
  
 

  function handleUsername (evt){
    setUsername(evt.target.value) 
   
  }

  function handlePassword(evt){
    setPassword(evt.target.value)
  }
  function handlePasswordRepeat (evt) {
    setPasswordRepeat(evt.target.value)
}

  return(
      <div>
        <div className="display" id="login">
      <span>Username: {username}|| Password:{password} || RepeatPassword:{passwordRepeat}</span>
      </div>
    <form name="register" onSubmit={(e)=>{e.preventDefault();setUser(username) ;setPassword(password);setPasswordRepeat(passwordRepeat)}}>
   <label htmlFor="registerUsername" >Username</label>
   <input type="text" name="registerUsername" value={username} onChange={handleUsername} id="registerUsername"/>
   <label htmlFor="registerPassword" >Password</label>
   <input type="text" name="registerPassword" onChange={handlePassword} id="registerPassword"/>
   <label htmlFor="registerPasswordRepeat">Repeat password:</label>
   <input type="password" name="registerPasswordRepeat" value={passwordRepeat} onChange={handlePasswordRepeat} id="registerPasswordRepeat" />
   <input type="submit" value="Register" disabled={username.length===0 || password.length===0 || password!==passwordRepeat} />
    
    </form>
    
    </div>

  )
}