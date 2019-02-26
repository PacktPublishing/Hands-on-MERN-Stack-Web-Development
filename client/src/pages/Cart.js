import React, { Component } from 'react';
import './Cart.css';
import Product from '../models/Product';
import ProductCard from '../components/product/ProductCard';
import { PrimaryButton } from '../components/Button';
import Form from '../components/Form';
import TextInput from '../components/inputs/TextInput';
import { placeOrder } from '../api/Orders';

export default class Cart extends Component {
  state = {
    startedCheckout: false,
    contact: {},
    shippingAddress: {},
  };

  startCheckout = e =>
    this.setState({ startedCheckout: true });

  handleChange = e => {
    const { name, value } = e.target;
    const [ obj, key ] = name.split('.');
    const state = Object.assign({}, this.state);
    state[obj][key] = value;
    this.setState(state);
  };

  submitOrder = async e => {
    e.preventDefault();
    await placeOrder({
      products: this.props.items,
      contact: this.state.contact,
      shippingAddress: this.state.shippingAddress,
    });
  };

  render() {
    return (
      <div className="Cart">
        <h2>My Cart</h2>
        {this.state.startedCheckout ?
          null :
          (this.props.items.length > 0 ?
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
              <PrimaryButton onClick={this.startCheckout}>
                Checkout
              </PrimaryButton>
            </div> :
            <p>Your cart is empty. Add some awesome products! ✨</p>
          )}

        {this.state.startedCheckout &&
          <Form onSubmit={this.submitOrder}>
            <TextInput
              label="Full Name"
              name="contact.fullName"
              value={this.state.contact.fullName || ''}
              onChange={this.handleChange}
            />
            <TextInput
              label="Phone Number"
              name="contact.phoneNumber"
              value={this.state.contact.phoneNumber || ''}
              onChange={this.handleChange}
            />
            <TextInput
              label="Country"
              name="shippingAddress.country"
              value={this.state.shippingAddress.country || ''}
              onChange={this.handleChange}
            />
            <TextInput
              label="City"
              name="shippingAddress.city"
              value={this.state.shippingAddress.city || ''}
              onChange={this.handleChange}
            />
            <TextInput
              label="Address Line 1"
              name="shippingAddress.addressLine1"
              value={this.state.shippingAddress.addressLine1 || ''}
              onChange={this.handleChange}
            />
            <TextInput
              label="Address Line 2"
              name="shippingAddress.addressLine2"
              value={this.state.shippingAddress.addressLine2 || ''}
              onChange={this.handleChange}
            />
            <TextInput
              label="Postal Code"
              name="shippingAddress.postalCode"
              value={this.state.shippingAddress.postalCode || ''}
              onChange={this.handleChange}
            />
            <PrimaryButton>
              Place Order
            </PrimaryButton>
          </Form>
        }
      </div>
    );
  }
}
