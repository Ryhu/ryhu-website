import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <>
      <HomeWrapper>
        <HomeHeaderGap src="https://res.cloudinary.com/devvqi6h0/image/upload/v1591644755/portfolio%20resources/tabGap2SeeThrough.png"></HomeHeaderGap>
        <HomeContent>
          <TitleText>Hu, Ryan</TitleText>
          <p>website currently under construction, please excuse the mess!</p>
        </HomeContent>
      </HomeWrapper>
    </>
  );
}

const HomeWrapper = styled.div`
  background-color: #ffdead;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const HomeHeaderGap = styled.img`
  width: 100%;
  vertical-align: bottom;
`;

const HomeContent = styled.div`
  // TODO: fix this
  margin-top: 25vh;
  position: relative;
  background-color: #ffdead;
  justify-content: center;
`;

const TitleText = styled.div`
  // animation: 1s ease-out example;

  background-color: #ffdead;
  font-size: 6rem;
`;

export default Home;
