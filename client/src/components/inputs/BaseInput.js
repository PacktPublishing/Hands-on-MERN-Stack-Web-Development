import React, { Component } from 'react';

export default class BaseInput extends Component {
  render() {
    return (
      <input {...this.props} />
    )
  }
}