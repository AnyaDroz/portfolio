import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyledImageProps = {
  image: string;
  marginTop: number;
  marginBottom: number;
  fit: string;
  mobileFit: string;
  desktopHeight: string;
  mobileHeight: string;
};

export const StyledImage = styled.div<StyledImageProps>(
  ({ fit, image, marginTop, marginBottom, mobileHeight, mobileFit, desktopHeight }) => `
width: 100vw;
height: ${desktopHeight};
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: ${fit};
position: relative;
margin-top: ${marginTop}px;
margin-bottom: ${marginBottom}px;

@media ${device.mobileM} { 
  height: ${mobileHeight};
  background-size: ${mobileFit};
  }
`
);

type StyledBackgroundProps = {
  color: string;
};

export const StyledContainer = styled.div<StyledBackgroundProps>(
  ({ color }) => `
    background-color: ${color};
    display: flexbox;
    width: 100vw;
    justify-content: center; 
    
    @media ${device.mobileM} { 

    margin: auto;
  }  
`
);
