import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { increaseCount, decreaseCount, setCount } from './reduxReducers'
import InfoBox from 'components/InfoBox'

class ReduxPage extends Component {

  inputChangeHandler = event => {
    const value = event.target.value

    this.props.setCount(Number(value))
  }

  render() {
    const { counter, increaseCount, decreaseCount } = this.props
    return (
      <div>
        <h1>Basic redux counter</h1>
        <Board>SCORE: <span>{counter}</span></Board>
        <ControlsWrapper>
          <button onClick={increaseCount}>+</button>
          <button onClick={decreaseCount}>-</button>
          <label htmlFor="counter">
            <input type="number" id="counter" onChange={this.inputChangeHandler} />
          </label>
        </ControlsWrapper>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  increaseCount: () => dispatch(increaseCount),
  decreaseCount: () => dispatch(decreaseCount),
  setCount: count => dispatch(setCount(count)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage)

const ControlsWrapper = styled.div`
  display:flex;
  justify-content: center;
  padding: 15px;
`

const Board = styled(InfoBox)`
  display: flex;
  justify-content: center;
  padding: 50px;
  font-size: 2rem;
`
