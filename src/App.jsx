import React, { Component } from 'react';
import Clock from './Clock'
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap';
import Stopwatch from './Stopwatch'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadLine: '',
      countDown: 400,
      inputCountDown: 0
    }
  }

  changeDeadline(){
    //never mutate or change state directly
    this.setState({deadline: this.state.newDeadLine});
  }

  updateTimer(){
    this.setState({countDown: this.state.inputCountDown})
  }

  render(){
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}
        </div>
        <Clock deadline={this.state.deadline}></Clock>
        <Form inline>
          <FormControl
          className="Deadline-input"
          placeholder="new date"
          onChange={event => this.setState({newDeadLine: event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
        <label> Stop Watch </label>
        <input type="number" onChange={e => this.setState({inputCountDown:e.target.value})}/>
        <button onClick={() => this.updateTimer()}> Launch </button>
        <Stopwatch time={this.state.countDown}/>
        <div>{this.state.countDown}</div>
      </div>
    )
  }
}

export default App;
