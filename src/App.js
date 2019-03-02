import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Dashbord from './components/Dashbord';
import Contact from './components/Contact';
import About from './components/About';
import routeConstants from './constant/routeConstants';


class App extends Component { 
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path={routeConstants.HOME} component={Home} />
            <Route exact path={routeConstants.DASHBOARD} component={Dashbord} />
            <Route exact path={routeConstants.CONTACT} component={Contact} />
            <Route exact path={routeConstants.ABOUT} component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
