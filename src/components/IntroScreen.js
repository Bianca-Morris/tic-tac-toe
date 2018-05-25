import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const IntroScreen = () => (
    <div>
      Welcome to tic-tac-toe!.
      <Link to='/game'>Start a game!</Link>
    </div>
)


export default withRouter(IntroScreen);
