import React from 'react';

import {Link} from 'react-router-dom'

export default function Home(){
  return (
   <div className="d-flex justify-content-between ">
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
   
  <div className="in-feeds">
  
  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6630054915521806336" height="400" width="400" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
  <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6630516920078733312" height="400" width="400" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
  </div>
   
   </div>

  )
}