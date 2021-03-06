import React, { Component } from 'react'
import logo from './images/logo.svg'
import './styles/App.css'
import './styles/common.css'
import InputText from './demo_1/InputText'
import TimeAgeSecond from './demo_1/TimeAgeSecond'
import LifeCycle from './demo_2/LifeCycle'
import PropTypeComp from './demo_2/PropTypeComp'
import RefDomComp from './demo_3/RefDomComp'
import TodoList from './todoList/TodoList'
import TodoListHooks from './todoList-hooks/TodoList'
import ScorllStyle1 from './demo_4/ScorllStyle1'
import Counter from './demo_5/Counter-hooks'
import CounterPrev from './demo_5/Counter-Prev-hooks'

function HandledistributionComponent(props) {
  const type = props.type
  let element = ''
  switch (type) {
  case 'input':
    element = <InputText claName="flex flex-column justify-center align-center" />
    break
  case 'time':
    element = <TimeAgeSecond />
    break
  case 'life':
    element = <LifeCycle><div>子节点1</div><div>子节点2</div></LifeCycle>
    break
  case 'proptypes':
    element = <PropTypeComp context="必传入参" />
    break
  case 'ref':
    element = <RefDomComp />
    break
  case 'todo':
    element = <TodoList author={props.author} />
    break
  case 'todo-hooks':
    element = <TodoListHooks author={props.author} />
    break
  case 'scorll1':
    element = <ScorllStyle1 />
    break
  case 'counter':
    element = <Counter initialCount={0} />
    break
  case 'counter-prev':
    element = <CounterPrev />
    break
  default:
    element = <span></span>
  }
  return element
}

function Default(props) {
  return (
    <div
      className={`flex justify-center align-center margin-bottom-20 font-20 ${props.type === '' ? '' : 'none'}`}
    >
      请选择下面一个案例：
    </div>
  )
}

function DemoList(props) {
  function handelDemoListClick(e) {
    e.preventDefault()
    if (e.target.nodeName === 'LI') {
      props.handelDemoListClick(e.target.getAttribute('value'))
    }
  }

  const demoListDom = [
    { label: '个人信息', type: 'time' },
    { label: '输入框', type: 'input' },
    { label: '生命周期', type: 'life' },
    { label: 'propTypes', type: 'proptypes' },
    { label: '获取dom节点', type: 'ref' },
    { label: 'todo-list', type: 'todo' },
    { label: 'todo-list-hooks', type: 'todo-hooks' },
    { label: 'scorll样式1', type: 'scorll1' },
    { label: '计数器hooks', type: 'counter' },
    { label: '计数器-prev hooks', type: 'counter-prev' },
  ].map(item => (
    <li key={item.type}
      className={ `list-item word-wrap ${item.type === props.type ? 'live-active' : ''}`}
      value={item.type}>
      {item.label}
    </li>
  ))

  return (
    <div className="flex justify-center align-center margin-bottom-20">
      <ul
        className="inline-flex flex-row justify-center flex-wrap width-700"
        onClick={handelDemoListClick}
      >
        {demoListDom}
      </ul>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { demoType: '', author: 'Sanm-ZH' }
    this.handelDemoListClick = this.handelDemoListClick.bind(this)
  }

  handelDemoListClick(type) {
    this.setState({ demoType: type })
  }

  render() {
    const { demoType, author } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ReactJS App</h2>
        </header>
        <Default type={demoType} />
        <DemoList handelDemoListClick={ this.handelDemoListClick } type={demoType} />
        <HandledistributionComponent type={demoType} author={author} />
      </div>
    )
  }
}

export default App
