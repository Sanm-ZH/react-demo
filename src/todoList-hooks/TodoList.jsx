import React, { useRef, useState, useEffect } from 'react'
import { isPCHandle } from '../common/utils'
import TodoItem from './TodoItem'
import TodoTabs from './TodoTabs'
import Author from './Author'
import './todo.css'

export default function TodoList({ author }) {
  // 页面标签标题
  const [pageTitle] = useState(document.title)
  document.title = 'React App | Todo Hooks'
  useEffect(() => () => document.title = pageTitle)

  // 输入框 焦点
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  const handelInputFocus = () => {
    inputRef.current.focus()
  }

  // 数据操作
  const [todos, setTodos] = useState([])
  const handelAddItem = e => {
    if (e.which !== 13) return
    if (!e.target.value.trim()) {
      // 没有输入不添加
      return
    }
    const value = e.target.value.trim()
    const newTodos = [...todos]
    newTodos.unshift({
      id: +new Date(),
      content: value,
      completed: false
    })
    setTodos(newTodos)
    e.target.value = ''
  }
  const handelOptCompletedItem = id => {
    const newTodos = [...todos]
    const activeTodoIndex = newTodos.findIndex(item => item.id === id)
    newTodos[activeTodoIndex]['completed'] = !newTodos[activeTodoIndex]['completed']
    setTodos(newTodos)
    handelInputFocus()
  }
  const handelDeleteTodoItem = id => {
    const newTodos = [...todos]
    newTodos.splice(newTodos.findIndex((todo) => todo.id === id), 1)
    setTodos(newTodos)
    handelInputFocus()
  }
  const handelClearAllCompleted = ()  => {
    const newTodos = [...todos]
    const activeList = newTodos.filter(todo => !todo.completed)
    setTodos(activeList)
    handelInputFocus()
  }

  // 状态过滤
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const handelToggleFilter = (filter) => {
    setFilter(filter)
    handelInputFocus()
  }
  useEffect(() => {
    if (filter === 'all') {
      setFilteredTodos(todos)
      return
    }
    const flag = filter === 'completed'
    setFilteredTodos(todos.filter(todo => flag === todo.completed))
  }, [todos, filter])

  const [isPc] = useState(isPCHandle())

  return (
    <div>
      <div className="todo-app">
        <input
          type="text"
          className="add-input"
          ref={inputRef}
          placeholder="接下来要做什么？"
          onKeyPress={handelAddItem}
        />
        {
          filteredTodos.map(todo => <TodoItem
            todo = {todo}
            isPc = {isPc}
            key = {todo.id}
            handelOptCompletedItem = {handelOptCompletedItem}
            handelDeleteTodoItem = {handelDeleteTodoItem}
          />
          )
        }
        <TodoTabs
          filter={filter}
          todos={todos}
          handelToggleFilter={handelToggleFilter}
          handelClearAllCompleted={handelClearAllCompleted}
        />
      </div>
      <Author author={author} />
    </div>
  )
}
