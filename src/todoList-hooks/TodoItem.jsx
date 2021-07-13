import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({ todo, isPc, ...self }) {
  const handelOptCompletedClick = () => {
    self.handelOptCompletedItem(todo.id)
  }

  const hendelDeleteTodoClick = () => {
    self.handelDeleteTodoItem(todo.id)
  }

  return (
    <div
      className={`todo-item ${todo.completed ? 'finish' : ''} ${isPc ? '' : 'notPc'}`}
    >
      <input
        type="checkbox"
        className="toggle"
        value={+todo.completed}
        defaultChecked={+todo.completed}
        onClick={handelOptCompletedClick}
      />
      <label>{todo.content}</label>
      <button
        className="destroy"
        onClick={hendelDeleteTodoClick}
      >
      </button>
    </div>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  isPc: PropTypes.bool.isRequired
}

export default TodoItem
