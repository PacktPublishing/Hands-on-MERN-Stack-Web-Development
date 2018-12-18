import React, { Component } from 'react';
import './App.css';
import DynamicCounter from './components/DynamicCounter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <DynamicCounter />
        </div>
      </div>
    );
  }
}

export default App;
