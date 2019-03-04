import React, { Component } from 'react';
import './shared.css';
import DataTable from '../../components/DataTable';
import { getUsers } from '../../api/Users';
import LoadingIndicator from '../../components/LoadingIndicator';

const columns = [
  { key: '_id', label: 'ID' },
  { key: 'username', label: 'Username', sort: true },
  { key: 'email', label: 'Email', sort: true },
];

export default class UserManagement extends Component {
  state = { users: [], loading: true };

  componentDidMount = async () => {
    const users = await getUsers();
    this.setState({
      users: users
        .filter(user => user.getRole() === 'customer')
        .map(user => user.getData()),
      loading: false,
    });
  };

  render() {
    return (
      <div className="AdminView">
        <h2>User Management</h2>
        {this.state.loading ?
          <LoadingIndicator/> :
          <DataTable
            tableKey="user"
            columns={columns}
            data={this.state.users}
          />
        }
      </div>
    );
  }
}
