import {Component} from 'react';

class Counter extends Component {
  state = {counterVal: 0, age: 23, email: "butts"}
  inc = () => {
    this.setState({ counterVal: this.state.counterVal + 1})
  }
  dec = () => {
    this.setState({ counterVal: this.state.counterVal - 1})
  }
  render() {
    const {counterVal, age, email} = this.state
    const {color} = this.props
    return (
      <>
      <h1>{color}Counter</h1>
      <p style={{background: color}}>
        {/* this is where my butts will be */}
        {this.state.counterVal}
        <br/>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <br/>
      </p>
      </>
    )
  }
}
export default Counter;