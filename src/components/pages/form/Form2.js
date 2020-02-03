import React, { useState } from "react";
//first we define our function component
export default function Form2() {
  // define our state hook and set the initial value to empty ''
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
//let define the handle function
  function handleName(e) {
    setName(e.target.value);
  }
  function handleAge(e) {
    setAge(e.target.value);
  }
  function handleDate (e){
    setDate(e.target.value)
  }
  return (
    <div>
     <div id="display">
      <span>Name: {name} || Age: {age} || Date: {date}</span>
      </div>

        <form class="group" onSubmit={e =>{ e.preventDefault(); setName(name);setAge(age);setDate(date)}}>
      <ol>
        <li class="group">
          <label for="countyfield">Name</label>
          <input type="text" maxlength="10" name="name" id="namefield" value={name} onChange={handleName} />
        </li>

        <li class="group">
          <label for="agefield">Age</label>
          <input type="number" min="13" max="18" name="age" id="agefield" value={age} onChange={handleAge}/>
        </li>

        <li class="group">
          <label for="datetimefield">Reservation Date</label>
          <input type="date" min="2018-12-05" name="date" id="date" value={date} onChange={handleDate} />
        </li>
      </ol>
      <button type="submit">send</button>
    </form>
    </div>
   
  );
}
