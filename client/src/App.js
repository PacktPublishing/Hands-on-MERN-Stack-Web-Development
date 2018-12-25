import React, { Component } from 'react';
import store from 'store2';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import FormDemo from './pages/FormDemo';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Product from './pages/Product';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import Account from './pages/Account';
import UserManagement from './pages/admin/UserManagement';
import ProductManagement from './pages/admin/ProductManagement';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { itemsInCart: store.get('itemsInCart') || [] };
    this.ProductPage = Product(this.addToCart);
  }

  componentDidMount = () => {
    document.addEventListener(
      'visibilitychange',
      () => {
        if (!document.hidden) {
          this.setState({
            itemsInCart: store.get('itemsInCart') || []
          });
        }
      }
    );
  };

  addToCart = (item) => {
    const { itemsInCart } = this.state;
    itemsInCart.push(item);
    this.setState({ itemsInCart });
    store.set('itemsInCart', itemsInCart);
  };

  removeFromCart = (index) => {
    const { itemsInCart } = this.state;
    itemsInCart.splice(index, 1);
    this.setState({ itemsInCart });
    store.set('itemsInCart', itemsInCart);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar
            isLoggedIn={true}
            itemsInCart={this.state.itemsInCart.length}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/forms" exact component={FormDemo} />
            <Route
              path="/cart"
              exact
              component={props => <Cart {...props} items={this.state.itemsInCart} />}
            />
            <Route path="/orders" exact component={Orders} />
            <Route path="/account" exact component={Account} />
            <Route path="/admin/users" exact component={UserManagement} />
            <Route path="/admin/products" exact component={ProductManagement} />
            <Route path="/category/:slug" component={Category} />
            <Route path="/product/:id" component={this.ProductPage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
