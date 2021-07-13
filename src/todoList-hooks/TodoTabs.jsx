import React, { useState, useEffect }from 'react'
import PropTypes from 'prop-types'
import './tabs.css'

function TodoTabs({todos, filter, ...self}) {
  const [status] = useState(['all', 'active', 'completed'])

  const [unFinishedNum, setUnFinishedNum] = useState(0)
  useEffect(() => {
    const unFinishedList = todos.filter(todo => !todo.completed)
    setUnFinishedNum(unFinishedList.length)
  }, [todos])

  const handelToggleFilterClick = filter => {
    self.handelToggleFilter(filter)
  }

  const handleClearAllCompletedClick = () => {
    self.handelClearAllCompleted()
  }

  return (
    <div className="helper">
      <span className="left"><b>{ unFinishedNum }</b> iteams left</span>
      <span className="tabs">
        {
          status.map(item =>
            <span
              key={item}
              className={`${item} ${filter === item ? 'actived' : ''}`}
              onClick={() => handelToggleFilterClick(item)}
            >
              {item}
            </span>
          )
        }
      </span>
      <span
        className="clear"
        onClick={handleClearAllCompletedClick}
      >
          Clear completed
      </span>
    </div>
  )
}

TodoTabs.propTypes = {
  todos: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired
}

export default TodoTabs
