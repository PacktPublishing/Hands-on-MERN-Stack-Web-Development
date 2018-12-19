import React, { Component } from 'react';
import BaseInput from './BaseInput';

export default class CheckboxInput extends Component {
  render() {
    return (
      <BaseInput
        {...this.props}
        type="checkbox"
      />
    )
  }
}