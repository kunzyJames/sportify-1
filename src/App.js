import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import React from 'react'
import Championship from './components/pages/championship';
import PremierLeague from './components/pages/premierLeague';
import ChampionsLeague from './components/pages/championsLeague';


function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <div >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/championship' exact component={Championship} />
          <Route path="/premierleague" component={PremierLeague}/>
          <Route path='/championsleague' component={ChampionsLeague}/>
          <Route render={() => <h1>Error 404. Page not found.</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
