import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <form
        className="Form"
        onSubmit={this.props.onSubmit}
      >
        {this.props.children}
      </form>
    );
  }
}