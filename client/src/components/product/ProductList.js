import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './ProductList.css';

export default class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        {this.props.products.map((product, index) =>
          <Link
            key={product.getId()}
            to={`/product/${product.getId()}`}
            style={
              index % 2 !== 0 ?
                { alignSelf: 'flex-end' } :
                null
            }
          >
            <ProductCard
              name={product.getName()}
              images={product.getImages()}
              price={product.getFormattedPrice()}
              isFeatured={product.isFeatured()}
            />
          </Link>
        )}
      </div>
    );
  }
}
