import React, { Component } from 'react';
import './App.css';
import products from './data/products'
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList products={products} />
      </div>
    );
  }
}

export default App;
