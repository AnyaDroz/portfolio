import styled from "styled-components";
import ProjectOneInitial from "../../images/ProjectOneInitial.png";
import ProjectOne from "../../images/ProjectOne.png";
import ProjectTwoInitial from "../../images/ProjectTwoInitial.png";
import ProjectTwo from "../../images/ProjectTwo.png";
import ProjectThreeInitial from "../../images/ProjectThreeInitial.png";
import ProjectThree from "../../images/ProjectThree.png";
import ProjectFour from "../../images/ProjectFour.png";
import ProjectFourInitial from "../../images/ProjectFourInitial.png";
import ProjectFiveInitial from "../../images/ProjectFiveInitial.png";
import ProjectFive from "../../images/ProjectFive.png";
import ProjectSix from "../../images/ProjectSix.png";
import ProjectSixInitial from "../../images/ProjectSixInitial.png";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: [first] 50% [second] 8px [last] 50%;
  grid-template-rows: [first] 664px [line2] 8px [line3] 664px [line4] 8px [line5] 664px [line6] 8px;

  @media ${device.mobileM} {
    margin-top: 150px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 400px 8px 400px 8px 400px 8px 400px 8px 400px 8px 400px 8px;
    margin-bottom: 496px;
  }
`;

export const StyledCaseStudyOneEmpty = styled.div`
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image: url(${ProjectOneInitial});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f9f9f9;
  @media ${device.mobileM} {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

type StyledImageProps = {
  positionY: number;
  positionX: number;
  introHeight: number;
  offset: number;
};

export const StyledCaseStudyOneActive = styled.div<StyledImageProps>(
  ({ positionY, positionX, introHeight, offset }) => `
   cursor: pointer;
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
  cursor: pointer;
  clip-path: polygon(0% 0%, ${positionX}px 0%, ${positionX}px ${
    positionY + offset - introHeight
  }px, 0% ${positionY + offset - introHeight}px);

  @media ${device.mobileM} { 
    clip-path: polygon(0% 0%, 100% 0%, 100% ${offset}px, 0% ${offset}px);
  
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  
  }

`
);

export const StyledCaseStudyTwoEmpty = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  cursor: pointer;
  background-image: url(${ProjectTwoInitial});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f9f9f9;
  @media ${device.mobileM} {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

type StyledImageTwoProps = {
  positionY: number;
  positionX: number;
  differenceWidth: number;
  introHeight: number;
  offset: number;
};

export const StyledCaseStudyTwoActive = styled.div<StyledImageTwoProps>(
  ({ differenceWidth, offset, positionY, positionX, introHeight }) => `
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  cursor: pointer;
  background-image:url(${ProjectTwo});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #0E407E;
  position:relative;
  clip-path: polygon(0% 0%, ${positionX - differenceWidth - 8}px 0%, ${
    positionX - differenceWidth - 8
  }px ${positionY + offset - introHeight}px, 0% ${
    positionY + offset - introHeight
  }px);

   @media ${device.mobileM} {
   clip-path: polygon(0% 0%, 100% 0%, 100% ${offset - 408}px, 0% ${
    offset - 408
  }px);
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 3;
    grid-row-end: 4;
  }


`
);

export const StyledCaseStudyThreeEmpty = styled.div`
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: #f9f9f9;
  background-image: url(${ProjectThreeInitial});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${device.mobileM} {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;

type StyledImageThreeProps = {
  positionY: number;
  positionX: number;
  differenceHeight: number;
  introHeight: number;
  offset: number;
};

export const StyledCaseStudyThreeActive = styled.div<StyledImageThreeProps>(
  ({ positionY, positionX, differenceHeight, introHeight, offset }) => `
  cursor: pointer;
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
  clip-path: polygon(0% 0%, ${positionX}px 0%, ${positionX}px ${
    positionY + offset - differenceHeight - introHeight - 8
  }px, 0% ${positionY + offset - differenceHeight - introHeight - 8}px);
  
  @media ${device.mobileM} { 
  
    clip-path: polygon(0% 0%, 100% 0%, 100% ${offset - 816}px, 0% ${
    offset - 816
  }px);
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 5;
    grid-row-end: 6;

  }

`
);

export const StyledCaseStudyFourEmpty = styled.div`
  cursor: pointer;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-color: #f9f9f9;
  background-image: url(${ProjectFourInitial});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${device.mobileM} {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 7;
    grid-row-end: 8;
  }
`;

type StyledImageFourProps = {
  positionY: number;
  positionX: number;
  differenceWidth: number;
  introHeight: number;
  differenceHeight: number;
  offset: number;
};

export const StyledCaseStudyFourActive = styled.div<StyledImageFourProps>(
  ({
    positionY,
    positionX,
    offset,
    differenceWidth,
    introHeight,
    differenceHeight,
  }) => `
  cursor: pointer;
  cursor: pointer;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-image:url(${ProjectFour});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #FFCC3D;
  position:relative;
  clip-path: polygon(0% 0%, ${positionX}px 0%, ${
    positionX - differenceWidth - 8
  }px 0%, ${positionX - differenceWidth - 8}px ${
    positionY + offset - differenceHeight - introHeight - 8
  }px, 0% ${positionY + offset - differenceHeight - introHeight - 8}px);
@media ${device.mobileM} {
clip-path: polygon(0% 0%, 100% 0%, 100% ${offset - 1224}px, 0% ${
    offset - 1224
  }px);
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 7;
    grid-row-end: 8;
    
  }

`
);

export const StyledCaseStudyFiveEmpty = styled.div`
  cursor: pointer;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  background-color: #f9f9f9;
  background-image: url(${ProjectFiveInitial});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${device.mobileM} {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 9;
    grid-row-end: 10;
  }
`;

type StyledImageFiveProps = {
  positionY: number;
  positionX: number;
  differenceWidth: number;
  introHeight: number;
  differenceHeight: number;
  offset: number;
};

export const StyledCaseStudyFiveActive = styled.div<StyledImageFiveProps>(
  ({
    positionY,
    positionX,
    differenceWidth,
    offset,
    introHeight,
    differenceHeight,
  }) => `
  cursor: pointer;
 grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  background-image:url(${ProjectFive});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #E29FBB;
  position: relative;
  clip-path: polygon(0% 0%, ${positionX}px 0%, ${positionX}px 0%, ${positionX}px ${
    positionY + offset - 2 * differenceHeight - introHeight - 16
  }px, 0% ${positionY + offset - 2 * differenceHeight - introHeight - 16}px);
@media ${device.mobileM} {
clip-path: polygon(0% 0%, 100% 0%, 100% ${offset - 1224 - 408}px, 0% ${
    offset - 1224 - 408
  }px);
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 9;
    grid-row-end: 10;
  }


`
);

export const StyledCaseStudySixEmpty = styled.div`
  cursor: pointer;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  background-color: #f9f9f9;
  background-image: url(${ProjectSixInitial});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${device.mobileM} {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 11;
    grid-row-end: 12;
  }
`;

type StyledImageSixProps = {
  positionY: number;
  positionX: number;
  differenceWidth: number;
  introHeight: number;
  differenceHeight: number;
  offset: number;
};

export const StyledCaseStudySixActive = styled.div<StyledImageSixProps>(
  ({
    positionY,
    offset,
    positionX,
    differenceWidth,
    introHeight,
    differenceHeight,
  }) => `
  cursor: pointer;
 grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 5;
  grid-row-end: 6;
  background-image:url(${ProjectSix});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #141414;
  position: relative;
  clip-path: polygon(0% 0%, ${positionX}px 0%, ${
    positionX - differenceWidth - 8
  }px 0%, ${positionX - differenceWidth - 8}px ${
    positionY + offset - 2 * differenceHeight - introHeight - 16
  }px, 0% ${positionY + offset - 2 * differenceHeight - introHeight - 16}px);
 @media ${device.mobileM} {
 clip-path: polygon(0% 0%, 100% 0%, 100% ${offset - 1224 - 408 - 408}px, 0% ${
    offset - 1224 - 408 - 408
  }px);
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 11;
    grid-row-end: 12;
  }

`
);

export const StyledMainContent = styled.div`
  position: relative;
`;

export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  font-family: TWKLausanneLight;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 150;
`;

export const StyledContainerLogo = styled.div`
  display: flexbox;
  @media ${device.mobileM} {
    display: block;
    margin-bottom: 15px;
    margin-top: 5px;
  }
`;

type StyledLinedProps = {
  positionY: number;
  offset: number;
  introHeight: number;
};

export const StyledCursorHorizontal = styled.div<StyledLinedProps>(
  ({ positionY, offset, introHeight }) => `
  height: 1px;
  width: 100%; 
  background-color: red;
  position: absolute;
  top: ${positionY + offset}px;
  z-index:1;
  pointer-events: none; 
  
  @media ${device.mobileM} {
    top: ${offset + introHeight + 150}px;
    touch-action: none;
  }
  
  
`
);

type StyledLinedPropsV = {
  positionX: number;
  offset: number;
};

export const StyledCursorVertical = styled.div<StyledLinedPropsV>(
  ({ positionX, offset }) => `
  top: 0;
  bottom:0;
  height: 100%;
  width: 1px; 
  position: absolute;
  background-color: red;
  left: ${positionX}px;
  z-index:1;
  pointer-events: none; 
  @media ${device.mobileM} { 
    display: none;
    touch-action: none;
   
  }
`
);

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-family: TWKLausanneLight;
  font-size: 18px;
  line-height: 140%;
  height: 20px;

  @media ${device.mobileM} {
    flex-flow: column;
    justify-content: flex-start;
    height: auto;
  }
`;

export const StyledNavItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  a {
    color: black;
    :hover {
      color: blue;
    }
  }

  @media ${device.mobileM} {
    flex-flow: column;
    gap: 5px;
  }
`;

export const StyledNavItem = styled.div`
  @media ${device.mobileM} {
    margin-top: 10px;
  }
`;

export const StyledIntro = styled.div`
  max-width: 100%;
  margin-left: 16px;
  gap: 15px;

  @media ${device.mobileM} {
    max-width: 100%;
    margin-left: 0px;
  }
`;
