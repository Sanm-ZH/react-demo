import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.handelOptCompletedClick = this.handelOptCompletedClick.bind(this)
    this.hendelDeleteTodoClick = this.hendelDeleteTodoClick.bind(this)
  }

  handelOptCompletedClick() {
    this.props.handelOptCompletedItem(this.props.todo.id)
  }

  hendelDeleteTodoClick() {
    this.props.handelDeleteTodoItem(this.props.todo.id)
  }

  render() {
    return (
      <div
        className={`todo-item ${this.props.todo.completed ? 'finish' : ''} ${this.props.isPc ? '' : 'notPc'}`}
      >
        <input
          type="checkbox"
          className="toggle"
          value={+this.props.todo.completed}
          defaultChecked={+this.props.todo.completed}
          onClick={this.handelOptCompletedClick}
        />
        <label>{this.props.todo.content}</label>
        <button
          className="destroy"
          onClick={this.hendelDeleteTodoClick}
        >
        </button>
      </div>
    )
  }
}

export default TodoItem
