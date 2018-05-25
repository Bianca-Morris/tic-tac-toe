import React from 'react';

const Square = (props) => (
  <button
    onClick={props.clickSquare}
    // style={{ flex: 1 }}
  >
    {props.status}
  </button>
)

export default Square;
