import styled from "styled-components";
const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledContainer = styled.div`
  display: flexbox;
  font-family: TWKLausanneLight;
  font-size: 20px;
  justify-content: space-between;
  padding: 16px;
  text-decoration: underline 1px;
  text-underline-offset: 2px;
  @media ${device.mobileM} {
    font-size: 16px;
  }
`;

export const StyledPreviousProject = styled.div`
  :hover {
    color: blue;
    cursor: pointer;
    text-decoration: underline 1px;
    text-decoration-color: blue;
  }
`;

export const StyledNextProject = styled.div`
  :hover {
    color: blue;
    cursor: pointer;
    text-decoration: underline 1px;
    text-decoration-color: blue;
  }
`;
