import styled from "styled-components";

type StyleGridProps = {
  color: string;
};

export const StyledGrid = styled.div<StyleGridProps>(
  ({ color }) => `
padding: 50px;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 30vw 30vw;
background-color: ${color};
`
);

export const StyledGridItemOne = styled.div`
  display: inline;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const StyledGridItemTwo = styled.div`
  display: inline;
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const StyledGridItemThree = styled.div`
  display: inline;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
`;
export const StyledGridItemFour = styled.div`
  display: inline;
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
`;
export const StyledCaption = styled.div`
  margin-top: 20px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-family: TWKLausanneLight;
  font-size: 18px;
  line-height: 150%;
`;

type StyledImageProps = {
  image: string;
};

export const StyledImage = styled.div<StyledImageProps>(
  ({ image }) => `
height: 70%;
width: auto;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain; 
`
);
