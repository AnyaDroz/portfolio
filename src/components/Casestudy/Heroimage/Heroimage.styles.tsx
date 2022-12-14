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
  imageMobile: string;
};

export const StyledImage = styled.div<StyledImageProps>(
  ({ image, color, position, sizeMobile, sizeDesktop, imageMobile }) => `
  height: 500px;
  background-image:url(${image});
  background-position: ${position};
  background-repeat: no-repeat;
  background-size: ${sizeDesktop};
  background-color: ${color};

  
  @media ${device.mobileM} { 
    height: 300px;
    background-size: ${sizeMobile};
    background-image:url(${imageMobile});
  }
`
);

type StyledContainerProps = {
  color: string;
  paddingTop: number;
  paddingMobile: number;
  paddingBottom: number;
};

export const StyledContainer = styled.div<StyledContainerProps>(
  ({ color, paddingTop, paddingMobile, paddingBottom }) => `
  position: relative;
height: 500px;
padding-top: ${paddingTop}px;
padding-bottom: ${paddingBottom}px;
background-color: ${color};


@media ${device.mobileM} { 
  height: 320px;
  padding-left: ${paddingMobile}px;
  padding-right: ${paddingMobile}px;
  padding-bottom: 0px;
  padding-top: 10px;
}
`
);
