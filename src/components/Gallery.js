import React from "react"
import styled from 'styled-components'
import TooltipTrigger from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

function Gallery() {
  return (
    <GalleryContainer>
      <div>
        <GalleryTitle>Gallery</GalleryTitle>
        <p>Mouse over the images to get more details, click to see a live demo</p>
      </div>
      <GalleryImages>
        <ProjectRow>
          <Tooltip placement="bottom" tooltip={SimonDescription} delayShow='150'>
            <Thumbnail href="https://codepen.io/Ryhu/full/eGeXbv/" target="_blank">
              <ThumbnailImage src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/SimonMini_ybnppw.png"></ThumbnailImage>
            </Thumbnail>
          </Tooltip>
          <Tooltip placement="bottom" tooltip={PomodoroDescription} delayShow='150'>
            <Thumbnail href="https://codepen.io/Ryhu/full/ZJgvMv/" target="_blank">
              <ThumbnailImage src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/PomodoroMini_ka4sfc.png"></ThumbnailImage>
            </Thumbnail>
          </Tooltip>
        </ProjectRow>
        <ProjectRow>
          <Tooltip placement="top" tooltip={CalculatorDescription} delayShow='150'>
            <Thumbnail href="https://codepen.io/Ryhu/full/zwmbgp/" target="_blank">
              <ThumbnailImage src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/CalculatorMini_xw27y0.png"></ThumbnailImage>
            </Thumbnail>
          </Tooltip>
          <Tooltip placement="top" tooltip={TicTacToeDescription} delayShow='150'>
            <Thumbnail href="https://codepen.io/Ryhu/full/yXdNwE/" target="_blank">
              <ThumbnailImage src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/TicTacToeMini_pp4uvj.png"></ThumbnailImage>
            </Thumbnail>
          </Tooltip>
        </ProjectRow>
      </GalleryImages>
    </GalleryContainer>
  )
};

const GalleryTitle = styled.p`
  margin-top: .7rem;
  margin-bottom: 0rem;
  font-size: 1.5rem;
  font-weight: bold;
`

const ThumbnailImage = styled.img`
  box-shadow: grey 5px 5px 3px;
`

const DescriptionPopperTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: .5rem;
  margin-top: -.5rem;
`

const DescriptionPopper = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  max-width: 26rem;
`

const GalleryContainer = styled.div`
  height: 100%;
`

const GalleryImages = styled.div`
  display: relative;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const Thumbnail = styled.a`
  height: 100%;
`

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 3rem;

  .tooltip-container{
    border-width: 1rem;
  }
`

const SimonDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
      Simon
    </DescriptionPopperTitle>
    <p>A digital version of popular game "Simon". </p>
    <p>The game lights up colors in a sequence, and the player repeats the sequence to the machine, winning after 20 rounds of progressively harder sequences.</p>
    <p>Game can be turned on or off at will, and includes an option to turn on "strict mode", where one error will return the player back to the first step, instead of restarting the current step.</p>
    <p>Also makes beep-boop noises if you're into that kind of thing.</p>
  </DescriptionPopper>
);

const PomodoroDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
      Pomodoro Clock
    </DescriptionPopperTitle>
    <p>A Pomodoro(Italian for tomato) timer for productivity, switching between periods of work and rest, based on the Pomodoro method.</p>
    <p>By default, switches between 25 minutes of work, and 5 minutes of rest, but that can be customized using the easy-to-use interface. </p>
    <p>Does not resemble a tomato in any way.</p>
  </DescriptionPopper>
);

const CalculatorDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
      Calculator
    </DescriptionPopperTitle>
    <p>A fully functional calculator modeled after one of those old-timey desktop calculators(Do people still use those?)</p>
    <p>All the classic functions are there, addition, subtraction, multiplication, division, it's even got that new-fangled back button!</p>
  </DescriptionPopper>
);

const TicTacToeDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
      Tic-Tac-Toe
    </DescriptionPopperTitle>
    <p> A typical Tic-Tac-Toe game, done in JS and JQuery. </p>
    <p> Playable in either single or two player modes, against either an AI or another human player.</p>
    <p> The AI isnt perfect, is programmed to make mistakes from time to time to allow player to win. </p>
    <p> Will definitely stick to an animation library the next time I make something like this. </p>
  </DescriptionPopper>
);




const Tooltip = ({children, tooltip, hideArrow, ...props}) => (
  <TooltipTrigger
    {...props}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip-container',
        })}
      >
        {!hideArrow && (
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: 'tooltip-arrow',
              'data-placement': placement
            })}
          />
        )}
        {tooltip}
      </div>
    )}
  >
    {({getTriggerProps, triggerRef}) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger'
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
);


export default Gallery