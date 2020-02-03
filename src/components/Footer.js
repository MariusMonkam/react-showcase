import React, { Component } from "react";

class Footer extends Component {

  render() {
    return (
      
        <div
          id="footer"
         
          className="container-fluid footer blockquote border border-dark text-dark text-center"
        >
        <span 
        id="btn-footer" 
        data-toggle="collapse"
        data-target="#footer-panel" 
       
        className="btn"><i className="fa fa-angle-double-down" aria-hidden="true"></i></span><br/>

       
          <div id="footer-panel" data-toogle="collapse">
          <small>
            ©2020{" "}
            <a href="https://linkedin.com/in/mariusmonkam">Marius Monkam</a>
          </small>
          <p>
            {" "}
            <small>
              <em>
                Front-end developer -Fullsatck MERN - Reactjs& React native{" "}
              </em>{" "}
              <span className="badge bg-light text-dark">
                <a href="https://linkedin.com/in/mariusmonkam">Hire me</a>
              </span>
              <span className="badge bg-warning text-light">=></span>
              <span className="badge small  p-2 bg-light text-dark">
                Helsinki Area{" "}
              </span>
              or
              <span className="badge small p-2 bg-light text-dark">
                Remote{" "}
              </span>{" "}
              for International
            </small>
          </p>

          <h6>
            <small>Other Projects</small>
          </h6>
          <div className="justify-content-space-around ">
            <span className="badge small mr-2 bg-light text-dark">
              <a href="https://cloudmonde.com">CloudMonde</a>
            </span>
            <span className="badge small mr-2  bg-light text-dark">
              <a href="https://devnector.herokuapp.com">DevNector</a>
            </span>
            <span className="badge small mr-2  bg-light text-dark">
              <a href="https://quickinhel.herokuapp.com">QuickInHel</a>
            </span>
            <span className="badge small mr-2  bg-light text-dark">
              <a href="http://webdev.poziral.com">Webdev</a>
            </span>
            <span className="badge small mr-2  bg-light text-dark">
              <a href="http://easydraw.herokuapp.com">Easydraw</a>
            </span>
            <span className="badge small mr-2  bg-light text-dark">
              <a href="https://master.d11jfrv8qtyx5d.amplifyapp.com/">PatternPath</a>
            </span>
          </div>

          </div>
          
         
        </div>
     
    );
  }
}

export default Footer;
