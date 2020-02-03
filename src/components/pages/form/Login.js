import React,{useState} from 'react';


//we define our function component
//import the useState from react

export default function Login (){
//let create our state hook and set an empty defaut value
  const [ username, setUsername ] = useState('')
  const [password,setPassword]=useState('')


  function handleUsername (e) {
 setUsername(e.target.value)    }
 function handlePassword(e){
  setPassword(e.target.value)
}
  return(
    //We also define a form container element
    // to wrap them in. To avoid a page refresh when the form is submitted
    <div>
    <div className="display" id="login">
      <span>Username: {username}|| Password:{password} </span>
      </div>
   
    <form name="login-form" onSubmit={e => {e.preventDefault();setUsername(username);setPassword(password)}}>
    <label htmlFor="login-username">Username:</label>
    <input type="text" name="login-username" onChange={handleUsername} id="login-username"/>
    <label htmlFor="login-password">Password:</label>   
     <input type="text" name="login-password" id="login-password" value={password} onChange={handlePassword}/>
     <input type="submit" value="Login" disabled={username.length===0}/>
    </form>
    </div>
    

  )
}