import styled from "styled-components";

type StyledImageProps = {
    image: string,
  }

export const StyledImage = styled.div<StyledImageProps>(({image})=>`
margin-top: 80px;
width: 588px;
height: 390px;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: cover; 
position:relative;
border-radius: 16px;
outline: 5px solid black;
outline-offset: -4px;
`);

export const StyledContainer = styled.div`
    margin-top: 80px;
    background-color: #F9F9F9;
    display: flex;
    height: 510px;
    justify-content: center;
`;





