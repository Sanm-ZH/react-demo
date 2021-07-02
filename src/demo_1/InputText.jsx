import React from 'react'

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: 'Type some *markdown* here!' }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  getData() {
    return {__html: `<h4>${this.state.value}</h4>`}
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