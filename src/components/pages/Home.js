import React from 'react';

import {Link} from 'react-router-dom'

export default function Home(){
  return (
   <div>
   <div className="col-2 text-left">
          <nav id="sidebar-home">
            <div>
            <ol className="nav-link">
            <li >
                 <Link to="/forms">
                  <button className="side-button" type="button">Forms</button>
                </Link>
              </li>
              <li >
                 <Link to="/notes">
                  <button className="side-button" type="button">Notes</button>
                </Link>
              </li>
              <li >
                 <Link to="/posts">
                  <button className="side-button" type="button">Posts</button>
                </Link>
              </li>
              <li >
                 <Link to="/">
                  <button className="side-button" type="button">Home</button>
                </Link>
              </li>
             
            
            </ol>
             
            </div>
          </nav>
        </div>
   
  
   
   </div>

  )
}