import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Menu from './Menu.js';
import Game from './Game.js';
import Coupons from './Coupons.js';
import Profile from './Profile.js';

import './App.css';

class Clicker extends Component {

  render() {
    return ( 
      <Router>
        <div className="clicker">   
          <Route path="/" exact component={Game}/>
          <Route path="/coupons" component={Coupons} />
          <Route path="/profile" component={Profile} />
          <Menu claimableCoupons={5} />
        </div>
      </Router>
    );
  }
}

export default Clicker;