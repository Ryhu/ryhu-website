import React from "react"
import styled from 'styled-components'

function Home() {
  return(
    <div>
      <HomeHeaderGap style={{verticalAlign: "bottom"}} src="https://res.cloudinary.com/devvqi6h0/image/upload/v1591644755/portfolio%20resources/tabGap2SeeThrough.png"></HomeHeaderGap>
      <HomeBackground>
        <TitleText >Hu, Ryan</TitleText>
      </HomeBackground>
    </div>
  )
}

const HomeHeaderGap = styled.img`
  max-width: 80%
`

const HomeBackground = styled.div`
  background-color: #ffdead;
  height: 41rem;
  p {
    margin: 0;
  }

`

const TitleText = styled.div`
  background-color: #ffdead;
  height: 400px;
  p {
    margin: 0;
  }
`

export default Home
