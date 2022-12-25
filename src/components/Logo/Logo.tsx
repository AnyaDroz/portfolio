import React from "react";
import { StyledLogo } from "./Logo.styles";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  let navigate = useNavigate();
  const routeChangeHome = (e: React.MouseEvent) => {
    console.log("click");
    let path = `/home`;
    navigate(path);
  };
  return <StyledLogo onClick={routeChangeHome} />;
};

export default Logo;
