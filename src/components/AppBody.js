import React from 'react';
import Home from './pages/Home';
import {Route } from 'react-router-dom';
import Forms from './pages/Forms';
import Notes from './pages/notes/Notes';
import Posts from './pages/notes/Posts';
import LocalStoragePosts from './pages/notes/LocalStoragePosts';
import FetchData from './pages/fetchingdata/FetchData';
import Animation from './pages/css_animation/Animation';




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
      <Route
    path="/fetchdata/"
    component={FetchData}
     />
      <Route
    path="/animation/"
    component={Animation}
     />
    </React.Fragment>
   

  )
}