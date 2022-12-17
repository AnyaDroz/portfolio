import styled from "styled-components";

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



