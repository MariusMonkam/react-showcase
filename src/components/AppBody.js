import React from 'react';
import Home from './pages/Home'
import {Route } from 'react-router-dom'
import Forms from './pages/Forms'
import Notes from './pages/notes/Notes';

export default function AppBody(){
  return (
    <React.Fragment>
      <Route
    path="/"
    component={Home}
    exact
     />
     <Route
    path="/forms/"
    component={Forms}
     />
      <Route
    path="/notes/"
    component={Notes}
     />
    </React.Fragment>
   

  )
}