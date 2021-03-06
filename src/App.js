import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import PersonList from './PersonList';
import Input from './Input';

const api = axios.create({
  baseURL: 'http://localhost:3000/'
})
class  App extends Component {

  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data);
    })
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Input />
      <PersonList />
    </div>
  );
}
}

export default App;
