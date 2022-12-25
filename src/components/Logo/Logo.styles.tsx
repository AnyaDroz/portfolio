import styled from "styled-components";
import Logo from "../../images/Logo.svg";
const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyledLogoProps = {
  image: string;
};

export const StyledLogo = styled.div`
  :hover {
    cursor: pointer;
  }
  z-index: 1;
  height: 20px;
  width: 20px;
  background-image: url(${Logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
