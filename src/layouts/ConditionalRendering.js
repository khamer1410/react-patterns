import React, { Component } from 'react'

export default class ConditionalRendering extends Component {
  state = {
    isOpen: false,
  }

  toggleState = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    const { isOpen } = this.state

    return (
      <div>
        <div>
          <button
            onClick={this.toggleState}
          >
            Toggle state
          </button>
        </div>
        <hr />

        <div>
          <h2> && operator </h2>
          {!isOpen && (
            <p>CLOSED</p>
          )}
          {isOpen && (
            <p>OPEN</p>
          )}
        </div>

        <div>
          <h2> Ternary operator </h2>
          {isOpen
            ? <p>OPEN</p>
            : <p>CLOSED</p>
          }
        </div>
      </div>
    )
  }
}
