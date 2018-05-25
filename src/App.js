import React, { Component } from 'react';
import Switch from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import './components/GameScreen';
import './components/IntroScreen';


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
