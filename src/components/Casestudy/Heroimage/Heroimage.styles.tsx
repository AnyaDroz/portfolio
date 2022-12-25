import styled from "styled-components";

const size = {
  mobileM: "760px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

//this is currently in every file ^^ doesn't seem right.

type StyledImageProps = {
  image: string;
  color: string;
  position: string;
  sizeMobile: string;
  sizeDesktop: string;
};

export const StyledImage = styled.div<StyledImageProps>(
  ({ image, color, position, sizeMobile, sizeDesktop }) => `
  height: 500px;
  background-image:url(${image});
  background-position: ${position};
  background-repeat: no-repeat;
  background-size: ${sizeDesktop};
  background-color: ${color};

  
  @media ${device.mobileM} { 
    height: 300px;
    background-size: ${sizeMobile};
  }
`
);

type StyledContainerProps = {
  color: string;
  padding: number;
  paddingMobile: number;
};

export const StyledContainer = styled.div<StyledContainerProps>(
  ({ color, padding, paddingMobile }) => `
  position: relative;
height: 500px;
padding: ${padding}px;
background-color: ${color};


@media ${device.mobileM} { 
  height: 320px;
  padding: ${paddingMobile}px;
}
`
);
