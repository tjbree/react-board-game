import React from 'react'
import Board from './components/Board'

class App extends React.Component {
    constructor(props){
      super(props)
      // Add history to record the location of each step
      this.state = {
        history: [{
          squares: Array(9).fill(null),
          location: {'row': null, 'col': null},
        }],
        stepNumber: 0,
        xIsNext: true,
      }
    }
    handleClick = (i) => {
      const history = this.state.history.slice(0, this.state.stepNumber + 1)
      const current = history[history.length - 1]
      const squares = current.squares.slice()
      // use Object.assign({}, oldObject) to copy an object without mutation
      const location = Object.assign({}, current.location)
      if(calculateWinner(squares) || squares[i]){
        return
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O'
      // Calculate which row and column it is at
      location['row'] = Math.ceil((i + 1) / 3)
      location['col'] = i + 1 - 3 * (Math.ceil((i + 1) / 3) - 1)
      this.setState({
          history: history.concat([{
          squares: squares,
          location: location
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      })
    }
    jumpTo = (step) => {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      })
    }

    render() {
      const history = this.state.history
      const current = history[this.state.stepNumber]
      const winner = calculateWinner(current.squares)
  
      const moves = history.map((step, move, arr) => {
        const desc = move ? 'Go to move #' + move : 'Back to start'
        // to get the location
        const col = move ? arr[move].location['col'] : 'N/A'
        const row = move ? arr[move].location['row'] : 'N/A'
        return (
            <li key={move}>
              <button onClick={() => this.jumpTo(move)}>{desc}</button>
              <span> col: {col}, row: {row}</span>
            </li>
          )
      })
  
      let status
      const squares = current.squares.slice()
      if(winner) {
        let who = this.state.xIsNext ? 'O' : 'X' // to find out who wins
        status = 'Winner is ' + who
      } else if(squares.indexOf(null) >= 0){ // if there is still null in it, the game is not over
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
      } else { // the game is over
        status = 'There is a draw.'
      }
      return (  
        <div>
            <h1>Board Game: tic-tac-toe</h1>
            <div className="game">
                <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={this.handleClick}
                    winner={winner}
                />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        </div>
      )
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // Return which squares lead to the win instead of who wins
        return lines[i]
      }
    }
    return null
}

export default App