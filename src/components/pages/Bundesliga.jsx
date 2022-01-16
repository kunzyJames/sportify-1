import React, { Component } from 'react'
import BL from '../../images/BL1.7a2c67c2.png'

class Bundesliga extends React.Component {
    render() { 
        return <>
        
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
        
        </>;
    }
}
 
export default Bundesliga;