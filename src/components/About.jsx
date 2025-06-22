import React, { useState } from "react";
import styled from "styled-components";
import AboutMeManilla from "./AboutManillas/AboutMeManilla";
import HowIGotStartedManilla from "./AboutManillas/HowIGotStartedManilla";

import "react-popper-tooltip/dist/styles.css";
function About({ status }) {
  // this pops up and resizes the manilla
  const [animateManillaBool, setAnimateManillaBool] = useState(null);

  // this flips the cover off the manilla, after it's expanded
  const [flipperBool, setFlipperBool] = useState(false);

  // this activates/deactives the pge inside the manilla, saving resources
  const [miniManillaVisible, setMiniManillaVisible] = useState(false);

  // the Id of the manilla being viewd
  const [activeManillaId, setActiveManillaId] = useState(null);

  // prevents animation when another is in motion
  const [lockout, setLockout] = useState(false);

  const fireAnimations = (manillaId) => {
    if (!lockout) {
      setActiveManillaId(manillaId);
      if (animateManillaBool == "animate" && activeManillaId === manillaId) {
        unflipAndShrink();
      } else {
        growAndFlip();
      }
    }
  };

  const growAndFlip = () => {
    setLockout(true);

    setAnimateManillaBool("animate");

    setTimeout(() => {
      setMiniManillaVisible(true);
    }, 900);

    setTimeout(() => {
      setFlipperBool(true);
    }, 1100);

    setTimeout(() => {
      setLockout(false);
    }, 1600);
  };

  const unflipAndShrink = () => {
    setFlipperBool(false);
    setLockout(true);

    setTimeout(() => {
      setMiniManillaVisible(false);
    }, 500);

    setTimeout(() => {
      setAnimateManillaBool("");
    }, 500);

    setTimeout(() => {
      setActiveManillaId(null);
    }, 1500);

    setTimeout(() => {
      setLockout(false);
    }, 1600);
  };

  return (
    <AboutWrapper>
      <Drawer>
        <MMSpaceholder>
          <ManillaMiniWrapper
            animate={animateManillaBool}
            lockout={lockout}
            animateAllowed={activeManillaId === 1}
            slightShift={"7px"}
            onClick={() => fireAnimations(1)}>
            <div>
              <NavButtonImage
                draggable="false"
                src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsAbout.png"></NavButtonImage>
            </div>
            <ManillaMiniCover
              className={`${
                activeManillaId === 1 && (flipperBool ? "flip" : "")
              }`}>
              <HomeHeaderGap src="https://res.cloudinary.com/devvqi6h0/image/upload/v1591644755/portfolio%20resources/tabGap2SeeThrough.png"></HomeHeaderGap>
            </ManillaMiniCover>

            {miniManillaVisible && activeManillaId === 1 && (
              <HowIGotStartedManilla />
            )}
          </ManillaMiniWrapper>
        </MMSpaceholder>
        <MMSpaceholder>
          <ManillaMiniWrapper
            animate={animateManillaBool}
            lockout={lockout}
            animateAllowed={activeManillaId === 2}
            slightShift={"2px"}
            onClick={() => fireAnimations(2)}>
            <NavButtonImage
              draggable="false"
              src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsGallery.png"></NavButtonImage>
            <ManillaMiniCover
              className={`${
                activeManillaId === 2 && (flipperBool ? "flip" : "")
              }`}>
              <HomeHeaderGapReversed src="https://res.cloudinary.com/devvqi6h0/image/upload/v1591644755/portfolio%20resources/tabGap2SeeThrough.png"></HomeHeaderGapReversed>
            </ManillaMiniCover>

            {miniManillaVisible && activeManillaId === 2 && <AboutMeManilla />}
          </ManillaMiniWrapper>
        </MMSpaceholder>
        <MMSpaceholder>
          <ManillaMiniWrapper
            animate={animateManillaBool}
            lockout={lockout}
            animateAllowed={activeManillaId === 3}
            onClick={() => fireAnimations(3)}>
            <NavButtonImage
              draggable="false"
              src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsContact.png"></NavButtonImage>
            <ManillaMiniCover
              className={`${
                activeManillaId === 3 && (flipperBool ? "flip" : "")
              }`}>
              <HomeHeaderGap src="https://res.cloudinary.com/devvqi6h0/image/upload/v3591644755/portfolio%20resources/tabGap2SeeThrough.png"></HomeHeaderGap>
            </ManillaMiniCover>

            {miniManillaVisible && activeManillaId === 3 && <AboutMeManilla />}
          </ManillaMiniWrapper>
        </MMSpaceholder>
        <MMSpaceholder>
          <ManillaMiniWrapper
            animate={animateManillaBool}
            lockout={lockout}
            animateAllowed={activeManillaId === 4}
            slightShift={"8px"}
            onClick={() => fireAnimations(4)}>
            <NavButtonImage
              draggable="false"
              src="https://res.cloudinary.com/devvqi6h0/image/upload/v1597780834/portfolio%20resources/portfolioTabsGallery.png"></NavButtonImage>
            <ManillaMiniCover
              className={`${
                activeManillaId === 4 && (flipperBool ? "flip" : "")
              }`}>
              <HomeHeaderGapReversed src="https://res.cloudinary.com/devvqi6h0/image/upload/v1591644755/portfolio%20resources/tabGap2SeeThrough.png"></HomeHeaderGapReversed>
            </ManillaMiniCover>

            {miniManillaVisible && activeManillaId === 4 && <AboutMeManilla />}
          </ManillaMiniWrapper>
        </MMSpaceholder>
      </Drawer>
    </AboutWrapper>
  );
}

