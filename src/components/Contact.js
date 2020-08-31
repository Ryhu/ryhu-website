import React, { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faCodepen, faLinkedin, faAngular, faReact } from '@fortawesome/free-brands-svg-icons'
import { faGem, faHome, faPhoneAlt, faPortrait, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sendEmail, setSendEmail] = useState("");
    
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`feature not live yet!`);
      // alert(`Submitting Name ${name + ' ' + email + ' ' + phone + ' ' + message}`);
  }

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1kkJnJU-95UgH6Di-0WpkLkPxO2WOYfvr/view?usp=sharing', '_blank');
  }
  
  return (
    <ContactContainer>
      <PostitsContainer>
        <Column>
          <BusinessCard>
            <BusinessCardHeader>
              <Bracket>{'{'}</Bracket>
              <NameAndTitle>
                <span id="name">
                  Ryan Hu
                </span>
                <br />
                <span id="title">
                  Fullstack Web Developer
                </span>
              </NameAndTitle>
              <Bracket>{'}'}</Bracket>
            </BusinessCardHeader>
            <BusinessCardBody>
              <span id="line">____________________________________________</span>
              <p id="languages">
                <FontAwesomeIcon icon={faReact} />
                React 
                <FontAwesomeIcon icon={faAngular} />
                Angular 
                <FontAwesomeIcon icon={faGem} />
                Ruby on Rails
              </p>

              {/* faHome, faPhoneAlt, faPortrait, faEnvelope */}
              <BusinessCardContacts>
                <div className="contact">
                  <div className="row"> <FontAwesomeIcon icon={faPhoneAlt} /> (646) 251 1209 </div>
                  <div className="row"> <FontAwesomeIcon icon={faEnvelope} /> ryanhuuu@gmail.com </div>
                </div>
                <div className="contact">
                  <div className="rowReverse"> New York, NY <FontAwesomeIcon icon={faHome} /> </div>
                  <div className="rowReverse tinyPush"> www.ryhu.info <FontAwesomeIcon icon={faPortrait} /></div>
                </div>
              </BusinessCardContacts>
            </BusinessCardBody>
          </BusinessCard>
          <Row>
            <EmailResumeBox>
              If you would like my resume emailed to you, just type in your email below:
              <SendEmailLineInput
                type='text'
                onChange={e => setSendEmail(e.target.value)}
                placeholder="Your Email"
              />
            </EmailResumeBox>
            <MyResumeBox>
              <div className="resumeBorder" onClick={openResume}>
                <FontAwesomeIcon icon={faFilePdf} />
                <p>Resume</p>
              </div>
            </MyResumeBox>
          </Row>
        </Column>

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
              autocomplete="email"
              placeholder="Email"
            />
            <LineInput
              type='text'
              onChange={e => setPhone(e.target.value)}
              autocomplete="phone"
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

const BusinessCardContacts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .contact{
    display: flex;
    flex-direction: column;


    .row{
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: right;
      padding: 1.2rem 0 0 0.9rem;
    }

    .rowReverse{
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: right;
      justify-content: flex-end;
      padding: 1.2rem 0.9rem 0 0;
    }

    .tinyPush{
      margin-right: 0.18rem;
    }
  }

  svg{
    margin: 0 .4rem 0 .4rem;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const BusinessCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #line{
    margin-top: -1.3rem;
  }

  #languages{
    margin: 0.3rem 0 0 0;
  }

  svg{
    margin: 0 .6rem 0 .6rem;
  }
`

const BusinessCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Bracket = styled.span`
  font-size: 7rem;
  margin: -1.5rem 1rem 0 1rem;
`

const NameAndTitle = styled.div`
  padding-bottom: .5rem;
  #name{
    font-size: 3rem;
  }

  #title{
    font-size: 1rem;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`

const BusinessCard = styled.div`
  width: 28rem;
  height: 16rem;
  background-color: #f8f2e4;
  box-shadow: 1px 1px 3px;
`

const MyResumeBox = styled.div`
  box-shadow: 2px 2px 5px;
  background-color: #fea444;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  margin-left: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  :hover{
    cursor: pointer;
  }

  .resumeBorder{
    border: 5px solid #feb144;
    border-style: outset;

    :hover{
      cursor: pointer;
      border-style: inset;
      background-color:  #fe9c34;
    }

    svg{
      margin-top: 1rem;
      font-size 4rem;
    }
  
    p{
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: .7rem;
    }
  }

`

const EmailResumeBox = styled.div`
  box-shadow: 2px 2px 5px;
  background-color: #1cabe3;
  padding: 1rem;
  width: 23rem;
  height: 10rem;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
  font-weight: bold;
`

const Whisper = styled.p`
  font-size: .8rem;
  font-style: italic;
`

const SendEmailLineInput = styled.input`
  background-color:transparent;
  border:1px solid #199acc;
  font-size: 1.3rem;
  margin-top:20px;
  width: 100%;
  width: 95%;
  padding: 0.2rem;
`

const LineInput = styled.input`
  background-color:transparent;
  border:1px solid #e6e600;
  font-size: 1.1rem;
  width: 95%;
  margin-bottom:20px;
  padding: 0.2rem;
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
  height: 100%;
  justify-content: space-around;
  align-items: center;
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
  height: 24rem;
  border-right:5px solid #cccc00;
  border-bottom:5px solid #cccc00;
  display: block;
  padding: 1rem;
  transition: .5s;
`

export default Contact