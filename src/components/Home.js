import React from "react"
import styled from 'styled-components'

function Home() {
  return(
    <>
      <HomeHeaderGap src="https://res.cloudinary.com/devvqi6h0/image/upload/v1591644755/portfolio%20resources/tabGap2SeeThrough.png"></HomeHeaderGap>
      <HomeBackground>
        <TitleText >Hu, Ryan</TitleText>
        <p>website currently under construction, please excuse the mess!</p>
      </HomeBackground>
    </>
  )
}

const HomeHeaderGap = styled.img`
  max-width: 80%;
  vertical-align: bottom;
`

const HomeBackground = styled.div`
  background-color: #ffdead;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const TitleText = styled.div`
  background-color: #ffdead;
  font-size: 6rem;
`

export default Home
