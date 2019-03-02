import React, { Component } from 'react';
import { getOrders } from '../api/Orders';
import LoadingIndicator from '../components/LoadingIndicator';
import OrderSummary from '../components/OrderSummary';

export default class Orders extends Component {
  state = { orders: [], loading: true };

  componentDidMount = async () => {
    const { success, data, error } = await getOrders() || [];
    this.setState({ orders: data || [], loading: false });
  };

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }
    return (
      this.state.orders.map(order =>
        <OrderSummary
          key={order.getId()}
          order={order}
        />
      )
    );
  }
}
