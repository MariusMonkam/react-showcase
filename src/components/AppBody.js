import React from 'react';
import Home from './pages/Home'
import {Route } from 'react-router-dom'
import Forms from './pages/Forms'

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
    </React.Fragment>
   

  )
}