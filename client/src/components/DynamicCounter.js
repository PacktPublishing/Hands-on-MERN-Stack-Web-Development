import React, { Component } from 'react';

const getColor = (value, max, min) => {
  if (value > max) {
    return 'green';
  } else if (value < min) {
    return 'red';
  } else {
    return 'white';
  }
};

class DynamicCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment(this.props.label)}>+1</button>
        <span style={{
          padding: 20,
          color: getColor(
            this.props.value,
            this.props.max,
            this.props.min
          )
        }}>
          {this.props.label}: {this.props.value}
        </span>
        <button onClick={this.props.decrement(this.props.label)}>-1</button>
      </div>
    );
  }
}

export default DynamicCounter;
