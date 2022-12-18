import styled from "styled-components";

const size = {
  mobileM: '425px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyledImageProps = {
    image: string,
    color: string,
  }

export const StyledImage = styled.div<StyledImageProps>(({image, color})=>`
  height: 456px;
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

