import styled from "styled-components";

type StyledGridProps = {
  color: string;
};

export const StyledLayoutGrid = styled.div<StyledGridProps>(
  ({ color }) => `
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 30vw 30vw;
background-color: ${color};
`
);

type StyledImageProps = {
  image: string;
};

export const StyledImageOne = styled.div<StyledImageProps>(
  ({ image }) => `
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    background-image:url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 40px;
    margin-bottom: 20px;
`
);

export const StyledImageTwo = styled.div<StyledImageProps>(
  ({ image }) => `
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    background-image:url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 40px;
    margin-top: 20px;
`
);

export const StyledImageThree = styled.div<StyledImageProps>(
  ({ image }) => `
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    background-image:url(${image});
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 60px;
    margin-top: 60px;  
`
);
