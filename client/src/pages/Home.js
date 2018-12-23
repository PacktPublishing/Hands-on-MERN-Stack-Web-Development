import React, { Component } from 'react';
import products from '../data/products'
import ProductList from '../components/ProductList';

export default class Home extends Component {
  render() {
    return (
      <ProductList products={products} />
    );
  }
}
