import React, { Component } from 'react'
import Header from '../layouts/header';

class ChampionsLeague extends React.Component {
    render() { 
        return <>
        
        <Header/>
         
         <div className="container px-0">
          <div className="page-body border-none card py-4">
            <div className="breadcrumbs py-2 mb-3">
              <a href="#/" className="fancy-link router-link-active">
                All Competitions</a>
                <span class="mx-2">/</span>
                <span className="text-muted">UEFA Champions League</span>
              </div>
              <h4 className="text-primary">
                <strong>UEFA Champions League</strong>
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
                      <strong>PRELIMINARY ROUND</strong>
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
        
        </div>
                  </div>
                </div>
                <div className='standings'>
        <div className='standings--group'>
          <h5 className='mb-0 group-name'>
            <strong>QUALIFICATION</strong>
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
          </div>
        </div>
</div>
              </div>
<div className='standings--group'>
  <h5 className='mb-0 group-name'>
    <strong>GROUP A</strong>
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

            <div className='standing-row'>
              <div className='position'>1</div>
              <div className='team-name'>
                <div className='emblem'>
                  <img src="https://crests.football-data.org/65.svg"
                  alt className='img-fluid'/>
                </div>
                Manchester City FC
              </div>
              <div className='mp'>6</div>
              <div className='win'>4</div>
              <div className='draw'>0</div>
              <div className='lose'>2</div>
              <div className='gf'>18</div>
              <div className='ga'>10</div>
              <div className='points'>12</div>
            </div>
            <div className='standing-row'>
              <div className='position'>2</div>
              <div className='team-name'>
                <div className='emblem'>
                  <img src="https://crests.football-data.org/524.svg"
                  alt className='img-fluid'/>
                </div>
                Paris Saint-Germain FC
              </div>
              <div className='mp'>6</div>
              <div className='win'>3</div>
              <div className='draw'>2</div>
              <div className='lose'>1</div>
              <div className='gf'>13</div>
              <div className='ga'>8</div>
              <div className='points'>11</div>
            </div>
            <div className='standing-row'>
              <div className='position'>3</div>
              <div className='team-name'>
                <div className='emblem'>
                  <img src="https://crests.football-data.org/721.svg"
                  alt className='img-fluid'/>
                </div>
                RB Leipzig
              </div>
              <div className='mp'>6</div>
              <div className='win'>2</div>
              <div className='draw'>1</div>
              <div className='lose'>3</div>
              <div className='gf'>15</div>
              <div className='ga'>14</div>
              <div className='points'>7</div>
            </div>

            <div className='standing-row'>
              <div className='position'>4</div>
              <div className='team-name'>
                <div className='emblem'>
                  <img src="https://crests.football-data.org/721.svg"
                  alt className='img-fluid'/>
                </div>
                Club Brugge KV
              </div>
              <div className='mp'>6</div>
              <div className='win'>1</div>
              <div className='draw'>1</div>
              <div className='lose'>4</div>
              <div className='gf'>6</div>
              <div className='ga'>20</div>
              <div className='points'>4</div>
            </div>
          </div>
</div>
<div className='standings--group'>
  <h5 className='mb-0 group-name'>
    <strong>GROUP B</strong>
  </h5>
  <div className='standings-table'>
    <div className='standing-row standing-header text-muted'>
      <div className='position'></div>
      <div className='team-name'>Team</div>
      <div className='mp'>6</div>
              <div className='mp'>MP</div>
              <div className='win'>W</div>
              <div className='draw'>D</div>
              <div className='lose'>L</div>
              <div className='gf'>GF</div>
              <div className='ga'>GA</div>
              <div className='points'>Pts</div>
    </div>
    <div className='standing-row'>
      <div className='position'>1</div>
      <div className='team-name'>
        <div className='emblem'>
          <img src="https://crests.football-data.org/64.png" alt
          className='img-fluid'/>
        </div>
        Liverpool FC
      </div>
      <div className='mp'>6</div>
      <div className='win'>6</div>
              <div className='draw'>0</div>
              <div className='lose'>0</div>
              <div className='gf'>17</div>
              <div className='ga'>6</div>
              <div className='points'>18</div>
    </div>
    <div className='standing-row'>
      <div className='position'>2</div>
      <div className='team-name'>
        <div className='emblem'>
          <img src="https://crests.football-data.org/78.svg" alt
          className='img-fluid'/>
        </div>
        Club Atletico de Madrid
      </div>
      <div className='mp'>6</div>
      <div className='win'>2</div>
              <div className='draw'>1</div>
              <div className='lose'>3</div>
              <div className='gf'>7</div>
              <div className='ga'>8</div>
              <div className='points'>7</div>
    </div>
    <div className='standing-row'>
      <div className='position'>3</div>
      <div className='team-name'>
        <div className='emblem'>
          <img src="https://crests.football-data.org/503.svg" alt
          className='img-fluid'/>
        </div>
        FC Porto
      </div>
      <div className='mp'>6</div>
      <div className='win'>1</div>
              <div className='draw'>2</div>
              <div className='lose'>3</div>
              <div className='gf'>4</div>
              <div className='ga'>11</div>
              <div className='points'>5</div>
    </div>
    <div className='standing-row'>
      <div className='position'>4</div>
      <div className='team-name'>
        <div className='emblem'>
          <img src="https://crests.football-data.org/98.svg" alt
          className='img-fluid'/>
        </div>
        AC Milan
      </div>
      <div className='mp'>6</div>
      <div className='win'>1</div>
              <div className='draw'>1</div>
              <div className='lose'>4</div>
              <div className='gf'>6</div>
              <div className='ga'>9</div>
              <div className='points'>4</div>
    </div>
  </div>
</div>
<div className='standings--group'>
  <h5 className='mb-0 group-name'>
    <strong>GROUP C</strong>
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
        
        </>;
    }
}
 
export default ChampionsLeague;