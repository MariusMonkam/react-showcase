//This component synchronize your post with localStorage

// Read post from localStorage if there is no data stored ? default empty array
// Call useEffect to update localStorage when post array change
// 1- we update our post component by import useEffect from react
import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
//This component is going to allow you to write a note , display the list and delete a note

export default function LocalStoragePosts() {
  //let define our hook state
//2- reading the post from localStorage
const postsData = JSON.parse(localStorage.getItem('posts'))
  //let define the title
  const [title, setTitle] = useState("");
  // set the post body
  const [body,setBody]=useState("")
  //let define the note which is an array of note
  
  const [posts, setPosts] = useState(postsData || []);

  //function to handle the change on the title
  function handleTitle(e) {
    //let set the title 
    setTitle(e.target.value);
  }
  function handleBody(e) {
    //let set the title 
    setBody(e.target.value);
  }

  // our functional component to add note

  //e.preventDefault to prevent the form to reload by itself on the browser
  const AddPosts = (e) => {
    e.preventDefault();
    // first we spread the note by the current existing note by using the spread operator
    // [...note] then we add the new title we just enter {title}
    setPosts([...posts, { title,body}]);
    // wethe clean the input field to make it ready for next input
   setTitle('')
   setBody('')
  };
  //to delete note , we pass title as argument in our functional component
  //then we set the note by calling setPosts and we filter all the posts
  // except those that does not match the condition
  const removePost = (title)=>{
 setPosts(posts.filter((post)=>post.title !==title))
}
//3-call useEffect to update the localStorage
useEffect(()=>{
  //saving to localStorage
  localStorage.setItem('posts',JSON.stringify(posts));

})

  return (


    <div className="d-flex justify-content-center">
     <nav className="button-posts" > 
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
      
      <div className=" d-flex justify-content-center card-deck  mt-0 ">
    
      {/**Here we need to map trough the posts array to display the list of note
      remember that note need to have unique identify key, here our
      key={note.title} */}
        {posts.map(post => (
          <div key={post.title}  className="post mr-2 " >
            <h1 className="card-title col-3">{post.title}</h1>
            <div className="row justify-content-between">
            <p className="text-center card-body">{post.body}</p>
             {/*to avoid calling the wrong argument we are not going to call the function directly
             we use arrow function to call the correct argument  */}
            <button className="float-right " onClick={()=>removePost(post.title)} className="bg-danger text-white">X</button>
            </div>
           
          </div>
        ))}
      </div>
     
      <form onSubmit={AddPosts} style={{backgroundColor:'purple'}}>
      <h2>posts</h2>
      <p>Add post</p>
        
        <input type="text" value={title} onChange={handleTitle} />
        <textarea value={body} onChange={handleBody}></textarea>
        <button type="submit">Add post</button>
      </form>
    <a href="https://github.com/MariusMonkam/react-showcase/blob/master/src/components/pages/notes/LocalStorage.js">Source-code</a>
    </div>
  );
}
