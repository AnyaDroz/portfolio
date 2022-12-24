import React from "react";
import {
  StyledLayoutGrid,
  StyledImageOne,
  StyledImageTwo,
  StyledImageThree,
} from "./LayoutOfThree.styles";

type LayoutOfThreeProps = {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  color: string;
};

const LayoutOfThree = ({
  imageOne,
  imageTwo,
  imageThree,
  color,
}: LayoutOfThreeProps) => {
  return (
    <StyledLayoutGrid color={color}>
      <StyledImageOne image={imageOne} />
      <StyledImageTwo image={imageTwo} />
      <StyledImageThree image={imageThree} />
    </StyledLayoutGrid>
  );
};

export default LayoutOfThree;
