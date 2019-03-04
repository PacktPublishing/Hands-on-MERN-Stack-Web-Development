import React, { Component } from 'react';
import './Cart.css';
import { placeOrder } from '../api/Orders';
import ShoppingCartList from '../components/ShoppingCartList';
import SubmitOrderForm from '../components/SubmitOrderForm';

export default class Cart extends Component {
  state = {
    startedCheckout: false,
    contact: {},
    shippingAddress: {},
    successMessage: undefined,
    errorMessage: undefined,
    loading: false,
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
    this.setState({ loading: true });
    const { success, error, data } = await placeOrder({
      products: this.props.items,
      contact: this.state.contact,
      shippingAddress: this.state.shippingAddress,
    });
    if (success) {
      this.setState({
        successMessage: `Order successfully placed! Your order id is: ${data.getId()}`,
        errorMessage: undefined,
        loading: false,
      });
      this.props.emptyCart();
    } else {
      this.setState({
        successMessage: undefined,
        errorMessage: error,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="Cart">
        <h2>My Cart</h2>
        {this.state.startedCheckout ?
          <SubmitOrderForm
            values={this.state}
            handleChange={this.handleChange}
            submitOrder={this.submitOrder}
            successMessage={this.state.successMessage}
            errorMessage={this.state.errorMessage}
            loading={this.state.loading}
          /> :
          <ShoppingCartList
            items={this.props.items}
            removeFromCart={this.props.removeFromCart}
            startCheckout={this.startCheckout}
          />
        }
      </div>
    );
  }
}
