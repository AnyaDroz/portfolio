import styled from "styled-components";

type StyledTripleContainerProps = {
    color: string,
}


export const StyledTripleImageGrid= styled.div<StyledTripleContainerProps>(({color})=>`
display: grid;
grid-template-columns: 30% 16px 30% 16px 30%;
height:30vw;
width: 100vw;
justify-content: center;
background-color: ${color};
`);

type StyledImageProps = {
    image: string
}

export const StyledImageOne = styled.div<StyledImageProps>(({image})=>`
width: 100%;
grid-column-start: 1;
grid-column-end: 2;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`);

export const StyledImageTwo= styled.div<StyledImageProps>(({image})=>`
grid-column-start: 3;
grid-column-end: 4;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`);

export const StyledImageThree= styled.div<StyledImageProps>(({image})=>`
grid-column-start: 5;
grid-column-end: 6;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`);



