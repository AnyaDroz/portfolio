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

}


export const StyledImage = styled.div<StyledImageProps>(
  ({ image, width, height, marginTop, marginBottom, mobileWidth, mobileHeight , mobileMargin, mobileSize }) => `
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
margin-top: ${marginTop}px;
margin-bottom: ${marginBottom}px;

@media ${device.mobileM} { 
  max-width: ${mobileWidth};
  max-height: ${mobileHeight};
  margin: ${mobileMargin};
  background-size: ${mobileSize};
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
