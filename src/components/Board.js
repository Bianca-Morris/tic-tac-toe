import React from 'react';

import Square from './Square';

const emptyBoard = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
          ];

class Board extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        currPlayer: 'X',
        boardArr: emptyBoard,
      }
    }

    togglePlayer() {
        if (this.state.currPlayer === 'X') {
          this.setState({currPlayer: 'O'});
        } else if (this.state.currPlayer === 'O') {
          this.setState({currPlayer: 'X'});
        } else {
          throw new Error("Invalid player state.");
        }
    }

    clickSquare(rowIndex, colIndex) {
      console.log(`square at (${rowIndex}, ${colIndex}) clicked!`);
      if (this.state.boardArr[rowIndex][colIndex] === null) {

        const newBoard = [];

        this.state.boardArr.forEach((row, rowI) => {
          // if nothing has been updated in this row, add it to board
          if (rowI !== rowIndex) {
            newBoard.push(row);
          } else {
            const newRow = [];
            // make appropriate changes at (row, col)
            row.map((col, colI) => {
              if (colI === colIndex) {
                newRow.push(this.state.currPlayer);
              } else {
                newRow.push(col);
              }
            })
            newBoard.push(newRow);
          }
        })

        // update state and change turns
        this.setState({boardArr: newBoard});
        this.togglePlayer();
      } else {
          alert('Can\'t update marked square!');
      }
    }

    resetBoard() {
      console.log("attempting board reset");
      this.setState({ boardArr: emptyBoard });
    }

    render() {
      return (
        <div
          // style={{
          //   display: 'flex',
          //   flexDirection: 'column',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   width: '400px'
          // }}
        >
          It's {this.state.currPlayer}'s turn!
          {
            this.state.boardArr.map((row, rowI) => (
            <div
              // style={{display: 'flex'}}
            >
              {
                row.map((square, colI) => (
                  <Square
                    status={square}
                    clickSquare={() => this.clickSquare(rowI, colI)}
                    key={`square${rowI},${colI}`}
                  />
                ))
              }
            </div>
            )
          )}
          <button onClick={() => this.resetBoard()}>Start new game</button>
        </div>
      )
    }
}

export default Board;
