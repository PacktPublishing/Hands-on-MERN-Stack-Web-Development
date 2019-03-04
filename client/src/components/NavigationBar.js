import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

export default class NavigationBar extends Component {
  render() {
    const { isLoggedIn, itemsInCart } = this.props;

    return (
      <div className="NavigationBar">
        <Link to="/">home</Link>
        <Link to="/category/sporty">#sporty</Link>
        <Link to="/category/tshirts">#tshirts</Link>
        <Link to="/category/jackets">#jackets</Link>
        <Link to="/category/sweaters">#sweaters</Link>
        <Link to="/category/pants">#pants</Link>
        <Link to="/category/sneakers">#sneakers</Link>
        <Link to="/category/boots">#boots</Link>
        {isLoggedIn ?
          <Fragment>
            <Link to="/cart">my cart ({itemsInCart})</Link>
            <Link to="/orders">orders</Link>
          </Fragment> :
          <Link to="/account">account</Link>
        }
      </div>
    );
  }
}
