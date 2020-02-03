import React from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'

export default function UserBar ({user,setUser}) {
  //we check whether the user is logged in or not. If the user is logged in,
  // we display the Logout component, and pass the user value to it:
 



  if(user){
    return <Logout user={user} setUser={setUser}/>
  }else{
    return(
      <React.Fragment>
        <Login setUser={setUser}/>
        <Register setUser={setUser}/>
      </React.Fragment>
    )
  }
}