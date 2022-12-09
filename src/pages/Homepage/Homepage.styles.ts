import styled from "styled-components";
import ProjectOneInitial from "../../images/ProjectOneInitial.svg"
import ProjectOne from "../../images/ProjectOne.png"
import ProjectTwoInitial from "../../images/ProjectTwoInitial.svg"
import ProjectTwo from "../../images/ProjectTwo.png"





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
  positionx: number
}

export const StyledCaseStudyOneActive = styled.div<StyledImageProps>(({positiony, positionx})=>`
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
  clip-path: polygon(0% 0%, ${positionx}px 0%, ${positionx}px ${positiony - 70.39}px, 0% ${positiony - 70.39}px);
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

export const StyledCaseStudyTwoActive = styled.div<StyledImageProps>(({positiony, positionx})=>`
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
  clip-path: polygon(0% 0%, ${positionx - 585}px 0%, ${positionx - 585}px ${positiony - 70.39}px, 0% ${positiony - 70.39}px);
`);



export const StyledCaseStudyThreeEmpty = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    background-color: #F9F9F9;
`;
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
 height:1px;
 width: 100%; 
 background-color: red;
 position: absolute;
 top: ${positiony}px;
 z-index:1;
`);


type StyledLinedPropsV = {
  positionx: number
}

export const StyledCursorVertical = styled.div<StyledLinedPropsV>(({positionx})=>`
  height:100vw;
 width: 1px; 
 position: absolute;
 background-color: red;
 left: ${positionx}px;
 z-index:1;
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