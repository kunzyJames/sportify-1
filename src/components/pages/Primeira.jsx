import React, { Component } from 'react'
import PPL from '../../images/PPL.aec4ede1.png'

class Primeira extends React.Component {
    render() { 
        return <>
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
        
        </>;
    }
}
 
export default Primeira;