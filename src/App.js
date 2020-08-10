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
    this.setState(state, console.log(state))
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
      console.log(difference)

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
    // if (i != end){
    //   if (direction){
    //   }
    //   else{
    //     $("#" + translator(i)).toggleClass("onTop")
    //     $("#" + translator(i-1)).toggleClass("onTop");
    //     $("#" + translator(i-1)).toggleClass("hidden")
  
    //     setTimeout(function(){
    //       $("#" + translator(i-1)).toggleClass("flip");
    //     }, 20);
       
        
    //     setTimeout(function(){
          
    //       $("#" + translator(i)).toggleClass("hidden");
    //       flipLogic(i-1, end)
    //     }, 520);
    //   }
    // }
    // else currentPage = i;
  }

  // //tab on click
  // $(".tab").on("click", function(){
  //   flipHandler(translator($(this).attr('id')));
  // })

  render(){
    return (
      <AppContainer>
        <header className="App-header">
          <ButtonsContainer>
            <NavButtonImage onClick={() => {this.flipHandler('Home')}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabHomeV2_nazdig.png"></NavButtonImage>
            <div>
              <NavButtonImage onClick={() => {this.flipHandler('About')}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabAboutV2_jxzxiz.png"></NavButtonImage>
              <NavButtonImage onClick={() => {this.flipHandler('Gallery')}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabGalleryV2_q5tbtf.png"></NavButtonImage>
              <NavButtonImage onClick={() => {this.flipHandler('Contact')}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabContactV2_kj3pe1.png"></NavButtonImage>
            </div>
          </ButtonsContainer>
        </header>
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
      </AppContainer>
    );
  }
}

const Pages = ['Home', 'About', 'Gallery', 'Contact']

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
  width: 60%;
  background-color: black
`
const PortfolioPadding = styled.div`
  padding: 10px 10px 0 10px;
  background-color: #f0d38f;
  width: 65%;
  margin: auto;
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
