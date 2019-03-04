import React, { Component } from 'react';
import LoadingIndicator from '../components/LoadingIndicator';
import ProductList from '../components/product/ProductList';
import { getProducts } from '../api/Products';

export default class Category extends Component {
  state = { products: [], loading: true, slug: undefined };

  componentDidMount = async () => {
    const { slug } = this.props.match.params;
    const products = await getProducts(slug);
    this.setState({
      products,
      loading: false,
      slug: slug,
    });
  };

  componentDidUpdate = async () => {
    const { slug } = this.props.match.params;
    if (slug !== this.state.slug) {
      this.setState({
        loading: true,
        products: [],
        slug: slug,
      });
      const products = await getProducts(slug);
      this.setState({ products, loading: false });
    }
  };

  render() {
    return (
      this.state.loading ?
        <LoadingIndicator /> :
        <ProductList products={this.state.products} />
    );
  }
}
