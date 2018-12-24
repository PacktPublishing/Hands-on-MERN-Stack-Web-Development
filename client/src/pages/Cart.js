import React, { Component } from 'react';
import './Cart.css';
import Product from '../models/Product';
import ProductCard from '../components/ProductCard';
import { PrimaryButton } from '../components/Button';

export default class Cart extends Component {
  render() {
    return (
      <div className="Cart">
        <h2>My Cart</h2>
        {this.props.items.length > 0 ?
          <div>
            {this.props.items
              .map(item => new Product(item))
              .map(item=>
                <ProductCard
                  key={item.getId()}
                  name={item.getName()}
                  images={item.getImages()}
                  price={item.getFormattedPrice()}
                />
              )
            }
            <PrimaryButton>
              Checkout
            </PrimaryButton>
          </div> :
          <p>Your cart is empty. Add some awesome products! ✨</p>
        }
      </div>
    );
  }
}
