import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class RenderPropsPage extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <h1>Render props pattern</h1>
      </div>
    )
  }
}


/**TODO:
 *  Get parent component
 *  In child Fetch some data in the state (redux maybe?)
 *  render data in 2 different presentational components
 *
 * use render props / faac to get data from state
 *
 * alt - build currency patent?
 */
