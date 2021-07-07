import React, { Component } from 'react'
import { isPCHandle } from '../common/utils'
import TodoItem from './TodoItem'
import TodoTabs from './TodoTabs'
import Author from './Author'
import './todo.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    document.title = 'React App | Todo List'
    this.state = {
      title: document.title,
      todos: [],
      isPc: isPCHandle(),
      filteredTodos: [],
      filter: 'all'
    }
    this.inputRef = React.createRef()
    this.handelAddItem = this.handelAddItem.bind(this)
    this.handelDeleteTodoItem = this.handelDeleteTodoItem.bind(this)
    this.handelClearAllCompleted = this.handelClearAllCompleted.bind(this)
    this.handelOptCompletedItem = this.handelOptCompletedItem.bind(this)
    this.handelToggleFilter = this.handelToggleFilter.bind(this)
    this.handelFilteredTodos = this.handelFilteredTodos.bind(this)
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
    this.setState((prevState) => ({
      filteredTodos: this.handelFilteredTodos(prevState)
    }))
    e.target.value = ''
  }

  handelDeleteTodoItem(id) {
    this.setState((prevState) => {
      prevState.todos.splice(prevState.todos.findIndex((todo) => todo.id === id), 1)
      return { todos:  prevState.todos}
    })
    this.setState((prevState) => ({
      filteredTodos: this.handelFilteredTodos(prevState)
    }))
  }

  handelClearAllCompleted() {
    this.setState((prevState) => {
      const activeList = prevState.todos.filter(todo => !todo.completed)
      return { todos: activeList}
    })
    this.setState((prevState) => ({
      filteredTodos: this.handelFilteredTodos(prevState)
    }))
    this.inputRef.current.focus()
  }

  handelOptCompletedItem(id) {
    this.setState((prevState) => {
      const activeTodoIndex = prevState.todos.findIndex(item => item.id === id)
      prevState.todos[activeTodoIndex]['completed'] = !prevState.todos[activeTodoIndex]['completed']
      return { todos:  prevState.todos}
    })
  }

  handelToggleFilter(filter) {
    this.setState({ filter: filter })
    this.setState((prevState) => ({
      filteredTodos: this.handelFilteredTodos(prevState)
    }))
  }

  handelFilteredTodos(data) {
    if (data.filter === 'all') {
      return data.todos
    }
    const flag = data.filter === 'completed'
    return data.todos.filter(todo => flag === todo.completed)
  }

  render() {
    const { filter, todos, isPc, filteredTodos } = this.state
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
            filteredTodos.map(todo =>
              <TodoItem
                todo={todo}
                isPc={isPc}
                key={todo.id}
                handelOptCompletedItem={this.handelOptCompletedItem}
                handelDeleteTodoItem={this.handelDeleteTodoItem}
              />
            )
          }
          <TodoTabs
            filter={filter}
            todos={todos}
            handelToggleFilter={this.handelToggleFilter}
            handelClearAllCompleted={this.handelClearAllCompleted}
          />
        </div>
        <Author author={this.props.author} />
      </div>
    )
  }
}

export default TodoList
