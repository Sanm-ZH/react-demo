import React, { Component } from 'react'
import logo from './images/logo.svg'
import './styles/App.css'
import './styles/common.css'
import InputText from './demo_1/InputText'
import TimeAgeSecond from './demo_1/TimeAgeSecond'
import LifeCycle from './demo_2/LifeCycle'

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
    { label: '生命周期', type: 'life' }
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
