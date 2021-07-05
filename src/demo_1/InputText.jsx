import React from 'react'
import './demo.css'

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: '请输入内容' }
  }

  handleChange(e) {
    const reg1 = new RegExp('\\n', 'g')
    const reg2 = new RegExp('\\s', 'g')
    const context = e.target.value.replace(reg1, '<br/>').replace(reg2, '&nbsp;')
    console.log(context)
    this.setState({ value:  context})
  }

  getData() {
    return {__html: `<div class="input-output">${this.state.value}</div>`}
  }

  render() {
    const { value } = this.state
    const claName = this.props.claName
    return (
      <div className={claName}>
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          defaultValue={value}
          className="input-textarea"
        />
        <h3>Output</h3>
        <div
          dangerouslySetInnerHTML={this.getData()}
        />
      </div>
    )
  }
}

export default MarkdownEditor
