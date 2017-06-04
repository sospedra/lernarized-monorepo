import React, { Component } from 'react';
import * as _ from 'lodash';
import sumN from 'sumn';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <h3>Public shared module</h3>
        <p className="App-intro">
          {_.toUpper("This is uppercase using lodash")}
        </p>

        <h3>Private <code>/core</code> shared module</h3>
        <p>The binary Mayer–Vietoris sequence init sum is</p>
        <h4>1 + 2 + 4 + 8 + 5 = {sumN(1, 2, 4, 8, 5)}</h4>
      </div>
    );
  }
}

export default App;
