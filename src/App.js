import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import {Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

class App extends Component {
  constructor(){
    super()

    this.state = {
      disabled: false,
      currentPage: 'Home',
      Home: 'active',
      About: 'hidden',
      Gallery: 'hidden',
      Contact: 'hidden',
    }
  }

  forward(difference, currentPage, clickedPage){
    let state = {
      Home: 'hidden',
      About: 'hidden',
      Gallery: 'hidden',
      Contact: 'hidden',
    }
    state[clickedPage] =  '';
    state[currentPage] =  'active flip';
    this.setState(state, console.log(state))
    this.setState({
      [clickedPage]: 'active',
      currentPage: clickedPage
    })

    if(difference > 1){
      setTimeout(() => {
        this.forward(difference-1, clickedPage, Pages[Pages.indexOf(clickedPage)+1])
      }, (500));
    }
  }

  back(difference, currentPage, clickedPage){
    let state = {
      Home: 'hidden',
      About: 'hidden',
      Gallery: 'hidden',
      Contact: 'hidden',
    }
    state[clickedPage] =  'active flip';
    state[currentPage] =  '';
    this.setState(state)
    setTimeout(() => {
      this.setState({
        [clickedPage]: 'active',
        currentPage: clickedPage
      })
    }, (20));

    if(difference > 1){
      setTimeout(() => {
        this.back(difference-1, clickedPage, Pages[Pages.indexOf(clickedPage)-1])
      }, (520));
    }
  }

  flipHandler(clickedPage){
    if (!this.state.disabled && clickedPage != this.state.currentPage){
      let difference = Pages.indexOf(this.state.currentPage) - Pages.indexOf(clickedPage)

      if (difference < 0){
        this.forward(Math.abs(difference), this.state.currentPage, Pages[Pages.indexOf(this.state.currentPage)+1])
      }
      else{
        this.back(difference, this.state.currentPage, Pages[Pages.indexOf(this.state.currentPage)-1])
      }
      
      this.setState({
        disabled: true,
      })

      setTimeout(() => {
        this.setState({
          disabled: false
        })
      }, (Math.abs(difference) * 520));
    }
  }

  wheelHandler(evt){
    if(evt.deltaY >= 0){
      let newPage = Pages[Pages.indexOf(this.state.currentPage) - 1]
      if (newPage){
        this.flipHandler(newPage)
      }
    }
    else if(evt.deltaY < 0){
      let newPage = Pages[Pages.indexOf(this.state.currentPage) + 1]
      if (newPage){
        this.flipHandler(newPage)
      }
    }
  }

  render(){
    return (
      <AppContainer>
        <div onWheel={(e) => this.wheelHandler(e)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
          <div>
            <ButtonsContainer>
              <HomeButtonImage onClick={() => {this.flipHandler('Home')}} src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsHome.png"></HomeButtonImage>
              <div>
                <NavButtonImage onClick={() => {this.flipHandler('About')}} src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597779219/portfolio%20resources/portfolioTabsAbout.png"></NavButtonImage>
                <NavButtonImage onClick={() => {this.flipHandler('Gallery')}} src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsGallery.png"></NavButtonImage>
                <NavButtonImage onClick={() => {this.flipHandler('Contact')}} src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsContact.png"></NavButtonImage>
              </div>
            </ButtonsContainer>
          </div>
          <PortfolioPadding>
            <PortfolioCase>
              <Page className={this.state.Home}>
                <Home></Home>
              </Page>
              <Page className={this.state.About}>
                <About></About>
              </Page>
              <Page className={this.state.Gallery}>
                <Gallery></Gallery>
              </Page>
              <Page className={this.state.Contact}>
                <Contact></Contact>
              </Page>
            </PortfolioCase>
          </PortfolioPadding>
        </div>
      </AppContainer>
    );
  }
}

const Pages = ['Home', 'About', 'Gallery', 'Contact']

const NavButtonImage = styled.img`
// TODO: HARD CODED
  width: 150px;
  vertical-align: bottom;
`

const HomeButtonImage = styled.img`
// TODO: HARD CODED
  width: 300px;
  vertical-align: bottom;
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
  width: 75rem;
`
const PortfolioPadding = styled.div`
  padding: 10px 10px 0 10px;
  background-color: #f0d38f;
  width: 75rem;
  border-radius: 0.7rem;
`
const PortfolioCase = styled.div`
  background-color: #f0d38f;
  margin: auto;
  height: 43rem;
  perspective:3000px;
  perspective-origin: center;
  backface-visibility:hidden;
`
const Page = styled.div`
  background-color: white;
  height: 43rem;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform .5s, opacity .5s;
  transform-origin: bottom;
  overflow: hidden;
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
