import React, { useState } from "react";

//first we define our function component
export default function Form1() {
  //let create our state hook and set an empty defaut value
  const [name, setName] = useState("");
// we define the handler function
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
    
      <div className="display">
      <span>Name: {name}</span>
      </div>
      
      <form class="group" onSubmit={e => {e.preventDefault();setName(name)}}>
        <label for="namefield">Name</label>
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
