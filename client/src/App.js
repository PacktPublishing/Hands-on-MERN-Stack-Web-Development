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
  render() {
    return (
      <Router>
        <div className="App">
          <NavigationBar isLoggedIn={true} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/forms" exact component={FormDemo} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/account" exact component={Account} />
            <Route path="/category/:slug" component={Category} />
            <Route path="/product/:id" component={Product} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
