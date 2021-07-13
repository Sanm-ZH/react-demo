import React from 'react'
import PropTypes from 'prop-types'

function Author({ author }) {
  return (
    <div id='author' className="margin-bottom-30">
      <span>Written by {author}</span>
    </div>
  )
}

Author.propTypes = {
  author: PropTypes.string.isRequired
}

export default Author
