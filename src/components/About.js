import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faReact } from '@fortawesome/free-brands-svg-icons'
import { faGem, faFileAlt, faHeart } from '@fortawesome/free-solid-svg-icons'

function About() {
  const [tab, setTab] = useState("");

  return (
    <div>

      <div>
        <Title> Ryan Hu</Title>
      </div>

      <IconRow>
        <div className={ "iconButton " + (tab === 'summary' ? 'selected' : '') } onClick={() => {setTab('summary')}}> <FontAwesomeIcon icon={faFileAlt} fixedWidth /> </div>
        <div className={ "iconButton " + (tab === 'heart' ? 'selected' : '') } onClick={() => {setTab('heart')}}> <FontAwesomeIcon icon={faHeart} fixedWidth /> </div>
        <div className={ "iconButton " + (tab === 'angular' ? 'selected' : '') } onClick={() => {setTab('angular')}}> <FontAwesomeIcon icon={faAngular} fixedWidth /> </div>
        <div className={ "iconButton " + (tab === 'react' ? 'selected' : '') } onClick={() => {setTab('react')}}> <FontAwesomeIcon icon={faReact} fixedWidth /> </div>
        <div className={ "iconButton " + (tab === 'ruby' ? 'selected' : '') } onClick={() => {setTab('ruby')}}> <FontAwesomeIcon icon={faGem} fixedWidth /> </div>
      </IconRow>

      <ContentContainer>
        <div className={ (tab === 'summary' ? '' : 'hidden') }>
          <StoryContainer>
            I'm a software engineer based in New York, speciailizing in building websites.
          </StoryContainer>
        </div>
        <div className={ (tab === 'heart' ? '' : 'hidden') }>
          <StoryContainer>
            my love of code stems from a love of automation; my first coding language was neither java or javascript, but autohotkey (C++?).
            At a certain point in my life, I was working in a data entry position. I had to take a (quite literal) room of files, and process them into our legal software. 
            After realizing that the files were available online, I made the gamble that I could probably automate the process so my next few weeks would be much less tedious.
            Writing the macro was no easy work, as there were many variables to consider: download times werent consistant, the computer might lag, and if anything went wrong, I'd need a way to verify if a file was stored properly or not. 
            It was a similiar process to coding, I spent 20% of the time writing the actual thing, and 80% debugging, watching it, and making improvements.
            A week later, after we sent a room full of paper to a shredding service, I realized that I'd pefer this kind of work to whatever i was doing at the time, and applied for a bootcamp.
          </StoryContainer>
        </div>
        <div className={ (tab === 'angular' ? '' : 'hidden') }>
          <StoryContainer>
            <Title>angular</Title>
            The tech stack at my previous job was Angular, on ruby on rails. 
            My experience with Angular mainly consisted of building an administrative website for our app.
            this involved mainly building functionality for the website: various inputs for users to add new data, and various pages to display the new data. 

            Over my time at Altru, I've touched on many technologies, such as route-guards, rxjs, and redux to name a few. 
            I've also added testing to the angular app using Karma + Jasmine.
          </StoryContainer>
        </div>
        <div className={ (tab === 'react' ? '' : 'hidden') }>
          <StoryContainer>
            <Title>react</Title>
            My experience with react stems from both my time at the bootcamp, and my personal projects. In fact, this website is built on react. 
            My experience with react should be shown, not told: just go over to the gallery and explore a couple of my projects!
          </StoryContainer> 
        </div>
        <div className={ (tab === 'ruby' ? '' : 'hidden') }>
          <StoryContainer>
            <Title>ruby on rails</Title>
            My experience with RoR comes from both my previous job and my time at Flatiron.
            During my time at Altru Labs,  I was in charge of adding features to the application, so whatever I did on the front end, I had to support on the back end.
            This involved making new models, data migrations, writing tests with rspecF, basic backend stuff, with an emphesis on writing tests, as every feature i added into the backend was thouroughly tested.
            Apart that, I also worked on an async server, supported by rabbitMQ. Here, I worked on email processing, video processing, and translations. 
          </StoryContainer>
        </div>
      </ContentContainer>

      {/* 
      */}
    </div>
  )
}

const IconRow = styled.div`
  .iconButton{
    display: inline-block;
    border-radius: 5rem;
    cursor: pointer;
    background-color: #f2f2f2;
    
    &.selected{
      background-color: blue;
      color: white;
    }

    :hover{
      background-color: blue;
      color: white;
    }
  }

  svg{
    font-size: 3rem;
    padding: 1rem;
  }
`

const ContentContainer = styled.div`
  background-color: orange;
  font-size: 2rem;
  font-weight: bold;
`

const Title = styled.div`
  background-color: orange;
  font-size: 2rem;
  font-weight: bold;
`

const StoryContainer = styled.div`
  background-color: orange;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 1rem;
`


//goals: 
// short summary

// skills
// explaination of skills

// angular
/*
The tech stack at my previous job was Angular, on ruby on rails. 
My experience with Angular mainly consisted of building an administrative website for our app.
this involved mainly building functionality for the website: various inputs for users to add new data, and various pages to display the new data. 

Over my time at Altru, I've touched on many technologies, such as route-guards, rxjs, and redux to name a few. 
I've also added testing to the angular app using Karma + Jasmine.


// ruby on rails
My experience with RoR comes from both my previous job and my time at Flatiron.
During my time at Altru Labs,  I was in charge of adding features to the application, so whatever I did on the front end, I had to support on the back end.
This involved making new models, data migrations, writing tests with rspecF, basic backend stuff, with an emphesis on writing tests, as every feature i added into the backend was thouroughly tested.
Apart that, I also worked on an async server, supported by rabbitMQ. Here, I worked on email processing, video processing, and translations. 

// react
My experience with react stems from both my time at the bootcamp, and my personal projects. In fact, this website is built on react. 
My experience with react should be shown, not told: just go over to the gallery and explore a couple of my projects!
*/


// Ryan Hu
// I'm a software engineer based in New York, speciailizing in building websites.
/* 
my love of code stems from a love of automation; my first coding language was neither java or javascript, but autohotkey (C++?).
At a certain point in my life, I was working in a data entry position. I had to take a (quite literal) room of files, and process them into our legal software. 
After realizing that the files were available online, I made the gamble that I could probably automate the process so my next few weeks would be much less tedious.
Writing the macro was no easy work, as there were many variables to consider: download times werent consistant, the computer might lag, and if anything went wrong, I'd need a way to verify if a file was stored properly or not. 
It was a similiar process to coding, I spent 20% of the time writing the actual thing, and 80% debugging, watching it, and making improvements.
A week later, after we sent a room full of paper to a shredding service, I realized that I'd pefer this kind of work to whatever i was doing at the time, and applied for a bootcamp.


*/
// 
// https://medium.com/@cgroom/a-software-engineers-one-page-portfolio-4f85ab8a20d1


export default About
