import React, { Component } from 'react'
import { isPCHandle } from '../common/utils'
import TodoItem from './TodoItem'
import Author from './Author'
import './todo.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    document.title = 'React App | Todo List'
    this.state = {
      title: document.title,
      todos: [],
      isPc: isPCHandle()
    }
    this.inputRef = React.createRef()
    this.handelAddItem = this.handelAddItem.bind(this)
    this.handelDeleteTodoItem = this.handelDeleteTodoItem.bind(this)
    this.handelClearAllCompleted = this.handelClearAllCompleted.bind(this)
    this.handelOptCompletedItem = this.handelOptCompletedItem.bind(this)
    // 输入框赋予焦点
    setTimeout(() => {
      this.inputRef.current.focus()
    }, 300)
  }

  componentWillUnmount() {
    document.title = this.state.title
  }

  handelAddItem(e) {
    if (e.which !== 13) return
    if (!e.target.value.trim()) {
      // 没有输入不添加
      return
    }
    const value = e.target.value.trim()
    this.setState((prevState) => {
      prevState.todos.unshift({
        id: +new Date(),
        content: value,
        completed: false
      })
      return {
        todos: prevState.todos
      }
    })
    e.target.value = ''
  }

  handelDeleteTodoItem(id) {
    this.setState((prevState) => {
      prevState.todos.splice(prevState.todos.findIndex((todo) => todo.id === id), 1)
      return { todos:  prevState.todos}
    })
  }

  handelClearAllCompleted() {

  }

  handelOptCompletedItem(id) {
    this.setState((prevState) => {
      const activeTodoIndex = prevState.todos.findIndex(item => item.id === id)
      prevState.todos[activeTodoIndex]['completed'] = !prevState.todos[activeTodoIndex]['completed']
      return { todos:  prevState.todos}
    })
  }

  render() {
    return (
      <div>
        <div className="todo-app">
          <input
            type="text"
            className="add-input"
            ref={this.inputRef}
            placeholder="接下来要做什么？"
            onKeyPress={this.handelAddItem}
          />
          {
            this.state.todos.map(todo =>
              <TodoItem todo={todo} isPc={this.state.isPc} key={todo.id} handelOptCompletedItem={this.handelOptCompletedItem} handelDeleteTodoItem={this.handelDeleteTodoItem} />
            )
          }
        </div>
        <Author author={this.props.author} />
      </div>
    )
  }
}

export default TodoList
