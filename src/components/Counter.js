import React, { Component } from 'react'
import './counter.css'

class Counter extends Component {

  render() {
    const { value, onIncrement, onDecrement, onClear } = this.props
    return (
      <div className="counter">
        <div className="header">
          {value}
        </div>
        <button className="main" onClick={onIncrement}>
          +
        </button>
        <button className="footer-left" onClick={onDecrement}>
          -
        </button>
        <button className="footer-right" onClick={onClear}>
          c
        </button>
      </div>
    )
  }
}

export default Counter
