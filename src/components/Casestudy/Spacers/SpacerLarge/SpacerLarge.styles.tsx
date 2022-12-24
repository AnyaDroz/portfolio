import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledLargeSpacer = styled.div`
  height: 80px;
  width: auto;

  @media ${device.mobileM} {
    height: 50px;
    width: auto;
  }
`;
