import React, { Component } from 'react'


class TimeAgeSecond extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '张三',
      age: 28,
      seconds: 0
    }
  }

  tick() {
    this.setState(prevState => ({seconds: ++prevState.seconds}))
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
      <div className="">
        <span>姓名：{ name } </span>
        <span>年龄：{ age }</span>
        <span>活了多久: { seconds }</span>
      </div>
    )
  }
}

export default TimeAgeSecond
