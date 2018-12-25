import React, { Component } from 'react';
import SpicyDataTable from 'spicy-datatable';
import './DataTable.css';

export default class DataTable extends Component {
  render() {
    return (
      <SpicyDataTable
        tableKey={this.props.tableKey}
        columns={this.props.columns}
        rows={this.props.data}
      />
    );
  }
}
