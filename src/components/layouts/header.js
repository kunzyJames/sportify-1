import React, { Component } from 'react';
import PNG from "../../images/logo.efdde25b.png";
import '../../App.css'

class Header extends React.Component {
    render() { 
        return <>

<div className="home">
          <div className="header-section">
            <div className="container">
              <div className="d-flex flex-column align-items-center">
                <div className="logo">
                  <img src={PNG} alt className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          </div>

        </>;
    }
}
 
export default Header;