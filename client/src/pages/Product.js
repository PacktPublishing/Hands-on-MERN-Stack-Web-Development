import React, { Component } from 'react';
import { getProduct } from '../api/Products';
import LoadingIndicator from '../components/LoadingIndicator';
import ProductView from '../components/product/ProductView';

class Product extends Component {
  state = { product: undefined, loading: true };

  componentDidMount = async () => {
    const { id } = this.props.match.params;
    const product = await getProduct(id);
    this.setState({ product, loading: false });
  };

  render() {
    if (this.state.loading || this.state.product === undefined) {
      return <LoadingIndicator />;
    }

    return (
      <ProductView
        product={this.state.product}
        addToCart={this.props.addToCart}
      />
    );
  }
}

export default (addToCart) => (props) =>
    <Product {...props} addToCart={addToCart} />;