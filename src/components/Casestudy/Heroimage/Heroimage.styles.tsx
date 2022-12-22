import styled from "styled-components";

const size = {
  mobileM: '760px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

//this is currently in every file ^^ doesn't seem right.

type StyledImageProps = {
    image: string,
    color: string,
    position: string,
  }

export const StyledImage = styled.div<StyledImageProps>(({image, color, position})=>`
  height: 500px;
  background-image:url(${image});
  background-position: ${position};
  background-repeat: no-repeat;
  background-size: contain; 
  background-color: ${color};

  
  @media ${device.mobileM} { 
    height: 80vw;
    background-color: ${color};
  }
`);


type StyledContainerProps = {
  color: string,
  padding: number,
}

export const StyledContainer = styled.div<StyledContainerProps>(({color, padding})=>`
height: 500px;
padding: ${padding}px;
background-color: ${color};


@media ${device.mobileM} { 
  height: 80vw;
  background-color: ${color};
}
`);

