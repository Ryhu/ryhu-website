import React, { useState } from "react";
import styled from "styled-components";

function HowIGotStartedManilla() {
  const [tab, setTab] = useState("summary");

  return (
    <ManillaMiniPage>
      <AboutTabContentContainer>
        <TextBlockContainer>
          <TextRowLeft>
            <TextBlock>
              As weird as it sounds, I got my start in developing when I was
              working at a small law firm as a paper pusher. At the time, our
              little break-storage-dining room was bursting at the seams with
              decades of paperwork, and while many of our colleagues were still
              using fax machines, we decided it was finally time to step into
              the digital age, and finally be able to eat without getting sauce
              on 1995’s properties sold in Brooklyn (oops). I was chosen for
              sacrifice, put in charge of organizing everything into a more
              centralized repository, since I had recently ‘edited’ some files,
              and was already a ‘seasoned veteran’ at it.
            </TextBlock>
            <StoryImage src="./storyPhotos/breakroom.jpg" />
          </TextRowLeft>
          <TextRowRight>
            <StoryImage src="./storyPhotos/mouseMacros2.jpg" />
            <TextBlock>
              It was pretty tedious work, and at the rate I was going, it would
              have taken me a month to finish all of the work, and I didnt think
              that my brain would last that long. By chance, I came across the
              topic of mouse macros in my free time, and it really got me
              thinking. I had come across the idea before and thought it was
              awesome, but didn’t engage, thinking it was too much work. Now, I
              have a different set of too much work, and couldn't wait to see
              what the macros had to offer.
            </TextBlock>
          </TextRowRight>
          <TextRowLeft>
            <TextBlock>
              The macros really only worked on repeated actions of the exact
              same motions, in the exact same timing, which was exactly what was
              causing my mind to atrophy. It was surprisingly easy to use, and
              the hardest part was the tweaking. What if the file was larger,
              causing load times to be longer? What if the file name was too
              big, causing the clickable area to move? Every little edge case
              caused my little-macro-that-could to stop, and with every change I
              made, I felt more and more confident in my macro, and my abilities
              as something other than a paper pusher. In the end, my macro
              turned a month of work into a week of macro research. I loved
              building it, and I wanted to continue building more things that
              could make everyone's lives easier.
            </TextBlock>
          </TextRowLeft>
        </TextBlockContainer>
      </AboutTabContentContainer>
    </ManillaMiniPage>
  );
}

const TextBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const TextBlock = styled.div`
  box-sizing: border-box;
`;

const TextRowLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  box-sizing: border-box;
`;

const TextRowRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 1rem;
  margin-right: 1rem;
  box-sizing: border-box;
`;

const ManillaMiniPage = styled.div`
  background-color: white;
  min-height: calc(100% - 43px);
  // padding: 2rem;
  // border-radius: 10px;

  padding: 10px 10px 0 10px;
  background-color: #ffd699;
  border-radius: 0.7rem;
  border: 1px solid #ffc266;
  box-sizing: border-box;
`;

const AboutTabContentContainer = styled.div`
  // box-shadow: 2px 2px 5px;
  text-align: left;
  background-color: white;
  box-sizing: border-box;
`;

const StoryImage = styled.img`
  @media screen and (max-width: 640px) and (max-height: 950px) {
    // height: 15vh;
    margin-left: 20vw;
    margin-right: 20vw;
    margin-bottom: 0.5rem;
  }

  //landscape
  @media screen and (max-height: 640px) and (max-width: 950px) {
    width: 20vw;
  }

  //desktop
  @media screen and (min-width: 950px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 19rem;
    height: 12rem;
  }
  box-shadow: grey 5px 5px 3px;
  box-sizing: border-box;
`;

export default HowIGotStartedManilla;
