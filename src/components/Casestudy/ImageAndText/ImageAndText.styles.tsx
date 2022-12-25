import styled from "styled-components";
const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledHeader = styled.div`
  font-family: TWKLausanneHeavy;
  line-height: 150%;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const StyledBulletPoint = styled.div`
  margin-bottom: 10px;
`;

export const StyledTextContainer = styled.div`
  width: 20vw;
  font-family: TWKLausanneLight;
  line-height: 150%;
  font-size: 16px;
  margin-top: 50px;

  @media ${device.mobileM} {
    margin-top: 0px;
    font-size: 14px;
    width: 90vw;
    margin: auto;
    padding-bottom: 16px;
    padding-top: 30px;
  }
`;

type StyledImageProps = {
  image: string;
};

export const StyledImageContainerOne = styled.div<StyledImageProps>(
  ({ image }) => `

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
    background-image:url(${image});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 90% auto; 
    
    @media ${device.mobileM} {
      height: 550px; 
      background-position: center;
      background-size: 85% auto;
      margin: auto;

  }
`
);

export const StyledImageContainerTwo = styled.div<StyledImageProps>(
  ({ image }) => `
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${image});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 90% auto; 

    @media ${device.mobileM} { 
      height: 420px; 
      background-position: center;
      background-size: 85% auto;
      margin: auto;
  }
`
);

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: 600px;
  gap: 80px;
  background-color: #f9f9f9;

  @media ${device.mobileM} {
    display: block;
  }
`;
