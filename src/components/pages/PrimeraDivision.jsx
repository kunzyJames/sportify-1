import React, { Component } from 'react'
import PD from '../../images/PD.bf2f81de.png'

class PrimeraDivision extends React.Component {
    render() { 
        return <>  
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
        
        </>;
    }
}
 
export default PrimeraDivision;