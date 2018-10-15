import React, { Component } from 'react';
import face from './face.png';
import './face.css';

class Face extends Component {

  render() {
    return (
      <img src={face} className={this.props.className} />
    )
  }

}

export default Face;
