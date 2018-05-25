import React from 'react';
import { Link } from 'react-router';

class IntroScreen extends React.Component {
    render() {
      <div>
        Welcome to tic-tac-toe!.
        <Link to='/game'><button>Start a game!</button></Link>
      </div>
    }
}

default export IntroScreen;
