import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <form>
        <input type="text" placeholder="Hello"/>
        <input type="number" placeholder="Hello"/>
        <button type="submit">Submit</button>
      </form>
        <button>Submit From Outside Form</button>
      </div>
    );
  }
}

export default App;
