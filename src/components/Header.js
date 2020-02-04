import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav style={{background: 'rgb(2, 46, 50)'}} className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container" >
          <a className="navbar-brand align-left text-white bg-dark" href="/">
            React-Showcase
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/MariusMonkam/react-showcase">
                  Source-code
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-auto">
            <a className="mr-2" href="https://github.com/MariusMonkam">
              <i className="fa fa-github  text-white" aria-hidden="true"></i>
            </a>{" "}
            <a className="mr-2" href="https://linkedin/in/mariusmonkam">
              <i className="fa fa-linkedin  text-white" aria-hidden="true"></i>
            </a>{" "}
          </div>

          <button
            className="navbar-toggler mr-5 "
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className=" collapse navbar-collapse" id="mobile-nav">
          <ul className="nav navbar-nav text-white  mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/tutorial#">
                {" "}
                Tutorial
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
