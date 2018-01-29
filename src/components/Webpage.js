import React, { Component } from 'react';
import FillerText from './FillerText';

class Webpage extends Component {
  render() {
    return (
        <div>
          <p>The world's coolest webpage</p>
          <FillerText />
          <FillerText />
        </div>
      );
  }
}

export default Webpage;