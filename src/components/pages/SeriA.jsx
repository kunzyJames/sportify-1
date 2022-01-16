import React, { Component } from 'react'


class SerieA extends React.Component {
    render() { 
        return <>
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
               
        
        </>;
    }
}
 
export default SerieA;