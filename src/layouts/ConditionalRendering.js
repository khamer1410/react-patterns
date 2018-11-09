import React, { Component, Fragment } from 'react'

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
      <Fragment>
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
          {isOpen ? <p>OPEN</p> : <p>CLOSED</p>}
        </ConditionalExample>

        <ConditionalExample heading='separate component'>
          <StatusPresenter isOpen={isOpen} />
        </ConditionalExample>

        <ConditionalExample heading='IIFE'>
          {((isOpen) => {
            return isOpen ? <p>OPEN</p> : <p>CLOSED</p>
          })(isOpen)}
        </ConditionalExample>

        <ConditionalExample heading='HOC'>
          {withHOC(isOpen)(this.props)}
        </ConditionalExample>
      </Fragment>
    )
  }
}

const ConditionalExample = ({ heading, children }) => (
  <div>
    <h2> {heading} </h2>
    {children}
  </div>
)

const StatusPresenter = ({ isOpen }) => {
  let view = null;
  if (isOpen) { view = <p>OPEN</p> }
  if (!isOpen) { view = <p>CLOSED</p> }

  return view
}

// HOC boilerplate
const Open = () => <p>OPEN</p>

const Closed = () => <p>CLOSED</p>

const HOC = (firstComponent, secondComponent) => condition => props => {
  return condition ? firstComponent(props) : secondComponent(props)
}

const withHOC = HOC(Open, Closed)
