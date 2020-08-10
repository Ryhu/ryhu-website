import React from "react"

function Contact() {
  return (
    <div id="contact" class="sheet">
      <div class="row">
        <div id="contactInputField">
          Name:<input id="nameField" type="text" class="lineInput"></input>
          Email:<input id="emailField" type="text" class="lineInput"></input>
          Phone:<input id="phoneField" type="text" class="lineInput"></input>
          Message:<textarea rows="4" id="messageField" class="messageInput"></textarea>
          <button id="sendButton">send</button>
        </div>

        <div id="contactTextBox">
          If you would like to contact me, please leave a name and either/or a phone number or email. I'll get back to you as soon as possible. If not, feel free to visit my social media sites below!
          <i id="thanks">Thanks!</i>
        </div>
      </div>

      <div id="endBar">
        <i id="author">page created by Ryan Hu</i>
        You can also find me on:

        <a href="https://github.com/" target="_blank"><i class="icon fa fa-github"></i></a>
        <a href="https://www.facebook.com/" target="_blank"><i class="icon fa fa-twitter"></i></a>
        <a href="https://twitter.com/" target="_blank"><i class="icon fa fa-linkedin"></i></a>
      </div>
    </div>
  )
};

export default Contact