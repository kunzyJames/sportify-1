import React from 'react'
import Header from '../layouts/header';
import {Get} from '../utility/fetch';
import {URLAPI} from '../utility/apiMethods';
import { LoadingSpinner } from '../resources/loadingSpinner'

class PremierLeague extends React.Component {
  constructor(props){
    super(props);

    this.state = {
records: [],
      loading: true
    }
  }



  getRecords = (data) => {
    console.log("logging data",data.standings)
    
        try{
          if (this._isMounted) {
        let _records = Array.isArray(data.standings[0].table) ? data.standings[0].table : [];
          this.setState({ records: _records, loading: false, 
          
          });
          }
        }
        catch (err){
          console.log(err)
        }

}

componentDidMount(){
  this._isMounted = true;
Get(URLAPI.premierLeagueStanding.Get  , this.getRecords, this.setState({loading:true}));

}


componentWillUnmount() {
  this._isMounted = false;
}

    render() { 

      let {loading} = this.state;


        return <>
            <Header/>
            {loading ? <LoadingSpinner /> :
         <div className="container px-0">
          <div className="page-body border-none card py-4">
            <div className="breadcrumbs py-2 mb-3">
              <a href="#/" className="fancy-link router-link-active">
                All Competitions</a>
                <span class="mx-2">/</span>
                <span className="text-muted">Premier League</span>
              </div>
              <h4 className="text-primary">
                <strong>Premier League</strong>
              </h4>
              <div className="row tabs">
                <div className="col-6 d-flex">
                  <div className="tab active">
                    <span className='header'>Standings</span>
                  </div>
                  </div> 
                  <div className='col-6 d-flex'>
                    <div className="tab">
                      <span className='header'>MATCHES</span>
                    </div>
                  </div>
              </div>
              <div className='tab-body-holder'>
                <div className='standings'>
                  <div className='standings--group'>
                    <h5 className='mb-0 group-name'>
                      <strong></strong>
                    </h5>
        
                    <div className='standings-table'>
  <div className='standing-row standing-header text-muted'>
    <div className='position'></div>
    <div className='team-name'>Team</div>
    <div className='mp'>MP</div>
    <div className='win'>W</div>
    <div className='draw'>D</div>
    <div className='lose'>L</div>
    <div className='gf'>GF</div>
    <div className='ga'>GA</div>
    <div className='points'>Pts</div>
  </div>
  {this.state.records.map((item)=>
    <div className='standing-row' key={item.id}>
    <div className='position'>{item.position}</div>
    <div className='team-name'>
      <div className="emblem">
        <img src={item.team.crestUrl} alt className='img-fluid'/>

      </div>
   
{item.team.name}

    </div>
    <div className='mp'>{item.playedGames}</div>
    <div className='win'>{item.won}</div>
    <div className='draw'>{item.draw}</div>
    <div className='lose'>{item.lost}</div>
    <div className='gf'>{item.goalsFor}</div>
    <div className='ga'>{item.goalsAgainst}</div>
    <div className='points'>{item.points}</div>
  </div>
  
  )}


</div>

                  </div>
                </div>
              </div>
            </div>
            <div className='mt-5'>
              <p class="text-secondary text-center">
                Built by
                <a href='https://twitter.com/i_santiag0'
                className='fancy-link'>Temitope Ilesanmi</a>
              </p>
              <p className="text-center small">
                Credits:
                <a href='https://www.football-data.org'
                className="fancy-link">Football data API</a> 
              </p>
            </div>
          </div>
      }
        </>;
    }
}
 
export default PremierLeague;