import React, { Component } from 'react';
import BaseInput from './BaseInput';

export default class PasswordInput extends Component {
  render() {
    return (
      <BaseInput
        {...this.props}
        type="password"
      />
    )
  }
}