import React, { Component } from 'react';

import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App__intro">
          Welcome!
        </p>
      </div>
    );
  }
}

export default App;
