import React, { useState, useEffect } from 'react'

export default function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount)

  const [title] = useState(document.title)
  document.title = 'React App | 计数器'
  useEffect(() => () => document.title = title)

  return (
    <div className="flex flex-column justify-center align-center">
      <span>Count: <t>{count}</t></span>
      <div className="margin-top-10">
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    </div>
  )
}
