import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BaseInput.css';

export default class BaseInput extends Component {
  render() {
    return (
      <div className={
        `BaseInput ${this.props.type === 'checkbox' ? 'BaseInputReverse' : ''}`
      }>
        <label htmlFor={this.props.name} data-testid="baseInputLabel">
          {this.props.label}
        </label>
        <input
          data-testid="baseInput"
          id={this.props.name}
          {...this.props}
        />
      </div>
    )
  }
}

BaseInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['checkbox', 'text', 'password']).isRequired,
};
