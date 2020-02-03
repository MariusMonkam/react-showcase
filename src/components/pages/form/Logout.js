import React from 'react';

//our function is going to take a user prop, 
//which we are going to use to display the currently logged-in user:
export default function Logout({user,setUser}){
  return(
   <form onSubmit={e=>{e.preventDefault();setUser('')}}>
   Logged in as : <b>{user}</b>
   <input type="submit" value="Logout"/>

   </form>

  )
}