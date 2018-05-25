import React from 'react';

import Board from './Board';

class GameScreen extends React.Component {
    constructor(props) {
      super(props);
    }

    resetBoard() {
      console.log("resetting board");
    }

    render() {
      return (
        <div>
          <Board />
        </div>
      )
    }
}

export default GameScreen;
