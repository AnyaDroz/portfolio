import styled from "styled-components";
import image from "../../../images/ProjectFive.png"

// type StyledImageProps = {
//     image: string,
//   }

// export const StyledImage = styled.div<StyledImageProps>(({image})=>`

// `);

export const StyledImage= styled.div`
grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 1;
grid-row-end: 2; 

background-image:url(image);
background-position: right;
background-repeat: no-repeat;
background-size: contain; 
background-color: #0E407E;
`;