import styled from "styled-components";
import ProjectOneInitial from "../../images/ProjectOneInitial.svg"
import ProjectOne from "../../images/ProjectOne.png"
import ProjectTwoInitial from "../../images/ProjectTwoInitial.svg"
import ProjectTwo from "../../images/ProjectTwo.png"
import ProjectThreeInitial from "../../images/ProjectThreeInitial.svg"
import ProjectThree from "../../images/ProjectThree.png"


export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: [first] 50% [second] 8px [last] 50%;
  grid-template-rows: [first] 664px [line2] 8px [line3] 664px [line4] 8px [line5] 664px [line6] 8px;
`;

export const StyledCaseStudyOneEmpty = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${ProjectOneInitial});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #F9F9F9;
`;

type StyledImageProps = {
  positiony: number,
  positionx: number,
  introHeight: number,
}

export const StyledCaseStudyOneActive = styled.div<StyledImageProps>(({positiony, positionx, introHeight})=>`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${ProjectOne});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #2D82D1;
  position:relative;
  clip-path: polygon(0% 0%, ${positionx}px 0%, ${positionx}px ${positiony - introHeight}px, 0% ${positiony - introHeight}px);
`);

export const StyledCaseStudyTwoEmpty = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${ProjectTwoInitial});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #F9F9F9;
`;

type StyledImageTwoProps = {
  positiony: number,
  positionx: number,
  differenceWidth: number,
  introHeight: number
}

export const StyledCaseStudyTwoActive = styled.div<StyledImageTwoProps>(({differenceWidth, positiony, positionx, introHeight})=>`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${ProjectTwo});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #0E407E;
  position:relative;
  clip-path: polygon(0% 0%, ${positionx - differenceWidth - 8}px 0%, ${positionx - differenceWidth - 8}px ${positiony - introHeight}px, 0% ${positiony - introHeight}px);
`);

export const StyledCaseStudyThreeEmpty = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: #F9F9F9;
  background-image:url(${ProjectThreeInitial});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
`;

type StyledImageThreeProps = {
  positiony: number,
  positionx: number,
  differenceHeight: number,
  introHeight: number
}

export const StyledCaseStudyThreeActive = styled.div<StyledImageThreeProps>(({positiony, positionx, differenceHeight, introHeight})=>`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background-image:url(${ProjectThree});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #33885B;
  position:relative;
  clip-path: polygon(0% 0%, ${positionx}px 0%, ${positionx}px ${positiony - differenceHeight - introHeight - 8}px, 0% ${positiony - differenceHeight - introHeight - 8}px);
`);

export const StyledCaseStudyFourEmpty = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: #F9F9F9;
`;
export const StyledCaseStudyFiveEmpty= styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  background-color: #F9F9F9;
`;

export const StyledCaseStudySixEmpty= styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  background-color: #F9F9F9;
`;

export const StyledMainContent = styled.div`
  overflow-y: scroll;
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px; 
  padding-left: 8px;
  padding-right: 8px;
  font-family:TWKLausanneLight;
  font-size: 23px;
  font-weight: 150;
  
`;

export const StyledFooterItemTwo = styled.div` 
`;

export const StyledFooterItemOne = styled.div`
`;

export const StyledFooterItemThree = styled.div`   
`;

export const StyledFooterItemFour = styled.div`
`;

type StyledLinedProps = {
  positiony: number
}

export const StyledCursorHorizontal = styled.div<StyledLinedProps>(({positiony})=>`
  height: 1px;
  width: 100%; 
  background-color: red;
  position: absolute;
  top: ${positiony}px;
  z-index:1;
  pointer-events: none; 
`);


type StyledLinedPropsV = {
  positionx: number,
  offset: number
}

export const StyledCursorVertical = styled.div<StyledLinedPropsV>(({positionx, offset})=>`
  top: ${offset}px;
  height:100vh;
  width: 1px; 
  position: absolute;
  background-color: red;
  left: ${positionx}px;
  z-index:1;
  pointer-events: none; 
`);



export const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding:10px;
    font-family:TWKLausanneLight;
    font-size: 18px;
    line-height: 140%;
`;

export const StyledNavItems = styled.div`
    display: flex;
    justify-content: space-between;
    gap:80px;
`;


export const StyledNavItemOne = styled.div`
`;

export const StyledNavItemTwo = styled.div`

`;

export const StyledNavItemThree = styled.div`
`;

export const StyledIntro= styled.div`
    max-width: 40%;
`