// causes manillas to not shift when one is animated
const MMSpaceholder = styled.div`
  width: 800px;
  height: 400px;
  flex-shrink: 0;
  margin-top: -20rem;
`;

// is main container, and is animation target, holds the manilla page, the cover and the tab marker
const ManillaMiniWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  margin-left: ${({ slightShift }) => slightShift};

  ${({ animate, animateAllowed, lockout }) => {
    if (animateAllowed) {
      if (animate == "animate") return `animation: popAndOpen 1s forwards;`;
      else if (animate == "") return `animation: popAndClose 1s forwards;`;
    } else if (!lockout) {
      return `
      &:hover {
        transform: translateY(-30px) rotateX(20deg);
        transition: 0.2s;
      }`;
    }
  }}
  // animation: popAndClose 1s forwards;

  @keyframes popAndOpen {
    0% {
      transform-style: preserve-3d;
      position: relative;
    }

    50% {
      transform-style: preserve-3d;
      position: relative;
      transform: translateY(-180vh);
      z-index: 9;
      height: 75%;
      width: 75%;
    }

    100% {
      transform-style: preserve-3d;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 9;
      left: 0;
      top: 0;
      margin-left: 0;
    }
  }

  @keyframes popAndClose {
    0% {
      transform-style: preserve-3d;
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 9;
      left: 0;
      top: 0;
      margin-left: 0;
    }

    50% {
      transform-style: preserve-3d;
      position: absolute;
      transform: translateY(-200vh);
      z-index: 9;
      height: 75%;
      width: 75%;
    }

    60% {
      transform-style: preserve-3d;
      position: relative;
      transform: translateY(-200vh);
      height: 75%;
      width: 75%;
    }

    100% {
      transform-style: preserve-3d;
      position: relative;
    }
  }
`;

const ManillaMiniCover = styled.div`
  position: absolute;
  background-image: linear-gradient(#ffdead, #eedead);
  // background-color: #ffdead;
  height: 100%;
  width: 100%;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.5s, opacity 0.5s;
  transform-origin: bottom;
  border-radius: 10px;
`;

const Drawer = styled.div`
  // width: 80%;
  height: 600px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 23rem;
  margin-top: -1rem;
`;

const HomeHeaderGap = styled.img`
  width: 100%;
`;

const HomeHeaderGapReversed = styled.img`
  width: 100%;
  transform: scaleX(-1);
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

const AboutWrapper = styled.div`
  height: 100%;
`;

export default About;
