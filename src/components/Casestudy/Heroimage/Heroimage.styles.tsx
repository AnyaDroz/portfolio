import styled from "styled-components";

const size = {
  mobileM: '768px',  
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

//this is currently in every file ^^ doesn't seem right.

type StyledImageProps = {
    image: string,
    color: string,
  }

export const StyledImage = styled.div<StyledImageProps>(({image, color})=>`
  height: 500px;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; 
  background-color: ${color};
  
  @media ${device.mobileM} { 
    height: 80vw;
    background-image:url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 150%; 
    background-color: ${color};
  }
`);

