import React, { Component } from 'react';
import apiCalls from './../assets/api/apiCalls';
import logo from './../assets/img/logo.svg';
import './../assets/css/App.css';

class App extends Component {
  render() {

    apiCalls.playerInfo(57066941, "recentMatches", function (result) {
      apiCalls.matches(result[0].match_id, function () {

      });
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
