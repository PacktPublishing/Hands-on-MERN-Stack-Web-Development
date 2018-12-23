import React, { Component } from 'react';

export default class Category extends Component {
  render() {
    return (
      <h1>Category: {this.props.match.params.slug}</h1>
    );
  }
}
