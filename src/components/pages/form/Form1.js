import React, { useState , useEffect} from "react";

//first we define our function component
export default function Form1() {



  //let create our state hook and set an empty defaut value
  const [name, setName] = useState("");
// we define the handler function
  function handleChange(e) {
    setName(e.target.value);
  }

  //if you want to implement useEffect , this will display the name on the title of the document

 useEffect(()=>{
   if(name){
     document.title=`${name} - React-Showcase`
   }else{
     document.title='React-Showcase'
   }
 })
 
 
  return (
    <div>
    
      <div className="display">
      <span>Name: {name}</span>
      </div>
      
      <form className="group" onSubmit={e => {e.preventDefault(); setName(name)}}>
        <label htmlFor="namefield">Name</label>
        <input
          name="name"
          id="namefield"
          value={name}
          onChange={handleChange}
        />

        <button type="submit">send</button>
      </form>
    </div>
  );
}
