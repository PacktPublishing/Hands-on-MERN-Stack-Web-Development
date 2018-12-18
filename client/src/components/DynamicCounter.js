import React, { Component } from 'react';

const getColor = (value) => {
  if (value > 10) {
    return 'green';
  } else if (value < -10) {
    return 'red';
  } else {
    return 'white';
  }
};

class DynamicCounter extends Component {
  state = { counter: 0 };

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <span style={{
          padding: 20,
          color: getColor(this.state.counter)
        }}>
          {this.state.counter}
        </span>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}

export default DynamicCounter;
