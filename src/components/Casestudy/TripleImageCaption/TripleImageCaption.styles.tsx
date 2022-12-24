import styled from "styled-components";

export const StyledContainerOne = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
`;

export const StyledContainerTwo = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
`;

export const StyledContainerThree = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
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
`
);

export const StyledCaption = styled.div``;
