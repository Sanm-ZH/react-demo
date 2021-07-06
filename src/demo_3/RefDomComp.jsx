import React, { Component } from 'react'
// 获取真实元素的DOM节点

class RefDomComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      context: ''
    }
    this.inputRef = React.createRef()
    this.handelFocusClick = this.handelFocusClick.bind(this)
    this.handelSubmitClick = this.handelSubmitClick.bind(this)
  }

  handelFocusClick() {
    this.inputRef.current.focus()
  }

  handelSubmitClick() {
    this.setState({context: this.inputRef.current.value})
  }

  render() {
    return (
      <div>
        <div className="flex justify-center align-center">
          <input type="text" ref={this.inputRef} />
          <input type="button" onClick={this.handelFocusClick} value="click focus" />
          <input type="button" onClick={this.handelSubmitClick} value="submit" />
        </div>
        <div className="flex justify-center align-center col-61dafb margin-top-20">
          {this.state.context}
        </div>
      </div>
    )
  }
}

export default RefDomComp
