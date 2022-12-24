import React from "react";
import {
  StyledGrid,
  StyledGridItemOne,
  StyledCaption,
  StyledGridItemTwo,
  StyledGridItemThree,
  StyledGridItemFour,
  StyledImage,
} from "./FourByFourGrid.styles";

type FourByFourGridProps = {
  imageOne: string;
  captionOne?: string;
  imageTwo: string;
  captionTwo?: string;
  captionThree?: string;
  captionFour?: string;
  imageThree: string;
  imageFour: string;
  color: string;
};

const FourByFourGrid = ({
  imageOne,
  captionOne,
  imageTwo,
  captionTwo,
  captionThree,
  captionFour,
  imageThree,
  imageFour,
  color,
}: FourByFourGridProps) => {
  return (
    <StyledGrid color={color}>
      <StyledGridItemOne>
        <StyledImage image={imageOne} />
        {captionOne ? <StyledCaption>{captionOne}</StyledCaption> : ""}
      </StyledGridItemOne>
      <StyledGridItemTwo>
        <StyledImage image={imageTwo} />
        {captionTwo ? <StyledCaption>{captionTwo}</StyledCaption> : ""}
      </StyledGridItemTwo>
      <StyledGridItemThree>
        <StyledImage image={imageThree} />
        {captionThree ? <StyledCaption>{captionThree}</StyledCaption> : ""}
      </StyledGridItemThree>
      <StyledGridItemFour>
        <StyledImage image={imageFour} />
        {captionFour ? <StyledCaption>{captionFour}</StyledCaption> : ""}
      </StyledGridItemFour>
    </StyledGrid>
  );
};

export default FourByFourGrid;
