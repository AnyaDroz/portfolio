import styled from "styled-components";

type StyledImageProps = {
    image: string,
    imageWidth: number,
    imageHeight: number,
  }

export const StyledImage = styled.div<StyledImageProps>(({image, imageWidth, imageHeight})=>`
grid-column-start: 11;
grid-column-end: 24;
height:${imageHeight}px;
width: ${imageWidth}px;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`);