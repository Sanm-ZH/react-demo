import React, { Component } from 'react'
import logo from './images/logo.svg'
import './styles/App.css'
import './styles/common.css'
import InputText from './demo_1/InputText'
import TimeAgeSecond from './demo_1/TimeAgeSecond'

function HandledistributionComponent(props) {
  const type = props.type
  let element = ''
  switch (type) {
  case 'input':
    element = <InputText />
    break
  case 'time':
    element = <TimeAgeSecond />
    break
  default:
    element = <span></span>
  }
  return element
}

function Default(props) {
  return (
    <div
      style={{ 'display': props.type === '' ? 'flex' : 'none' }}
      className="flex justify-center align-center margin-bottom-20 font-20"
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
    { label: '输入框', type: 'input' }
  ].map(item => (
    <li key={item.type}
      className={ `list-item ${item.type === props.type ? 'live-active' : ''}`}
      value={item.type}>
      {item.label}
    </li>
  ))

  return (
    <ul
      className="flex justify-center align-center margin-bottom-30"
      onClick={handelDemoListClick}
    >
      {demoListDom}
    </ul>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { demoType: '' }
    this.handelDemoListClick = this.handelDemoListClick.bind(this)
  }

  handelDemoListClick(type) {
    this.setState({ demoType: type })
  }

  render() {
    const { demoType } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ReactJS Demo</h2>
        </header>
        <Default type={demoType} />
        <DemoList handelDemoListClick={ this.handelDemoListClick } type={demoType} />
        <HandledistributionComponent type={demoType} />
      </div>
    )
  }
}

export default App
