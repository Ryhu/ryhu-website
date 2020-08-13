import React from "react"
import styled from 'styled-components'
import TooltipTrigger from 'react-popper-tooltip';

function Gallery() {
  return (
    <GalleryContainer>
      <ProjectRow>
        <Tooltip placement="top" trigger="click" tooltip={thing}>Click me</Tooltip>
        <Item>
          <Thumbnail href="https://codepen.io/Ryhu/full/eGeXbv/" target="_blank">
            <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/SimonMini_ybnppw.png"></img>
          </Thumbnail>
          <Description>
            Digital version of popular game "Simon", with a hard mode modifier
          </Description>
        </Item>
        <Item>
          <Thumbnail href="https://codepen.io/Ryhu/full/ZJgvMv/" target="_blank">
            <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/PomodoroMini_ka4sfc.png"></img>
          </Thumbnail>
          <Description>
            Pomodoro timer for productivity, capable of switching between break and session timers
          </Description>
        </Item>
      </ProjectRow>
      <ProjectRow>
        <Item>
          <Thumbnail href="https://codepen.io/Ryhu/full/zwmbgp/" target="_blank">
            <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/CalculatorMini_xw27y0.png"></img>
          </Thumbnail>
          <Description>
            Fully functional calculator with a 7 digit display
          </Description>
        </Item>
        <Item>
          <Thumbnail href="https://codepen.io/Ryhu/full/yXdNwE/" target="_blank">
            <img class="pic" src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/TicTacToeMini_pp4uvj.png"></img>
          </Thumbnail>
          <Description>
            Tic-Tac-Toe game, in either single or multi-player mode
          </Description>
        </Item>
      </ProjectRow>
    </GalleryContainer>
  )
};

const thing = (
  <div>
    im a thing
  </div>
);


const Tooltip = ({ tooltip, children, ...props }) => (
  <TooltipTrigger
    {...props}
    tooltip={({
      getTooltipProps,
      getArrowProps,
      tooltipRef,
      arrowRef,
      placement
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip-container'
        })}
      >
        <div
          {...getArrowProps({
            ref: arrowRef,
            'data-placement': placement,
            className: 'tooltip-arrow'
          })}
        />
        {tooltip}
      </div>
    )}
  >
    {({ getTriggerProps, triggerRef }) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger'
        })}
      >
        <div className="tooltip-body">{children}</div>
      </span>
    )}
  </TooltipTrigger>
);


const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

const Description = styled.div`
`

const Thumbnail = styled.a`
`

const ProjectRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
`

export default Gallery