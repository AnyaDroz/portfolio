import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyledGridProps = {
  color: string;
};

export const StyledLayoutGrid = styled.div<StyledGridProps>(
  ({ color }) => `
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 30vw 30vw;
background-color: ${color};
@media ${device.mobileM} {
  grid-template-columns: 100%;
  grid-template-rows: 80vw 80vw 100vw;
}
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
    @media ${device.mobileM} {
      background-size: 90% auto;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 2;
    }
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
    @media ${device.mobileM} {
      background-size: 90% auto;
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 2;
      grid-row-end: 3;
    }
`
);

export const StyledImageThree = styled.div<StyledImageProps>(
  ({ image }) => `
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
    background-image:url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 60px;
    margin-top: 60px; 
    margin-right: 60px; 

    @media ${device.mobileM} {
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 3;
      grid-row-end: 4;
      margin-bottom: 40px;
      margin-top: 0px;
      margin-right: 0px;  
    } 
`
);
