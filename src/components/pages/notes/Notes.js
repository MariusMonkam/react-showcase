import React, { useState } from "react";
import {Link} from 'react-router-dom'
//This component is going to allow you to write a note , display the list and delete a note

export default function Notes() {
  //let define our hook state

  //let define the title
  const [title, setTitle] = useState("");
  //let define the note which is an array of note
  const [notes, setNotes] = useState([]);

  //function to handle the change on the title
  function handleTitle(e) {
    //let set the title 
    setTitle(e.target.value);
  }

  // our functional component to add note

  //e.preventDefault to prevent the form to reload by itself on the browser
  const AddNotes = (e) => {
    e.preventDefault();
    // first we spread the note by the current existing note by using the spread operator
    // [...note] then we add the new title we just enter {title}
    setNotes([...notes, { title }]);
    // wethe clean the input field to make it ready for next input
    setTitle("");
  };
  //to delete note , we pass title as argument in our functional component
  //then we set the note by calling setNotes and we filter all the notes
  // except those that does not match the condition
  const removeNote = (title)=>{
 setNotes(notes.filter((note)=>note.title !==title))
}
  return (


    <div className="container-fluid">
     <nav className="button-notes" > 
            <div>
            <ol className="nav-link">
          
          
              <li >
                 <Link to="/">
                  <button className="side-button" type="button">Home</button>
                </Link>
              </li>
             
            
            </ol>
             
            </div>
          </nav>
      <h2>Notes</h2>
      <p>Add note</p>
      <div className="d-flex justify-content-center">
      {/**Here we need to map trough the notes array to display the list of note
      remember that note need to have unique identify key, here our
      key={note.title} */}
        {notes.map(note => (
          <div key={note.title} className="row mr-5" >
            <h1>{note.title}</h1>
             {/*to avoid calling the wrong argument we are not going to call the function directly
             we use arrow function to call the correct argument  */}
            <button onClick={()=>removeNote(note.title)} className="bg-danger text-white">X</button>
          </div>
        ))}
      </div>
      <form onSubmit={AddNotes}>
        
        <input type="text" value={title} onChange={handleTitle} />
        <button type="submit">Add note</button>
      </form>
    <a href="https://github.com/MariusMonkam/react-showcase/blob/master/src/components/pages/notes/Notes.js">Source-code</a>
    </div>
  );
}
