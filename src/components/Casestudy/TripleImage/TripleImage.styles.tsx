import styled from "styled-components";
const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};


type StyledTripleContainerProps = {
  color: string;
};

export const StyledTripleImageGrid = styled.div<StyledTripleContainerProps>(
  ({ color }) => `
display: grid;
grid-template-columns: 30% 16px 30% 16px 30%;
height:30vw;
width: 100vw;
justify-content: center;
background-color: ${color};
@media ${device.mobileM} { 
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  grid-template-columns: 100% ;
  grid-template-rows: 200px 16px 200px 16px 200px;
  }
`
);

type StyledImageProps = {
  image: string;
};

export const StyledImageOne = styled.div<StyledImageProps>(
  ({ image }) => `
width: 100%;
grid-column-start: 1;
grid-column-end: 2;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain;

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
grid-column-start: 3;
grid-column-end: 4;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
@media ${device.mobileM} { 
  background-size: 90% auto;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  }
`
);

export const StyledImageThree = styled.div<StyledImageProps>(
  ({ image }) => `
grid-column-start: 5;
grid-column-end: 6;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain;
@media ${device.mobileM} { 
  background-size: 90% auto;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 6;
  }
`
);
