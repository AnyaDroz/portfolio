import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledHeading = styled.div`
  font-family: TWKLausanneMedium;
  line-height: 150%;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const StyledTextGrid = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: 50% 50px 50%;
  grid-template-rows: 30vw 30vw;
  background-color: #f9f9f9;

  @media ${device.mobileM} {
    padding-top: 40px;
    grid-template-columns: 100%;
    grid-template-rows: 250px 200px 350px 260px;
  }
`;

export const StyledLeftTop = styled.div`
  margin: auto;
  padding: 4%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 70%;

  @media ${device.mobileM} {
    width: 90%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
export const StyledLeftBottom = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin: auto;
  padding: 4%;
  width: 70%;
  @media ${device.mobileM} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    font-family: TWKLausanneMedium;
    width: 90%;
  }
`;

export const StyledParagraph = styled.div`
  font-family: TWKLausanneLight;
  line-height: 150%;
  font-size: 18px;
  margin-bottom: 20px;
  @media ${device.mobileM} {
    font-size: 16px;
  }
`;

type StyledImageProps = {
  image: string;
};

export const StyledImageOne = styled.div<StyledImageProps>(
  ({ image }) => `
   grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  margin:auto;
  width: 20px;
  height: 220px;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobileM} { 
    background-image: none;
    display: none;
  }
`
);

export const StyledImageTwo = styled.div<StyledImageProps>(
  ({ image }) => `
     margin:auto;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  background-image:url(${image});
  width: 20px;
  height: 315px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${device.mobileM} { 
    background-image: none;
    display: none;
  }
`
);

export const StyledTextSectionLeft = styled.div`
  display: block;
  grid-column-start: 1;
  grid-column-end: 2;
  justify-content: center;
`;

export const StyledTopText = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  line-height: 150%;
  font-size: 18px;
  margin: auto;
  width: 70%;
  @media ${device.mobileM} {
    padding-top: 50px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    width: 90%;
  }
`;

export const StyledBottomText = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  line-height: 150%;
  font-size: 18px;
  margin: auto;
  width: 70%;
  @media ${device.mobileM} {
    padding-top: 50px;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 5;
    width: 90%;
  }
`;
