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
            <ThumbnailImage src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/SimonMini_ybnppw.png"></ThumbnailImage>
          </Thumbnail>
        </Tooltip>
        <Tooltip placement="bottom" tooltip={PomodoroDescription}>
          <Thumbnail href="https://codepen.io/Ryhu/full/ZJgvMv/" target="_blank">
            <ThumbnailImage src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/PomodoroMini_ka4sfc.png"></ThumbnailImage>
          </Thumbnail>
        </Tooltip>
      </ProjectRow>
      <ProjectRow>
        <Tooltip placement="top" tooltip={CalculatorDescription}>
          <Thumbnail href="https://codepen.io/Ryhu/full/zwmbgp/" target="_blank">
            <ThumbnailImage src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/CalculatorMini_xw27y0.png"></ThumbnailImage>
          </Thumbnail>
        </Tooltip>
        <Tooltip placement="top" tooltip={TicTacToeDescription}>
          <Thumbnail href="https://codepen.io/Ryhu/full/yXdNwE/" target="_blank">
            <ThumbnailImage src="http://res.cloudinary.com/devvqi6h0/image/upload/v1512596651/minis/TicTacToeMini_pp4uvj.png"></ThumbnailImage>
          </Thumbnail>
        </Tooltip>
      </ProjectRow>
    </GalleryContainer>
  )
};

// style={{transform: "rotate(2deg)"}}

const ThumbnailImage = styled.img`
  box-shadow: grey 5px 5px 3px;
`

const DescriptionPopperTitle = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: .5rem;
  margin-top: -.5rem;

`

const DescriptionPopperText = styled.div`
`

const DescriptionPopper = styled.div`
  padding: 1rem;
`

const GalleryContainer = styled.div`
  display: flex;
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
`

const SimonDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
      Simon
    </DescriptionPopperTitle>
    <DescriptionPopperText>
      Digital version of popular game "Simon", with a hard mode modifier
    </DescriptionPopperText>

  </DescriptionPopper>
);

const PomodoroDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
    Pomodoro timer for productivity, capable of switching between break and session timers
    </DescriptionPopperTitle>
  </DescriptionPopper>
);


const CalculatorDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
      Fully functional calculator with a 7 digit display
    </DescriptionPopperTitle>
  </DescriptionPopper>
);


const TicTacToeDescription = (
  <DescriptionPopper>
    <DescriptionPopperTitle>
      Tic-Tac-Toe game, in either single or multi-player mode
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