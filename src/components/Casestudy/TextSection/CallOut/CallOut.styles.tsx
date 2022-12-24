import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledCallout = styled.div`
  grid-column-start: 11;
  grid-column-end: 20;
  font-family: TWKLausanneMedium;
  line-height: 150%;
  font-size: 23px;

  @media ${device.mobileM} {
    grid-column-start: 1;
    grid-column-end: 25;
    line-height: 150%;
    font-size: 18px;
  }
`;
