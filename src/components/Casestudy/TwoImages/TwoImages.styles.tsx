import styled from "styled-components";

type StyledContainerProps ={
    color: string,
}

export const StyledContainerOne = styled.div<StyledContainerProps>(({color})=>`
padding: 40px;
grid-column-start: 1;
grid-column-end: 13;
background-color: ${color};
`);

export const StyledContainerTwo = styled.div<StyledContainerProps>(({color})=>`
padding: 40px;
grid-column-start: 13;
grid-column-end: 25;
background-color: ${color};
`);

type StyledImageProps = {
    image: string,

  }

export const StyledImageOne = styled.div<StyledImageProps>(({image})=>`
margin: auto;
height: 500px;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain; 
position:relative;
`);

export const StyledImageTwo = styled.div<StyledImageProps>(({image})=>`
height: 500px;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain; 
position:relative;
`);


