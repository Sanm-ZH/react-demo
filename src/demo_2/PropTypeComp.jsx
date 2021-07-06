import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PropTypeComp extends Component{
  static propTypes ={
    context: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="flex justify-center align-center">{this.props.context}</div>
    )
  }
}

export default PropTypeComp
