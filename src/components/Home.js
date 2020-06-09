import React from "react"
import styled from 'styled-components'

function Home() {
  return(
    <div>
      <img style={{verticalAlign: "bottom"}} src="https://res.cloudinary.com/devvqi6h0/image/upload/v1591644755/portfolio%20resources/tabGap2SeeThrough.png"></img>
      <HomeBackground>
        <TitleText >Hu, Ryan</TitleText>
      </HomeBackground>
    </div>
  )
}

const HomeBackground = styled.div`
  background-color: #ffdead;
  height: 40rem;
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
