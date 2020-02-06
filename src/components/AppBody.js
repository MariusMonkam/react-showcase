import React from 'react';
import Home from './pages/Home';
import {Route } from 'react-router-dom';
import Forms from './pages/Forms';
import Notes from './pages/notes/Notes';
import Posts from './pages/notes/Posts';
import LocalStoragePosts from './pages/notes/LocalStoragePosts';


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
     <Route
    path="/posts/"
    component={Posts}
     />
     <Route
    path="/localstorage/"
    component={LocalStoragePosts}
     />
    </React.Fragment>
   

  )
}