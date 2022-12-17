import styled from "styled-components";


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
`);

