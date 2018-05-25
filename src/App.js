import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import GameScreen from './components/GameScreen';
import IntroScreen from './components/IntroScreen';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={IntroScreen}/>
          <Route path='/game' component={GameScreen}/>
        </Switch>
      </div>
    );
  }
}

export default App;
