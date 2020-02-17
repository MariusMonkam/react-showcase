import React from 'react';
import { Link } from 'react-router-dom';
import './Animation.css'
import Background from './background/Background.';

export default function Animation(){


  return(
    <div>
      <nav>
       <ul>
         <li>
           <Link to='/background'>
               Background
           </Link>
         </li>
         <li>
           <Link to='/background'>
               Button
           </Link>
         </li>
       </ul>
      </nav>
      <div >
      <Background/>
      </div>

    </div>
  )
}