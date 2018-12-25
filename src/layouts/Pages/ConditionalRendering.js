import React, { Component, Fragment } from 'react'
import { Button } from 'components/Buttons';

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
          <Button
            onClick={this.toggleState}
          >
            Toggle mood
          </Button>
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
const Open = () => <p><span role='img' aria-label=''>😈</span> PARTY <span role='img' aria-label=''>😈</span></p>

const Closed = () => <p><span role='img' aria-label=''>😎</span> CHILL <span role='img' aria-label=''>😎</span></p>

const HOC = (firstComponent, secondComponent) => condition => props => {
  return condition ? firstComponent(props) : secondComponent(props)
}

const withHOC = HOC(Open, Closed)
