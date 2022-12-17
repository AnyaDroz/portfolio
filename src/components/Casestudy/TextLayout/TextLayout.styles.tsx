import styled from "styled-components";

export const StyledHeading = styled.div`
    font-family:TWKLausanneMedium;
    line-height: 150%;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const StyledTextGrid = styled.div`
margin-top:8px;
display: grid;
grid-template-columns: 50% 50px 50%;
grid-template-rows: 30vw 30vw;
background-color: #f9f9f9;

`;

export const StyledLeftTop= styled.div`
 margin:auto;
    padding: 4%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    width: 70%; 
`;
export const StyledLeftBottom= styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    margin:auto;
    padding: 4%;
    width: 70%;
`;

export const StyledParagraph = styled.div`
    font-family:TWKLausanneLight;
    line-height: 150%;
    font-size: 18px;
    margin-bottom: 20px;
`;


type StyledImageProps = {
image: string,
}

export const StyledImageOne = styled.div<StyledImageProps>(({image})=>`
   grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  margin:auto;
  width: 20px;
  height: 220px;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`);

export const StyledImageTwo = styled.div<StyledImageProps>(({image})=>`
     margin:auto;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  background-image:url(${image});
  width: 20px;
  height: 315px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`);

export const StyledTextSectionLeft = styled.div`
    display: block;
    grid-column-start: 1;
    grid-column-end: 2;
    justify-content: center;

`;



export const StyledTopText = styled.div`
grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    font-family:TWKLausanneMedium;
    line-height: 150%;
    font-size: 18px;
    margin: auto;
    width: 70%;
`;

export const StyledBottomText = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    font-family:TWKLausanneMedium;
    line-height: 150%;
    font-size: 18px;
    margin:auto; 
    width: 70%;
`;


