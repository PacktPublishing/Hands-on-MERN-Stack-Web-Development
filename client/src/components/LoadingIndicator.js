import React, { Component } from 'react';
import './LoadingIndicator.css';

export default class LoadingIndicator extends Component {
  render() {
    return (
      <div className="LoadingIndicator">
        <div className="LoadingIndicatorInner"> </div>
      </div>
    );
  }
}
