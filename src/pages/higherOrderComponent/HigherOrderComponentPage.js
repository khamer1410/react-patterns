import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'components/Buttons'
import withStatusPresenter from './withStatusPresenter'
import { WithThemeConsumer } from 'utils/ThemeProvider'
import { compose } from 'redux'
import DataPresenter from 'pages/higherOrderComponent/DataPresenter'

// add HOC for presentational component
const EnhancedDataPresenter = compose(withStatusPresenter, WithThemeConsumer)(DataPresenter)

class HigherOrderComponentDemoPage extends Component {
  state = {
    error: null,
    loading: false,
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout)
  }

  getErrorRequest = () => {
    axios.get('nonexistingURL/dummy')
      .catch(error => {
        this.setState({ error })
      })
      .finally(() => {
        this.setState({ loading: false })
      })
  }

  resetState = () => {
    this.setState({
      error: null,
      loading: false,
    })
  }

  showLoader = () => {
    this.setState({ loading: true })
    this.loadingTimeout = setTimeout(() => { this.setState({ loading: false }) }, 5000)
  }

  render() {
    const { error, loading } = this.state
    return (
      <div>
        <h2>Loading / error status as HOC presenter</h2>
        <Button onClick={this.getErrorRequest}>Create error</Button>
        <Button onClick={this.showLoader}>Show loader</Button>
        <Button onClick={this.resetState}>Reset state</Button>
        <EnhancedDataPresenter error={error} loading={loading} />
      </div>
    )
  }
}

export default HigherOrderComponentDemoPage
