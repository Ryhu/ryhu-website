import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
    
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting Name ${name + ' ' + email + ' ' + phone + ' ' + message}`);
  }
  
  return (
    <ContactContainer>
      <PostitsContainer>
        <ContactInputField>
          <form onSubmit={handleSubmit} autocomplete="on">
            <ContactText>Want someone to get some computer stuff done? Email me at Ryanhuuu@gmail.com, or shoot me a message below.</ContactText>
            <Whisper>
              (Which also goes to my email. All roads lead to my email.) 
            </Whisper>
            <LineInput
              type='text'
              name="first"
              onChange={e => setName(e.target.value)}
              autocomplete="name"
              placeholder="Name"
            />
            <LineInput
              type='text'
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
            />
            <LineInput
              type='text'
              onChange={e => setPhone(e.target.value)}
              placeholder="Phone"
            />
            <MessageInput 
              rows="4" 
              onChange={e => setMessage(e.target.value)}
              placeholder="Message"
            ></MessageInput>
            <SendButton>Send</SendButton>
          </form>
        </ContactInputField>

        <BusinessCard>
          <p>
            Ryan Hu
          </p>
          <p>
            Fullstack Web Developer
          </p>
          <p>_________________________________</p>
          <p>
            Angular * React * Ruby on Rails
          </p>


        </BusinessCard>

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

// My contact info: email, number, job title
// a method of emailing me about people who want to contact me
// a method of emailing other people my resume
// links to my resume and my github and codepen

const BusinessCard = styled.div`
  width: 20rem;
  height: 10rem;
  background-color: green;
`

const SendButton = styled.button`
  background-color:transparent;
  border:1px solid #e6e600;
  float:right;
  font-size: 1.1rem;
  margin: 0.3rem 0.3rem 0 0;
  padding: 0 0.3rem 0 0.3rem;
  :hover{
    background-color:blue;
    color:white;
  }
`
const ContactText = styled.span`
  font-size: 1rem;
`

const Whisper = styled.p`
  font-size: .8rem;
  font-style: italic;
`

const LineInput = styled.input`
  background-color:transparent;
  border:1px solid #e6e600;
  font-size: 1.1rem;
  width: 95%;
  margin-bottom:20px;
`

const MessageInput = styled.textarea`
  background-color:transparent;
  border:1px solid #e6e600;
  font-size: 1.1rem;
  width: 95%;
`

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
  padding: 1rem;
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
  margin-left: 10rem;
`

export default Contact