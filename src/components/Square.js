import React from 'react'

function Square(props) {
    // Conditional rendering
    if(props.winner){
      return (
        <button
          className="square shade"
          onClick={props.onClick}
        >
          {props.value}
        </button>
      )
    } else {
      return (
        <button
          className="square"
          onClick={props.onClick}
        >
          {props.value}
        </button>
      )
    }
  }

  export default Square