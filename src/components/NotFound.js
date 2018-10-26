import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
export default class NotFound extends Component {
  state = {
    count: 5,
    countDownInterval: null,
  }

  componentDidMount = () => {
    const countDownInterval = setInterval(this.countdown, 1000)
    this.setState({ countDownInterval })
  }

  componentWillUnmount = () => {
    clearInterval(this.state.countDownInterval)
  }

  countdown = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }


  render() {
    const { count } = this.state;
    return (
      <div>
        <p>404# Not Found!</p>
        <p>No match for <code>{this.props.location.pathname}</code></p>
        <p>Redirect to homepage in {count}</p>
        {count === 0 && <Redirect to='/' />}
      </div>
    )
  }
}
