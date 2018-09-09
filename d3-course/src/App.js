import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Colors from './Colors'
class App extends Component {
  render() {
    return (
      <svg>
       <Colors width={400}/>
      </svg>
    );
  }
}

export default App;
