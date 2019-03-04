import React, { Component } from 'react';
import BaseInput from './BaseInput';

export default class TextInput extends Component {
  render() {
    return (
      <BaseInput
        {...this.props}
        type="text"
      />
    )
  }
}