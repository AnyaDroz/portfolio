import styled from "styled-components";

export const StyledParagraph = styled.div`
    font-family:TWKLausanneLight;
    line-height: 150%;
    font-size: 23px;
`;

export const StyledParagraphRed = styled.div`
   
    font-family:TWKLausanneHeavy;
    line-height: 150%;
    font-size: 23px;
    color: #FB534A;
    margin-bottom: 20px;
`;

export const StyledHeader = styled.div`
   grid-column-start:2;
    grid-column-end: 10;
    font-family:TWKLausanneMedium;
    line-height: 150%;
    font-size: 14px;
    text-transform: uppercase;
`;

export const StyledTextContainer = styled.div`
   margin-top: 30px;
`;

export const StyledSideContainer = styled.div`
    grid-column-start: 11;
    grid-column-end: 20;
`;

type StyledImageProps = {
    image: string,
    imageWidth: number,
    imageHeight: number,
  }

export const StyledImage = styled.div<StyledImageProps>(({image, imageWidth, imageHeight})=>`
margin-top: 30px;
height:${imageHeight}px;
width: ${imageWidth}px;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain; 

`);