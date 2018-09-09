import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash'

import Preloader from './components/Preloader'

import {loadAllData} from './DataHandling'
class App extends Component {

  state = {
    techSalaries: [],
    countyNames: [],
    medianIncomes: []
  }

  componentWillMount() {
    loadAllData(data => this.setState(data))
  }
  render() {
    if (this.state.techSalaries.length < 1){
      return (
        <Preloader />
      );
    }
    return (
      <div className="App">
          <div className="App contaner">
            <h1>Loaded {this.state.techSalaries.length} salaries</h1>
          </div>
      </div>
    );
  }
}

export default App;
