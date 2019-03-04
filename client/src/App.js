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
import Auth from './pages/Auth';
import {getCurrentUser} from './api/Auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsInCart: store.get('itemsInCart') || [],
      user: undefined,
    };
    this.ProductPage = Product(this.addToCart);
  }

  componentDidMount = () => {
    this.authUser();
    document.addEventListener(
      'visibilitychange',
      () => {
        if (!document.hidden) {
          this.setState({
            itemsInCart: store.get('itemsInCart') || []
          });
          this.authUser();
        }
      }
    );
  };

  authUser = async () => {
    const result = await getCurrentUser();
    if (result && result.data) {
      this.setState({ user: result.data })
    } else {
      this.setState({ user: undefined });
    }
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

  emptyCart = () => {
    this.setState({ itemsInCart: [] });
    store.set('itemsInCart', []);
  };

  render() {
    const isLoggedIn = this.state.user && this.state.user._id;
    return (
      <Router>
        <div className="App">
          <NavigationBar
            isLoggedIn={isLoggedIn}
            itemsInCart={this.state.itemsInCart.length}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth/:token" exact component={Auth(this.authUser)} />
            <Route path="/forms" exact component={FormDemo} />
            <Route
              path="/cart"
              exact
              render={props =>
                <Cart
                  {...props}
                  items={this.state.itemsInCart}
                  removeFromCart={this.removeFromCart}
                  emptyCart={this.emptyCart}
                />
              }
            />
            <Route path="/orders" exact component={Orders} />
            <Route path="/account" exact component={Account} />
            <Route path="/category/:slug" component={Category} />
            <Route path="/product/:id" component={this.ProductPage} />

            {isLoggedIn && this.state.user.role === 'admin' &&
              <Route path="/admin/users" exact component={UserManagement} />}
            {isLoggedIn && this.state.user.role === 'admin' &&
              <Route path="/admin/products" exact component={ProductManagement} />}

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
