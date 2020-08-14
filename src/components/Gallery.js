import React from "react"
import styled from 'styled-components'
import TooltipTrigger from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

function Gallery() {
  return (
    <GalleryContainer>
      <ProjectRow>
        <Tooltip placement="bottom" tooltip={SimonDescription}>
          <Thumbnail href="https://codepen.io/Ryhu/full/eGeXbv/" target="_blank">
            <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/SimonMini_ybnppw.png"></img>
          </Thumbnail>
        </Tooltip>
        <Thumbnail href="https://codepen.io/Ryhu/full/ZJgvMv/" target="_blank">
          <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/PomodoroMini_ka4sfc.png"></img>
        </Thumbnail>
        <div>
          Pomodoro timer for productivity, capable of switching between break and session timers
        </div>
      </ProjectRow>
      <ProjectRow>
        <Thumbnail href="https://codepen.io/Ryhu/full/zwmbgp/" target="_blank">
          <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/CalculatorMini_xw27y0.png"></img>
        </Thumbnail>
        <div>
          Fully functional calculator with a 7 digit display
        </div>
        <Thumbnail href="https://codepen.io/Ryhu/full/yXdNwE/" target="_blank">
          <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/TicTacToeMini_pp4uvj.png"></img>
        </Thumbnail>
        <div>
          Tic-Tac-Toe game, in either single or multi-player mode
        </div>
      </ProjectRow>
    </GalleryContainer>
  )
};

const DescriptionPopperTitle = styled.div`
`

const DescriptionPopper = styled.div`
`

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const Thumbnail = styled.a`
`

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const SimonDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
      Digital version of popular game "Simon", with a hard mode modifier
    </DescriptionPopperTitle>

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
          className: 'tooltip-container'
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