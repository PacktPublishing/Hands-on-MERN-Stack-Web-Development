import store from 'store2';
import React, { Component } from 'react';

class Auth extends Component {
  componentDidMount = async () => {
    if (this.props.match.params.token) {
      await store.set('authToken', this.props.match.params.token);
      await this.props.authUser();
    }
    this.props.history.push('/');
  };

  render() {
    return null;
  }
}

export default (authUser) => (props) =>
  <Auth authUser={authUser} {...props} />;
