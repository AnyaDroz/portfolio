import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledContainerOne = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;

  @media ${device.mobileM} {
    padding: 10px;
    display: block;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export const StyledContainerTwo = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  @media ${device.mobileM} {
    padding: 10px;
    display: block;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

export const StyledContainerThree = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  @media ${device.mobileM} {
    padding: 10px;
    display: block;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

type StyledTripleProps = {
  color: string;
};

export const StyledTripleImageGrid = styled.div<StyledTripleProps>(
  ({ color }) => `
display: grid;
grid-template-columns: 30% 16px 30% 16px 30%;
height:50vh;
width: 100vw;
justify-content: center;
background-color: ${color};

@media ${device.mobileM} { 
  padding-top: 20px;
  grid-template-columns: 100%;
  grid-template-rows: 300px 300px 300px;
  height: 100%;
  width: 100vw;
  }
`
);

type StyledImageProps = {
  image: string;
};

export const StyledImageOne = styled.div<StyledImageProps>(
  ({ image }) => `
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 400px;
width: auto;
@media ${device.mobileM} { 
  background-size: contain;
  height: 200px;
  width: auto;
  }

`
);

export const StyledImageTwo = styled.div<StyledImageProps>(
  ({ image }) => `
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 400px;
width: auto;
@media ${device.mobileM} { 
  background-size: contain;
  height: 200px;
  width: auto;
  }
`
);

export const StyledImageThree = styled.div<StyledImageProps>(
  ({ image }) => `
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 400px;
    width: auto;
    @media ${device.mobileM} { 
      background-size: contain;
      height: 200px;
      width: auto;
      }
`
);

export const StyledCaption = styled.div`
  font-size: 16px;
  width: 100%;
  line-height: 120%;
  margin-top: 20px;
  height: 20px;
`;
