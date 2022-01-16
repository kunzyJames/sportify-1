import React, { Component } from 'react'
import DED from '../../images/DED.99ae79ed.png'

class Eredivisie extends React.Component {
    render() { 
        return <>    
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
               
        
        </>;
    }
}
 
export default Eredivisie;