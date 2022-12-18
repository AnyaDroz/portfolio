import styled from "styled-components";

const size = {
  mobileM: '425px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`, 
};

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

@media ${device.mobileM} { 
    margin-top:20px;
    grid-column-start: 1;
    grid-column-end: 25; 
    height: 60vw;
    width: 100%;
}
`);