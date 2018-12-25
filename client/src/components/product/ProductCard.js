import React, { Component } from 'react';
import './ProductCard.css';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.images[0],
    };
  }

  handleMouseOver = () => {
    if (this.props.images.length > 1) {
      this.setState({ image: this.props.images[1] });
    }
  };

  handleMouseLeave = () => {
    this.setState({ image: this.props.images[0] });
  };

  render() {
    return (
      <div className="ProductCard">
        <img
          src={this.state.image}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        />
        <h3>{this.props.name}</h3>
        <p>{this.props.price}</p>
      </div>
    )
  }
};
