import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Author extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }
  render() {
    return (
      <div id='author'>
        <span>Written by {this.props.author}</span>
      </div>
    )
  }
}

export default Author
