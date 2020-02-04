import React, { Component } from "react";
import Form1 from './form/Form1'
import Form2 from './form/Form2'
import Form3 from './form/Form3'
import Login from './form/Login'
import Register from './form/Register'
import Logout from './form/Logout'
import UserBar from './form/UserBar'


import { Switch, Route, Link} from "react-router-dom";

class Forms extends Component {
  render() {
    return (
      <div
        
        className=" container-fluid d-flex justify-content-space-around text-center row col-12"
      >
        <div className="col-2 text-left">
          <nav id="sidebar-left">
            <div>
            <ol className="nav-link">
            <li >
                 <Link to="/forms/form/login">
                  <button className="side-button" type="button">Login</button>
                </Link>
              </li>
              <li >
                 <Link to="/forms/form/register">
                  <button className="side-button" type="button">Register</button>
                </Link>
              </li>
              <li >
                 <Link to="/forms/form/logout">
                  <button className="side-button" type="button">Logout</button>
                </Link>
              </li>
              <li >
                 <Link to="/forms/form/userbar">
                  <button className="side-button" type="button">UserBar</button>
                </Link>
              </li>
            <li >
                 <Link to="/forms/form/form1">
                  <button className="side-button" type="button">Form1</button>
                </Link>
              </li>
              <li>
                <Link to="/forms/form/form2">
                  <button className="side-button" type="button">Form2</button>
                </Link>
              </li>
              <li>
                <Link to="/forms/form/form3">
                  <button className="side-button" type="button">Form3</button>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <button className="side-button" type="button">Home</button>
                </Link>
              </li>
            </ol>
             
            </div>
          </nav>
        </div>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <div className="col-md-8 text-center mr-0 ">
          <Switch>
          <Route path="/forms/form/login">
              <Login/>
            </Route>
            <Route path="/forms/form/register">
              <Register/>
            </Route>
            <Route path="/forms/form/logout">
              <Logout/>
            </Route>
            <Route path="/forms/form/userbar">
              <UserBar/>
            </Route>
            <Route path="/forms/form/form1">
              <Form1 />
            </Route>
            <Route path="/forms/form/form2">
              <Form2/>
              </Route>
            <Route path="/forms/form/form3">
              <Form3/>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Forms;


