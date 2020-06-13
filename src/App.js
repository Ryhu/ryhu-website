import React, { Component } from 'react';
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

class App extends Component {
  constructor(){
    super()

    this.state = {
      class: ''
    }
  }

  applyClass(){
    console.log(this.state)
    this.setState({
      class: this.state.class == 'flip' ? '' : 'flip'
    })
  }
  render(){
    return (
      <AppContainer>
        <header className="App-header">
          <ButtonsContainer>
            <Link to="/"><NavButtonImage id="homeHeader" style={{verticalAlign: "bottom"}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabHomeV2_nazdig.png"></NavButtonImage></Link>
            <div>
              <Link to="/about"><NavButtonImage id="aboutHeader" style={{verticalAlign: "bottom"}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabAboutV2_jxzxiz.png"></NavButtonImage></Link>
              <Link to="/gallery"><NavButtonImage id="galleryHeader"style={{verticalAlign: "bottom"}}  src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabGalleryV2_q5tbtf.png"></NavButtonImage></Link>
              <Link to="/contact"><NavButtonImage id="contactHeader"style={{verticalAlign: "bottom"}}  src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabContactV2_kj3pe1.png"></NavButtonImage></Link>
            </div>
          </ButtonsContainer>
        </header>
        <PortfolioCase>
          <Page className={this.state.class + 'page'}>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </Page>
        </PortfolioCase>
        <br></br>
      <button onClick={() => this.applyClass()}>clickety click</button>
      </AppContainer>
    );
  }
}

const Thing = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  a {
    margin: 0;
    padding: 0;
  }
`
const NavButtonImage = styled.img`
// TODO: HARD CODED
  width: 150px;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  :nth-child(n) {
    margin: 0;
    padding: 0;
  }
  width: 60%;
  background-color: black
`

const PortfolioCase = styled.div`
  background-color: #f0d38f;
  padding: 10px;
  width: 65%;
  margin: auto;
  height: 43rem;
  perspective:3000px;
`
const Page = styled.div`
  background-color: white;
  height: 43rem;
  width: 99%;
  margin: auto;
  backface-visibility: hidden;
  display: absolute;
  transition: .5s;
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
