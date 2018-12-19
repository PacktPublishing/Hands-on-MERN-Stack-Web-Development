import React, { Component } from 'react';
import './App.css';
import products from './data/products'
import ProductList from './components/ProductList';
import TextInput from './components/inputs/TextInput';
import PasswordInput from './components/inputs/PasswordInput';
import CheckboxInput from './components/inputs/CheckboxInput';


class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    password: '',
    sendEmail: true,
  };

  handleTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBooleanChange = e => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  render() {
    return (
      <div className="App">
        <TextInput
          value={this.state.firstName}
          name="firstName"
          onChange={this.handleTextChange}
        />
        <TextInput
          value={this.state.lastName}
          name="lastName"
          onChange={this.handleTextChange}
        />
        <PasswordInput
          value={this.state.password}
          name="password"
          onChange={this.handleTextChange}
        />
        <CheckboxInput
          checked={this.state.sendEmail}
          name="sendEmail"
          onChange={this.handleBooleanChange}
        />
        {/*<ProductList products={products} />*/}
      </div>
    );
  }
}

export default App;
