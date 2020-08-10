import React from "react"

function Gallery() {
  return (
    <div>
      <div>
        <a href="https://codepen.io/Ryhu/full/eGeXbv/" target="_blank">
          <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/SimonMini_ybnppw.png"></img>
        </a>
        <div class="textBox one">
          Digital version of popular game "Simon", with a hard mode modifier
        </div>
        <a href="https://codepen.io/Ryhu/full/ZJgvMv/" target="_blank">
          <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/PomodoroMini_ka4sfc.png"></img>
        </a>
        <div class="textBox two">
          Pomodoro timer for productivity, capable of switching between break and session timers
        </div>
      </div>
      <div>
        <a href="https://codepen.io/Ryhu/full/zwmbgp/" target="_blank">
          <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/CalculatorMini_xw27y0.png"></img>
        </a>
        <div class="textBox three">
          Fully functional calculator with a 7 digit display
        </div>
        <a href="https://codepen.io/Ryhu/full/yXdNwE/" target="_blank">
          <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/TicTacToeMini_pp4uvj.png"></img>
        </a>
        <div class="textBox three">
          Tic-Tac-Toe game, in either single or multi-player mode
        </div>
      </div>
    </div>
  )
};

export default Gallery