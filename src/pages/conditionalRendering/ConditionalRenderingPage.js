import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from 'components/Buttons'

export default class ConditionalRenderingPage extends Component {
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
      <>
        <div>
          <Button
            onClick={this.toggleState}
            data-testid="toggleButton"
          >
            Toggle mood
          </Button>
        </div>
        <hr />

        <ConditionalExample heading='&& operator' data-testid='statusInfo'>
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
      </>
    )
  }
}

const ConditionalExample = ({ heading, children, ...rest }) => (
  <FlexWrapper {...rest}>
    <h2> {heading} </h2>
    {children}
  </FlexWrapper>
)

const FlexWrapper = styled.div`
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
`

const StatusPresenter = ({ isOpen }) => {
  let view = null;
  if (isOpen) { view = <Open /> }
  if (!isOpen) { view = <Closed /> }

  return view
}

// HOC boilerplate
const Open = () => <p><span role='img' aria-label='devil'>😈</span> PARTY <span role='img' aria-label='devil'>😈</span></p>

const Closed = () => <p><span role='img' aria-label='sunglasses'>😎</span> CHILL <span role='img' aria-label='sunglasses'>😎</span></p>

const HOC = (firstComponent, secondComponent) => condition => props => {
  return condition ? firstComponent(props) : secondComponent(props)
}

const withHOC = HOC(Open, Closed)
