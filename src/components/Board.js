import React from 'react'
import Square from './Square'

class Board extends React.Component {
  render() {
     const items = []
     // Using loop to generate rendered components, note the usage of items.push
     for(let i = 0; i <= 2; i ++){
       const item = []
       for(let j = 0; j <= 2; j ++) {
         // if winner is passed in and this one is inside the winner array
         if(this.props.winner && this.props.winner.includes(i * 3 + j)){
           item.push(<Square
             value={this.props.squares[i * 3 + j]}
             onClick={() => this.props.onClick(i * 3 + j)}
             key={i * 3 + j}
             winner={1} // pass a props to make a difference to the button className
           />)
         } else {
           item.push(<Square
             value={this.props.squares[i * 3 + j]}
             onClick={() => this.props.onClick(i * 3 + j)}
             key={i * 3 + j}
           />)
         }
       }
       items.push(<div className="board-row" key={i}>{item}</div>)
     }
     return (
       <div>
          {items}
       </div>
     )
  }
}

export default Board