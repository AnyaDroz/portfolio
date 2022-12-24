import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledQuote = styled.div`
  grid-column-start: 11;
  grid-column-end: 20;
  font-family: TWKLausanneHeavy;
  line-height: 150%;
  font-size: 18px;

  @media ${device.mobileM} {
    font-size: 16px;
    grid-column-start: 1;
    grid-column-end: 25;
  }
`;

export const StyledHeading = styled.div`
  grid-column-start: 11;
  grid-column-end: 20;
  font-family: TWKLausanneMedium;
  line-height: 150%;
  font-size: 18px;
`;
