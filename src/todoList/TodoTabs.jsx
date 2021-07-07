import React, { Component } from 'react'
import './tabs.css'

class TodoTabs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: ['all', 'active', 'completed'],
      unFinishedNum: () => {
        const unFinishedList = this.props.todos.filter(todo => !todo.completed)
        return unFinishedList.length
      }
    }

    this.handleClearAllCompletedClick = this.handleClearAllCompletedClick.bind(this)
    this.handelToggleFilterClick = this.handelToggleFilterClick.bind(this)
  }

  handleClearAllCompletedClick() {
    this.props.handelClearAllCompleted()
  }

  handelToggleFilterClick(filter) {
    this.props.handelToggleFilter(filter)
    this.setState({
      unFinishedNum: () => {
        const unFinishedList = this.props.todos.filter(todo => !todo.completed)
        return unFinishedList.length
      }
    })
  }

  render() {
    return (
      <div className="helper">
        <span className="left"><b>{ this.state.unFinishedNum() }</b> iteams left</span>
        <span className="tabs">
          {
            this.state.status.map(item =>
              <span
                key={item}
                className={`${item} ${this.props.filter === item ? 'actived' : ''}`}
                onClick={this.handelToggleFilterClick.bind(this, item)}
              >
                {item}
              </span>
            )
          }
        </span>
        <span
          className="clear"
          onClick={this.handleClearAllCompletedClick}
        >
          Clear completed
        </span>
      </div>
    )
  }
}

export default TodoTabs
