import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { itemsInCart: [] };
    this.ProductPage = Product(this.addToCart);
  }


  addToCart = (item) => {
    const { itemsInCart } = this.state;
    itemsInCart.push(item);
    this.setState({ itemsInCart });
  };

  removeFromCart = (index) => {
    const { itemsInCart } = this.state;
    itemsInCart.splice(index, 1);
    this.setState({ itemsInCart });
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
            <Route path="/cart" exact component={Cart} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/account" exact component={Account} />
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
