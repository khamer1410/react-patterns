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

        <ConditionalExample heading='&& operator'>
          {!isOpen && (
            <p>CLOSED</p>
          )}
          {isOpen && (
            <p>OPEN</p>
          )}
        </ConditionalExample>

        <ConditionalExample heading='Ternary operator'>
          {isOpen
            ? <p>OPEN</p>
            : <p>CLOSED</p>
          }
        </ConditionalExample>
      </div>
    )
  }
}

const ConditionalExample = ({ heading, children }) => (
  <div>
    <h2> {heading} </h2>
    {children}
  </div>
)
