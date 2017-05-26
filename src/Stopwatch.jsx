import React, { Component } from 'react';
class Stopwatch extends Component {
  constructor(props){
    super(props);
    this.state = {
      startTime:0
    }
  }

  componentWillMount(){
    this.startCountDown(this.props.time);
  }

  componentDidMount(){
    setInterval(() => this.startCountDown(this.props.time),1000)
  }

  startCountDown(time){
    time -= 1;
    this.setState({startTime: time})
  }

  render(){
    return (
      <div>
        <div> { this.state.startTime } </div>
      </div>
    )
  }
}

export default Stopwatch;
