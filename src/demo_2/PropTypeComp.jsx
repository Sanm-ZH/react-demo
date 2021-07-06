import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropTypeComp extends Component{
  static propTypes ={
    context: PropTypes.string.isRequired
  }

  render() {
    return (
      <div>{this.props.context}</div>
    )
  }
}

export default PropTypeComp
