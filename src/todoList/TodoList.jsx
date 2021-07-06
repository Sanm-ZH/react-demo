import React, { Component } from 'react'
import Author from './Author'
import './todo.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: document.title
    }
    document.title = 'Todo List'
  }

  componentWillUnmount() {
    document.title = this.state.title
  }

  render() {
    return (
      <div className="flex justify-center align-center">
        <Author author={this.props.author} />
      </div>
    )
  }
}

export default TodoList
