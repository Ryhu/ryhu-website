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
    <AppContainer>
      <header className="App-header">
        <Row>
          <Link to="/"><img id="homeHeader" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabHomeV2_nazdig.png" class="tab"></img></Link>
          <Link to="/about">    <img id="aboutHeader" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabAboutV2_jxzxiz.png" class="tab"></img>
</Link>
          <Link to="/gallery">    <img id="galleryHeader" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabGalleryV2_q5tbtf.png" class="tab"></img>
</Link>
          <Link to="/contact">    <img id="contactHeader" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabContactV2_kj3pe1.png" class="tab"></img>
</Link>
        </Row>
      </header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>

    <div id="portfolio" class="mx-auto">
      <div id="headerGap"></div>
      </div>
    </AppContainer>
  );
}

const Row = styled.div`
  display: flex;
  align-content: row;
`
const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
  background-image: url('./wood_table_background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: black;
`

export default App;
