import React, { Component } from 'react'
import memoize from 'memoize-one'
import { isPCHandle } from '../common/utils'
import TodoItem from './TodoItem'
import TodoTabs from './TodoTabs'
import Author from './Author'
import './todo.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    document.title = 'React App | Todo List'

    this.inputRef = React.createRef()
    this.handelAddItem = this.handelAddItem.bind(this)
    this.handelDeleteTodoItem = this.handelDeleteTodoItem.bind(this)
    this.handelClearAllCompleted = this.handelClearAllCompleted.bind(this)
    this.handelOptCompletedItem = this.handelOptCompletedItem.bind(this)
    this.handelToggleFilter = this.handelToggleFilter.bind(this)
    // 输入框赋予焦点
    setTimeout(() => {
      this.inputRef.current.focus()
    }, 300)
  }

  state = {
    title: document.title,
    todos: [],
    isPc: isPCHandle(),
    filter: 'all'
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
    this.inputRef.current.focus()
  }

  handelClearAllCompleted() {
    this.setState((prevState) => {
      const activeList = prevState.todos.filter(todo => !todo.completed)
      return { todos: activeList}
    })
    this.inputRef.current.focus()
  }

  handelOptCompletedItem(id) {
    this.setState((prevState) => {
      const activeTodoIndex = prevState.todos.findIndex(item => item.id === id)
      prevState.todos[activeTodoIndex]['completed'] = !prevState.todos[activeTodoIndex]['completed']
      return { todos:  prevState.todos}
    })
    this.inputRef.current.focus()
  }

  handelToggleFilter(filter) {
    this.setState({ filter: filter })
    this.inputRef.current.focus()
  }

  handelFilteredTodos = memoize((filter, todos) => {
    if (filter === 'all') {
      return todos
    }
    const flag = filter === 'completed'
    return todos.filter(todo => flag === todo.completed)
  })

  render() {
    const { filter, todos, isPc } = this.state
    const filteredTodos = this.handelFilteredTodos(this.state.filter, this.state.todos)

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
