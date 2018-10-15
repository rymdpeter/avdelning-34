import React, { Component } from 'react';
import door from './door.png';
import './door.css';

import Face from '../Face/Face.js';

class Door extends Component {
  state = {
    faceClass: "face",
  }

  doorClick = () => {
      this.setState({
        faceClass: "face active",
      });
      this.props.knock();
  }

  render () {
    return(
      <div className="door" onClick={this.doorClick}>
        <img src={door} />
        <Face className={this.state.faceClass} />
      </div>
    );
  }
}

export default Door;
