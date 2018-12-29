import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RenderPropsPage extends Component {
  static propTypes = {
    render: PropTypes.func,
    children: PropTypes.func,
  }

  static defaultProps = {
    render: () => { },
    children: () => { },
  }

  state = {
    amount: 0,
  }

  incrementAmount = () => {
    this.setState(state => ({ amount: state.amount + 1 }))
  }

  decrementAmount = () => {
    this.setState(state => ({ amount: state.amount - 1 }))
  }

  render() {
    const { amount } = this.state
    const { render, children } = this.props

    return (
      <div>
        <span>US Dollar: {amount}</span>
        <button onClick={this.incrementAmount}>+</button>
        <button onClick={this.decrementAmount}>-</button>

        {render && render(amount)}

        {children && children(amount)}
      </div>
    )
  }
}


