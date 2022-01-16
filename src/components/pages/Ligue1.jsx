import React, { Component } from 'react'
import LIGUE from '../../images/FL1.27ed7692.png'

class Ligue1 extends React.Component {
    render() { 
        return <>
        
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
        
        </>;
    }
}
 
export default Ligue1;