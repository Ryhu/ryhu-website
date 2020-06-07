import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
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
        <Row>
          <Link to="/">Home </Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery </Link>
          <Link to="/contact">Contact </Link>
        </Row>
      </header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

const Row = styled.div`
  display: flex;
  align-content: row;
`


export default App;
