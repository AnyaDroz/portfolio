import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyledImageProps = {
  image: string;
  width: number;
  height: number;
  marginTop: number;
  marginBottom: number;
  mobileWidth: string;
  mobileHeight: string;
  mobileMargin: string;
  mobileSize: string;
  desktopPosition: string;
  desktopSize: string;
  mobilePosition: string;
};

export const StyledImage = styled.div<StyledImageProps>(
  ({
    image,
    desktopSize,
    width,
    height,
    marginTop,
    marginBottom,
    mobileWidth,
    mobileHeight,
    mobileMargin,
    mobileSize,
    desktopPosition,
    mobilePosition,
  }) => `
margin: auto;
width: ${width}px;
height: ${height}px;
background-image:url(${image});
background-position: ${desktopPosition};
background-repeat: no-repeat;
background-size: ${desktopSize};
position: relative;

outline: 1px solid black;
margin-top: ${marginTop}px;
margin-bottom: ${marginBottom}px;

@media ${device.mobileM} { 
  background-size: ${mobileSize};
  max-width: ${mobileWidth};
  max-height: ${mobileHeight};
  margin: ${mobileMargin};
  background-position: ${mobilePosition};

  }
`
);

type StyledContainerProps = {
  color: string;
};
export const StyledContainer = styled.div<StyledContainerProps>(
  ({ color }) => `
    background-color: ${color};
    display: flex;
    justify-content: center;
    

   
`
);
