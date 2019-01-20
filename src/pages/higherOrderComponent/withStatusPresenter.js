import React, { Component } from 'react'

const withStatusPresenter = Children => {
  class StatusPresenter extends Component {
    render() {
      const { error, loading } = this.props;

      if (loading) {
        return <div>Data is loading...</div>
      }

      if (error) {
        return (
          <div>
            <p>Something went wrong!</p> <br />
            <code>{error.message}</code> <br />
            <p>Try again later</p>
          </div>
        )
      }

      return <Children {...this.props} />
    }
  }
  StatusPresenter.displayName = `withStatusPresenter(${Children.displayName || Children.name})`
  return StatusPresenter
}

export default withStatusPresenter
