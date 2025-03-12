import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

class App extends Component {
  constructor() {
    super();

    this.state = {
      disabled: false,
      currentPage: "Home",
      Home: "active",
      About: "hidden",
      Gallery: "hidden",
      Contact: "hidden",
    };
  }

  forward(difference, currentPage, clickedPage) {
    let state = {
      Home: "hidden",
      About: "hidden",
      Gallery: "hidden",
      Contact: "hidden",
    };
    state[clickedPage] = "";
    state[currentPage] = "active flip";
    this.setState(state, console.log(state));
    this.setState({
      [clickedPage]: "active",
      currentPage: clickedPage,
    });

    if (difference > 1) {
      setTimeout(() => {
        this.forward(
          difference - 1,
          clickedPage,
          Pages[Pages.indexOf(clickedPage) + 1]
        );
      }, 500);
    }
  }

  back(difference, currentPage, clickedPage) {
    let state = {
      Home: "hidden",
      About: "hidden",
      Gallery: "hidden",
      Contact: "hidden",
    };
    state[clickedPage] = "active flip";
    state[currentPage] = "";
    this.setState(state);
    setTimeout(() => {
      this.setState({
        [clickedPage]: "active",
        currentPage: clickedPage,
      });
    }, 20);

    if (difference > 1) {
      setTimeout(() => {
        this.back(
          difference - 1,
          clickedPage,
          Pages[Pages.indexOf(clickedPage) - 1]
        );
      }, 520);
    }
  }

  flipHandler(clickedPage) {
    if (!this.state.disabled && clickedPage != this.state.currentPage) {
      let difference =
        Pages.indexOf(this.state.currentPage) - Pages.indexOf(clickedPage);

      if (difference < 0) {
        this.forward(
          Math.abs(difference),
          this.state.currentPage,
          Pages[Pages.indexOf(this.state.currentPage) + 1]
        );
      } else {
        this.back(
          difference,
          this.state.currentPage,
          Pages[Pages.indexOf(this.state.currentPage) - 1]
        );
      }

      this.setState({
        disabled: true,
      });

      setTimeout(() => {
        this.setState({
          disabled: false,
        });
      }, Math.abs(difference) * 520);
    }
  }

  wheelHandler(evt) {
    if (evt.deltaY >= 0) {
      let newPage = Pages[Pages.indexOf(this.state.currentPage) - 1];
      if (newPage) {
        this.flipHandler(newPage);
      }
    } else if (evt.deltaY < 0) {
      let newPage = Pages[Pages.indexOf(this.state.currentPage) + 1];
      if (newPage) {
        this.flipHandler(newPage);
      }
    }
  }

  render() {
    return (
      <AppContainer>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <PortfolioContainer onWheel={(e) => this.wheelHandler(e)}>
          <ButtonsContainer>
            <HomeButtonImage
              onClick={() => {
                this.flipHandler("Home");
              }}
              src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsHome.png"></HomeButtonImage>
            <div>
              <NavButtonImage
                onClick={() => {
                  this.flipHandler("About");
                }}
                src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597779219/portfolio%20resources/portfolioTabsAbout.png"></NavButtonImage>
              <NavButtonImage
                onClick={() => {
                  this.flipHandler("Gallery");
                }}
                src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsGallery.png"></NavButtonImage>
              <NavButtonImage
                onClick={() => {
                  this.flipHandler("Contact");
                }}
                src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsContact.png"></NavButtonImage>
            </div>
          </ButtonsContainer>
          <PortfolioOuterShell>
            <PageContainer>
              <Page className={this.state.Home + " homeCover"}>
                <Home></Home>
              </Page>
              <Page className={this.state.About}>
                <About status={this.state.About}></About>
              </Page>
              <Page className={this.state.Gallery}>
                <Gallery></Gallery>
              </Page>
              <Page className={this.state.Contact}>
                <Contact></Contact>
              </Page>
            </PageContainer>
          </PortfolioOuterShell>
        </PortfolioContainer>
      </AppContainer>
    );
  }
}

const Pages = ["Home", "About", "Gallery", "Contact"];

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (min-width: 600px) {
    height: 100%;
  }
`;

const NavButtonImage = styled.img`
  // TODO: HARD CODED

  width: 70px;
  @media (min-width: 600px) {
    width: 120px;
  }
  @media (min-width: 961px) {
    width: 150px;
  }

  vertical-align: bottom;
`;

const HomeButtonImage = styled.img`
  // TODO: HARD CODED
  width: 145px;

  @media (min-width: 600px) {
    width: 250px;
  }
  @media (min-width: 961px) {
    width: 300px;
  }
  vertical-align: bottom;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0 0.5rem 0 0.5rem;
  width: 100%;

  // :nth-child(n) {
  //   margin: 0;
  //   padding: 0;
  // }

  @media (min-width: 961px) {
    width: 75rem;
  }
`;
const PortfolioOuterShell = styled.div`
  // TODO: FREAKY PADDING, CAUSING THE PUSHES
  position: relative;
  box-sizing: border-box;
  padding: 10px 10px 0 10px;
  background-color: #f0d38f;
  border-radius: 0.7rem;

  height: 90%;
  // height: calc(100% - 40px);
  width: 100%;

  @media (min-width: 600px) {
    height: 100%;
  }

  @media (min-width: 961px) {
    width: 75rem;
    height: 43rem;
  }
`;
const PageContainer = styled.div`
  background-color: #f0d38f;
  margin: auto;
  height: 100%;
  width: 100%;

  perspective: 3000px;
  perspective-origin: center;
  backface-visibility: hidden;
`;
const Page = styled.div`
  background-color: white;
  // height: -webkit-fill-available;
  // height: calc(100% - 40px) !important;
  height: 100% !important;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.5s, opacity 0.5s;
  transform-origin: bottom;

  // @media (min-width:600px) {
  //   height: calc(100% - 44px);
  // }
`;
const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
  background-image: url("./wood_table_background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: black;
  overflow: hidden;
`;

export default App;
