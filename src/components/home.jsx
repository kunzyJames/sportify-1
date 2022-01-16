import PNG from "../images/logo.efdde25b.png";
import "../App.css";
import ELC from "../images/ELC.12a0abbb.png";
import React, { Component } from "react";
import EPL from "../images/PL.274c4545.png";
import LIGUE from "../images/FL1.27ed7692.png";
import BL from "../images/BL1.7a2c67c2.png";
import DED from "../images/DED.99ae79ed.png";
import PPL from "../images/PPL.aec4ede1.png";
import PD from "../images/PD.bf2f81de.png";
import Header from "./layouts/header";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      championship: false,
    };
  }

  setToken = () => {
    Cookies.set('token', '8c2703377c9c4f7f8363b4689ae9c2b3')
  }



componentDidMount(){
this.setToken()
}
  render() {
      //const {championship} = this.state
    return (
      <>
        <div className="home">
          {/* <div className="header-section">
            <div className="container">
              <div className="d-flex flex-column align-items-center">
                <div className="logo">
                  <img src={PNG} alt className="img-fluid" />
                </div>
              </div>
            </div>
          </div> */}
          <Header/>
        
        
          <div className="container px-0">
            <div className="page-body border-none card py-4">
              <h4>
                <strong>All Competitions</strong>
              </h4>
              <div className="row">
                
                <div className="col-sm-6 mb-4"> 
                  <div class="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img src={ELC} alt className="img-fluid" />
                    </div>
                    <Link to="/championship" >
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>Championship</strong>
                      </h4>
                   <span  className="small h6">England</span>       
                    </div>
                    </Link>
                  </div>
                </div>
                
                <div className="col-sm-6 mb-4">
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img src={EPL} alt className="img-fluid" />
                    </div>
                    <Link to="/premierleague" >
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>Premier League</strong>
                      </h4>
                   <span  className="small h6">England</span>       
                    </div>
                    </Link>
                  </div>
                </div>

                <div className="col-sm-6 mb-4">
                  <Link to="/championsleague">
                  
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/b/bf/UEFA_Champions_League_logo_2.svg"
                        alt
                        className="img-fluid"
                      />
                    </div>   
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>UEFA Champions League</strong>
                      </h4>
                      <span className="small h6">Europe</span>
                    </div>
                
                
                  </div>
              
                  </Link>
                 
              
                </div>
              
              
                <div className="col-sm-6 mb-4">
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img
                        src="https://crests.football-data.org/EUR.svg"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>European Championship</strong>
                      </h4>
                      <span className="small h6">Europe</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img src={LIGUE} alt className="img-fluid" />
                    </div>
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>Ligue</strong>
                      </h4>
                      <span className="small h6">France</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img src={BL} alt className="img-fluid" />
                    </div>
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>Bundesliga</strong>
                      </h4>
                      <span className="small h6">Germany</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img
                        src="https://crests.football-data.org/SA.svg"
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>Serie A</strong>
                      </h4>
                      <span className="small h6">Italy</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img src={DED} alt className="img-fluid" />
                    </div>
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>Eredivise</strong>
                      </h4>
                      <span className="small h6">Netherlands</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img src={PPL} alt className="img-fluid" />
                    </div>
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>Primeira Liga</strong>
                      </h4>
                      <span className="small h6">Portugal</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mb-4">
                  <div className="px-4 py-4 shadow-lg rounded-sm competition">
                    <div className="competition--emblem">
                      <img src={PD} alt className="img-fluid" />
                    </div>
                    <div className="competition--details">
                      <h4 className="h5 mb-1">
                        <strong>Primera Division</strong>
                      </h4>
                      <span className="small h6">Spain</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p class="text-secondary text-center">
            Built by
            <a href="https://twitter.com/i_santiag0" className="fancy-link">
              Temitope Ilesanmi
            </a>
          </p>
          <p className="text-center small">
            Credits:
            <a href="https://www.football-data.org" className="fancy-link">
              Football data API
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default Home;
