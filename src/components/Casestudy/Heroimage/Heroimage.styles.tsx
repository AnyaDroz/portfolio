import styled from "styled-components";


type StyledImageProps = {
    image: string,
  }

export const StyledImage = styled.div<StyledImageProps>(({image})=>`
grid-column-start: 1;
grid-column-end: 4;
height: 456px;
/* grid-row-start: 1;
grid-row-end: 2;  */
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain; 
background-color: #2D83D1;
`);

