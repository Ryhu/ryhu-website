import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {


  // myChangeHandler = (event) => {
  //   this.setState({username: event.target.value});
  // }



  return (
    <ContactContainer>
      <PostitsContainer>
        <ContactInputField>
              {/* <form>
            <h1>Hello {this.state.username}</h1>
            <p>Enter your name:</p>
            <input
              type='text'
              onChange={this.myChangeHandler}
            />
            </form> */}
          Name:<input id="nameField" type="text" class="lineInput"></input>
          Email:<input id="emailField" type="text" class="lineInput"></input>
          Phone:<input id="phoneField" type="text" class="lineInput"></input>
          Message:<textarea rows="4" id="messageField" class="messageInput"></textarea>
          <button id="sendButton">send</button>
        </ContactInputField>








        <ContactTextBox>
          If you would like to contact me, please leave a name and either/or a phone number or email. I'll get back to you as soon as possible. If not, feel free to visit my social media sites below!
          <i id="thanks">Thanks!</i>
        </ContactTextBox>

        <EmailResumeBox>
          If you would like my resume emailed to you, just type in your email below:
        </EmailResumeBox>
      </PostitsContainer>

      <Footer>
        <Author>page created by Ryan Hu</Author>
        <IconsContainer>
          You can also find me on:
          <Icons href="https://github.com/Ryhu/" target="_blank"><FontAwesomeIcon icon={faGithub} /></Icons>
          <Icons href="https://www.linkedin.com/in/ryhu/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Icons>
          <Icons href="https://codepen.io/ryhu" target="_blank"><FontAwesomeIcon icon={faCodepen} /></Icons>
        </IconsContainer>
      </Footer>
    </ContactContainer>
  )
};

// this should include a link to my resume
// a method of emailing me about people who want to contact me
// a method of emailing other people my resume
// links to my resume and my github and codepen



const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const PostitsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
`

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color:green;
`

const Author = styled.p`
  padding-top: 2rem;
  padding-left: 1rem;
  font-style: italic;
`

const IconsContainer = styled.div`
  margin-right: 0.5rem;
`

const Icons = styled.a`
  font-size: 3rem;
  margin: 0.5rem;
  :hover{
    color: green;
  }
`

const ContactInputField = styled.div`
  box-shadow: 2px 2px 5px;
  font-size: 18px;
  background-color:yellow;
  width: 23rem;
  height: 23rem;
  border-right:5px solid #cccc00;
  border-bottom:5px solid #cccc00;
  display: block;
  transition: .5s;
`

const ContactTextBox = styled.div`
  box-shadow: 2px 2px 5px;
  background-color: #1cabe3;
  padding: 1rem;
  width: 23rem;
  height: 23rem;
  font-size: 20px;
  font-weight: bold;
`

const EmailResumeBox = styled.div`
  box-shadow: 2px 2px 5px;
  background-color: #1cabe3;
  padding: 1rem;
  width: 23rem;
  height: 23rem;
  font-size: 20px;
  font-weight: bold;
`


export default Contact