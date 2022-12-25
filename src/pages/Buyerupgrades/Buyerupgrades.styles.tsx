import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledLogoContainer = styled.div`
  position: absolute;
  z-index: 1;
  padding: 8px;
`;
