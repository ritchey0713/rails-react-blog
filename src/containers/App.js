import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import Posts from './Posts.js'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
}

export default App;
