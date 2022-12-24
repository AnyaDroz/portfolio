import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20vw 20vw 20vw 20vw;
  height: 100%;
  font-family: TWKLausanneLight;
  font-size: 18px;
  line-height: 150%;
`;

export const StyledBulletOne = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const StyledBulletTwo = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;

export const StyledBulletThree = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
`;

export const StyledBulletFour = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;
`;

export const Heading = styled.div`
  font-family: TWKLausanneHeavy;
`;

export const Paragraph = styled.div``;

type StyledImageProps = {
  image: string;
};

export const StyledImage = styled.div<StyledImageProps>(
  ({ image }) => `
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; 
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 5;
  height: 100%;
  width: 100%;
  margin: auto;
`
);
