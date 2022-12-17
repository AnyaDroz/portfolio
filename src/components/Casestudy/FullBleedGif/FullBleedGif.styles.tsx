import styled from "styled-components";

type StyledImageProps = {
    image: string,
    width: number, 
    height: number,
  }

export const StyledImage = styled.div<StyledImageProps>(({image, width, height})=>`
margin: auto;
width: ${width}px;
height: ${height}px;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: cover; 
position: relative;
border-radius: 16px;
outline: 5px solid black;
outline-offset: -4px;
`);

type StyledContainerProps = {
  color: string,
}
export const StyledContainer = styled.div<StyledContainerProps>(({color})=>`
    background-color: ${color};
    display: flex;
    height: 40vw;
    justify-content: center;
`);





