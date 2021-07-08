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
    // 在此钩子调用 setState 会触发额外渲染
    // 挂载钩子尽量只进行订阅操作，不进行数据的初始化
    // 如果需要依赖DOM进行操作事，可在此生命周期进行
    this.setState((prevState) => {
      const inputoutText = prevState.inputoutText
      inputoutText.push('<br/><div>componentDidMount</div><div>挂载后钩子</div>')
      return {inputoutText: inputoutText}
    })

    console.log('挂载后')
  }

  shouldComponentUpdate() {
    // 参数 nextProps, nextState
    console.log('不常用的生命周期', '数据有更新会触发')
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    // 在此处操作状态一定要包裹在条件内不然会造成死循环
    if (prevState.inputoutText.length < 3) {
      this.setState((prevState) => {
        const inputoutText = prevState.inputoutText
        inputoutText.push('<br/><div>componentDidUpdate</div><div>有更新后钩子</div>')
        return {inputoutText: inputoutText}
      })
    }

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
