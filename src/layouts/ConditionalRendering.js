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
            <Closed />
          )}
          {isOpen && (
            <Open />
          )}
        </ConditionalExample>

        <ConditionalExample heading='Ternary operator'>
          {isOpen ? <Open /> : <Closed />}
        </ConditionalExample>

        <ConditionalExample heading='separate component'>
          <StatusPresenter isOpen={isOpen} />
        </ConditionalExample>

        <ConditionalExample heading='IIFE'>
          {((isOpen) => {
            return isOpen ? <Open /> : <Closed />
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
  if (isOpen) { view = <Open /> }
  if (!isOpen) { view = <Closed /> }

  return view
}

// HOC boilerplate
const Open = () => <p>OPEN</p>

const Closed = () => <p>CLOSED</p>

const HOC = (firstComponent, secondComponent) => condition => props => {
  return condition ? firstComponent(props) : secondComponent(props)
}

const withHOC = HOC(Open, Closed)
