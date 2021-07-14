import React, { useState, useRef,useEffect }from 'react'

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function CounterPrev() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)
  const [title] = useState(document.title)
  useEffect(() => {
    document.title = 'React App | 计数器'
    return () => document.title = title
  }, [title])

  const [timeList, setTimeList] = useState([{name: '用户1', time: +new Date()}])
  const prevTimeList = usePrevious(timeList)
  const handleAddUserClick = () => {
    const newData = [...timeList]
    newData.unshift({ name: `用户${newData.length + 1}`, time: +new Date()})
    setTimeList(newData)
  }

  return (
    <div className="flex flex-column justify-center align-center">
      <span>Count: <b>{count}</b></span>
      <span className="margin-top-10">prevCount: <b>{prevCount || '--'}</b></span>
      <div className="margin-top-10">
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
      <div className="margin-top-10">
        <div>当前值：</div>
        {
          timeList.map(item =>
            <div key={item.time}><b>{item.name}</b>&nbsp;&nbsp;&nbsp;&nbsp;{item.time}</div>
          )
        }
        <button onClick={handleAddUserClick}>+ 新增数据</button>
      </div>
      <div className="margin-top-10">
        <div>历史值：</div>
        {
          prevTimeList && prevTimeList.map(item =>
            <div key={item.time}><b>{item.name}</b>&nbsp;&nbsp;&nbsp;&nbsp;{item.time}</div>
          )
        }
      </div>
    </div>
  )
}
