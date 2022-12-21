import styled from "styled-components";

const size = {
  mobileM: '768px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`, 
};

type StyledImageProps = {
    image: string,
    width: number, 
    height: number,
    marginTop: number,
    marginBottom: number
  }

export const StyledImage = styled.div<StyledImageProps>(({image, width, height, marginTop, marginBottom})=>`
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
  width: ${width * 0.5}px;
height: ${height * 0.5}px;
  }
`);

type StyledContainerProps = {
  color: string,
}
export const StyledContainer = styled.div<StyledContainerProps>(({color})=>`
    background-color: ${color};
    display: flex;
    justify-content: center;
`);





