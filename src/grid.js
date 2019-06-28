import React, { Component } from 'react';
import {AgGridReact} from 'ag-grid-react';
import './app.css';

class Grid extends Component {
  constructor(props){
    super(props);

    this.state = {
      columnDefs: [{headerName: 'User ID', field: 'userId', sortable: true, filter: true}, {headerName: 'Post ID', field: 'id', sortable: true, filter: true}, {headerName: 'Title', field: 'title'}, {headerName: 'Post', field: 'body'}]
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then(rowData => this.setState({rowData}))
  }

  render() {
    return (
      <div className='ag-theme-balham size'>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
        />
      </div>
    );
  }
}

export default Grid;