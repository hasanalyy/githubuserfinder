import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./compoents/layout/Navbar";
import User from './compoents/users/User';
import Alert from './compoents/layout/Alert';
import About from './compoents/pages/About';
import Home from './compoents/pages/Home';
import NotFound from './compoents/pages/NotFound';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App =() => {

    return (
      <GithubState>
        <AlertState>
    <Router>
    <div className="App">
      <Navbar />
      
      <div className="container">
        <Alert />
        <Switch>
          <Route exact path='/'component={Home}/> 
          <Route exact path ='/about' component={About} />
          <Route exact path ='/user/:login' component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
    </Router>
    </AlertState>
    </GithubState>
    );
  }

export default App;
