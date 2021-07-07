import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: document.title,
      inputoutText: ['<div>componentWillMount</div><div>当前版本挂载前已弃用，可以在 constructor 中初始化数据</div>']
    }

    document.title = 'React App | 生命周期'
  }

  componentDidMount() {
    this.setState((prevState) => {
      const inputoutText = prevState.inputoutText
      inputoutText.push('<br/><div>componentDidMount</div><div>挂载后钩子</div>')
      return {inputoutText: inputoutText}
    })

    console.log('挂载后')
  }

  componentDidUpdate() {
    this.setState((prevState) => {
      const inputoutText = prevState.inputoutText
      inputoutText.push('<br/><div>componentDidUpdate</div><div>有更新后钩子</div>')
      return {inputoutText: inputoutText}
    })

    console.log('有更新')
  }

  componentWillUnmount() {
    this.setState((prevState) => {
      const inputoutText = prevState.inputoutText
      inputoutText.push('<br/><div>componentWillUnmount</div><div>卸载后钩子</div>')
      return {inputoutText: inputoutText}
    })

    document.title = this.state.title
    console.log('卸载后')
  }

  handelStringToHTML(params) {
    return { __html: params.join('') }
  }

  render(){
    const { inputoutText } = this.state

    return (
      <div className="flex flex-column justify-center align-center">
        {
          React.Children.map(this.props.children, child => child)
        }
        <br/>
        <div
          dangerouslySetInnerHTML={this.handelStringToHTML(inputoutText)}
        />
      </div>
    )
  }
}

export default LifeCycle
