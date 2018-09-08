import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axis from './Axis'

class App extends Component {
  render() {
    return (
      <svg width="800" height="400" id="svg">
        <Axis />
      </svg>
    );
  }
}

export default App;
