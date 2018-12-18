import React, { Component } from 'react';
import './App.css';
import ProductCard from './components/ProductCard';

const images = [
  'https://images.unsplash.com/photo-1543204561-e958f1dfd0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1543204638-6b453005484a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductCard
          images={images}
          name="Product XYZ"
          price="$49.99"
        />
      </div>
    );
  }
}

export default App;
