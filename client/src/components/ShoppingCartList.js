import React from 'react';
import Product from '../models/Product';
import ProductCard from './product/ProductCard';
import { PrimaryButton } from './Button';

class ShoppingCartList extends React.Component {
  render() {
    if (this.props.items.length > 0) {
      return (
        <div>
          {this.props.items
            .map(item => new Product(item))
            .map((item, index) =>
              <ProductCard
                key={`${item.getId()}_${index}`}
                name={item.getName()}
                images={item.getImages()}
                price={item.getFormattedPrice()}
                withRemoveButton
                onRemove={() => this.props.removeFromCart(index)}
              />
            )
          }
          <PrimaryButton onClick={this.props.startCheckout}>
            Checkout
          </PrimaryButton>
        </div>
      );
    } else {
      return <p>Your cart is empty. Add some awesome products! ✨</p>;
    }
  }
}

export default ShoppingCartList;
