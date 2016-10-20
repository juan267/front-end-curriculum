const CheckBox = React.createClass({
  getInitialState() {
    return {
      checked: false
    }
  },
  pepitoToggle(event) {
    this.setState({checked: !this.state.checked})
  },
  handleInputChange() {
    console.log('esto eso onChange')
  },
  render() {
    return (
      <div>
        <input type='checkbox' onClick={this.pepitoToggle} checked={this.state.checked} value='hola'/>
        <input onChange={this.handleInputChange} type='text' />
        <p>{this.state.checked ? "Check" : "Unchecked"}</p>
      </div>
    )
  }
})



ReactDOM.render(<CheckBox />, document.getElementById('react-container'))







