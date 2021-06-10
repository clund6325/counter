import {Component} from 'react';
import Counter from './components/Counter'

class App extends Component {
  // constructor(props){       OLD TITS
  //   super(props)
  //   this.state = {val: 0}
  // }
  
  // state = {counterVal: 0, age: 32}
  // inc = () => {
  //   this.setState({ counterVal: this.state.counterVal + 1})
  // }
  // dec = () => {
  //   this.setState({ counterVal: this.state.counterVal - 1})
  // }
  render() {
    return(
      <>
        <Counter color="blue" />
        <Counter color="black" />
        <Counter color="red" />
        <Counter color="green" />
        <Counter />
      </>
    )
  }
}

export default App;
