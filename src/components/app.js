import React, { Component } from 'react';
import searchBar from './searchBar';

export default class App extends Component { 
  render() {
    return (
      <div className='app'>
        <div className="body-wrapper">
          <searchBar />
        </div>
      </div>
    );
  }
}
