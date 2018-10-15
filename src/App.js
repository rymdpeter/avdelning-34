import React, { Component } from 'react';
import background from './bg.png'
import './App.css';
import Door from './components/Door/Door.js';

class App extends Component {
  state = {
    message: "",
    step: 0,
  };

  step = () => {
    var step = this.state.step + 1;

    if(this.state.step < 3) {
      switch(step) {
        case 1:
        setTimeout(() => { this.setState({
          step: step,
          message: "Hej,"
        }); }, 3000); break;

        case 2:
        this.setState({
          step: step,
          message: "Jag kan inte hjälpa dig just nu"
        }); break;

        default: 
        this.setState({
          step: step,
          message: "Jag behöver..."
        }); break;
      }
    }
  }

  reset = () => {
    this.setState({
      step:0,
      message: "",
    })
  }

  render() {
    return (
      <div className="App">
        <img src={background} />
        <Door knock={this.step} />
        <div className="text">{this.state.message}</div>
        <button onClick={this.reset} className="resetButton">v</button>
      </div>
    );
  }
}

export default App;
