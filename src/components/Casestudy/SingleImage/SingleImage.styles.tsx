import styled from "styled-components";

const size = {
  mobileM: '425px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`, 
};

type StyledImageProps = {
    image: string,
    marginTop:number,
    marginBottom: number,
    height: number,
    fit: string,
  }

export const StyledImage = styled.div<StyledImageProps>(({fit, image, marginTop, marginBottom, height})=>`
width: 100vw;
height: ${height}px;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: ${fit};
position:relative;
margin-top: ${marginTop}px;
margin-bottom: ${marginBottom}px;

@media ${device.mobileM} { 
    height: 40vw;
    background-size: contain;

  }
`);

type StyledBackgroundProps = {
    color: string,
  }

export const StyledContainer = styled.div<StyledBackgroundProps>(({color})=>`
    background-color: ${color};
    display: flexbox;
    width: 100vw;
    justify-content: center;   
`);



