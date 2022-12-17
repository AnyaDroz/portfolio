import styled from "styled-components";
import ProjectOneInitial from "../../images/ProjectOneInitial.svg"
import ProjectOne from "../../images/ProjectOne.png"



export const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding:10px;
    font-family: TWKLausanneLight;
    font-size: 23px;
    line-height: 140%;
    font-weight: 150;
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
    max-width: 50%;
`

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
  object-fit:cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #F9F9F9;
`;

type StyledImageProps = {
  position: number
}

export const StyledCaseStudyOneActive = styled.div<StyledImageProps>(({position})=>`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${ProjectOne});
  object-fit:cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #2D82D1;
  position:relative;
  clip-path: polygon(0% 0%, 100% 0%, 100% ${position-84}px, 0% ${position-84}px);
`);




export const StyledCaseStudyTwo = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: #F9F9F9;
  display: flex;
  justify-content: flex-end;
`;

export const StyledImageTwo = styled.img`
    max-width:70%;
    margin-top: auto;
    margin-bottom: auto;
`;

export const StyledCaseStudyThree = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    background-color: #F9F9F9;
`;
export const StyledCaseStudyFour = styled.div`
    grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: #F9F9F9;
`;
export const StyledCaseStudyFive= styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  background-color: #F9F9F9;
`;
export const StyledCaseStudySix= styled.div`
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
    font-family: TWKLausanneLight;
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
  position: number
}

export const StyledCursorHorizontal = styled.div<StyledLinedProps>(({position})=>`
 height:1px;
 width: 100%; 
 background-color: red;
 position: absolute;
 top: ${position}px;
 z-index:1;
`);

export const StyledCursorVertical = styled.div`
 height:100vw;
 width: 1px; 
 position: absolute;
 background-color: red;
`;