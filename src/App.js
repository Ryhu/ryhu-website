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
      class: '',
      currentPage: 0,
      active: true,
      direction: true,
      0: '',

    }
  }

  applyClass(){
    console.log(this.state)
    this.setState({
      class: this.state.class == 'flip' ? '' : 'flip'
    })
  }
  
  flipHandler(clickedPage){
    console.log(this)
    if (this.state.active && clickedPage != this.state.currentPage){
      let delay;
      let active = false;
      let direction;

      if (this.state.currentPage > clickedPage){
        direction = false;
        delay = this.state.currentPage - clickedPage;
      }
      else{
        direction = true;
        delay =  clickedPage - this.state.currentPage;
      }
      setTimeout(() => {
        this.setState({
          active: true
        })
      }, (delay * 520));

      this.setState({
        delay: delay,
        active: active,
        direction: direction,
      }, this.flipLogic(this.state.currentPage, clickedPage))
      
    }
  }
  

  // //tab on click
  // $(".tab").on("click", function(){
  //   flipHandler(translator($(this).attr('id')));
  // })
    
  // //main flip logic
  
  flipLogic(i, end){
    console.log(this.state)
    console.log('hi')
    // if (i != end){
    //   if (direction){
    //     $("#" + translator(i+1)).toggleClass("hidden")
    //     $("#" + translator(i)).toggleClass("flip");
    //     setTimeout(function(){
    //       $("#" + translator(i)).toggleClass("hidden onTop");
    //       $("#" + translator(i+1)).toggleClass("onTop")
    //       flipLogic(i+1, end)
    //     }, 520);
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
  
  // //translates
  // function translator(word){
  //   switch(word){
  //     case "homeHeader":
  //       return 0;
  //       break;
  //     case "aboutHeader":
  //       return 1;
  //       break;
  //     case "galleryHeader":
  //       return 2;
  //       break;
  //     case "contactHeader":
  //       return 3;
  //       break;
  //     case 0:
  //       return "home";
  //       break;
  //     case 1:
  //       return "about";
  //       break;
  //     case 2:
  //       return "gallery";
  //       break;
  //     case 3:
  //       return "contact";
  //       break;
  //   }
  // }






  render(){
    return (
      <AppContainer>
        <header className="App-header">
          <ButtonsContainer>
            <NavButtonImage onClick={this.flipHandler(0)} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabHomeV2_nazdig.png"></NavButtonImage>
            <div>
              <NavButtonImage onClick={() => {this.flipHandler(1)}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabAboutV2_jxzxiz.png"></NavButtonImage>
              <NavButtonImage onClick={() => {this.flipHandler(2)}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabGalleryV2_q5tbtf.png"></NavButtonImage>
              <NavButtonImage onClick={() => {this.flipHandler(3)}} src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/Portfolio%20Resources/tabContactV2_kj3pe1.png"></NavButtonImage>
            </div>
          </ButtonsContainer>
        </header>
        <PortfolioCase>
          <Page className={this.state.class + ' page'}>
            f
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
const PortfolioCase = styled.div`
  background-color: #f0d38f;
  padding: 10px;
  width: 65%;
  margin: auto;
  height: 43rem;
  perspective:3000px;
  perspective-origin: center;
  backface-visibility:hidden
`
const Page = styled.div`
  background-color: white;
  height: 43rem;
  width: 99%;
  margin: auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: absolute;
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
