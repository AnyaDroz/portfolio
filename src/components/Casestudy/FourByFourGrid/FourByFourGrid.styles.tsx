import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyleGridProps = {
  color: string;
  mobileGrid: string;
};

export const StyledGrid = styled.div<StyleGridProps>(
  ({ color, mobileGrid }) => `
padding: 50px;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 30vw 30vw;
background-color: ${color};

@media ${device.mobileM} { 
  grid-template-columns: 100%;
  grid-template-rows: ${mobileGrid};
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 0px;
  padding-top: 40px;
}
`
);



export const StyledGridItemOne = styled.div`
  display: block;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;

}
`;

export const StyledGridItemTwo = styled.div`
   display: block;
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  @media ${device.mobileM} { 
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;

}
`;

export const StyledGridItemThree = styled.div`
  display: block;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;

}
`;
export const StyledGridItemFour = styled.div`
  display: block;
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 5;

}
`;
export const StyledCaption = styled.div`
  margin-top: 20px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  font-family: TWKLausanneLight;
  font-size: 18px;
  line-height: 150%;
  @media ${device.mobileM} { 
    font-size: 16px;
    width: 100%;
    line-height: 120%;
    margin-top: 20px;
    height: 20px;

}
`;

type StyledImageProps = {
  image: string;
  mobileSize: string;
};

export const StyledImage = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
height: 70%;
width: auto;
background-image:url(${image});
background-position: center;
background-repeat: no-repeat;
background-size: contain;

@media ${device.mobileM} { 
  position: relative;
 

  background-size: ${mobileSize};
}
`
);
