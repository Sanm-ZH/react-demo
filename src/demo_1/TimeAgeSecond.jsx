import React, { Component } from 'react'
import { getGrowAge } from '../common/utils'


class TimeAgeSecond extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张三',
      age: getGrowAge('1990-1-1'),
      seconds: getGrowAge('1990-1-1', 'all1')
    }
  }

  tick() {
    this.setState(() => ({seconds: getGrowAge('1990-1-1', 'all1')}))
  }

  componentDidMount(){
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { name, age, seconds } = this.state
    return (
      <div className="flex flex-column justify-center align-center">
        <span>姓名：{ name } </span>
        <span>年龄：{ age }</span>
        <span>{ seconds }</span>
      </div>
    )
  }
}

export default TimeAgeSecond
