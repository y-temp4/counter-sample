import React, { Component } from 'react'

class Counter extends Component {

  render() {
    const { value, onIncrement, onDecrement, onClear } = this.props
    return (
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={onClear}>
          c
        </button>
      </p>
    )
  }
}

export default Counter
