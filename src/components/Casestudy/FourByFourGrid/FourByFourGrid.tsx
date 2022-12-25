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
  mobileGrid: string;
  mobileSize: string;
  height: string
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
  mobileGrid,
  mobileSize,
  height
}: FourByFourGridProps) => {
  return (
    <StyledGrid color={color} mobileGrid={mobileGrid}>
      <StyledGridItemOne>
        <StyledImage height={height} mobileSize={mobileSize} image={imageOne} />
        {captionOne ? <StyledCaption>{captionOne}</StyledCaption> : ""}
      </StyledGridItemOne>
      <StyledGridItemTwo>
        <StyledImage height={height} mobileSize={mobileSize} image={imageTwo} />
        {captionTwo ? <StyledCaption>{captionTwo}</StyledCaption> : ""}
      </StyledGridItemTwo>
      <StyledGridItemThree>
        <StyledImage height={height} mobileSize={mobileSize} image={imageThree} />
        {captionThree ? <StyledCaption>{captionThree}</StyledCaption> : ""}
      </StyledGridItemThree>
      <StyledGridItemFour>
        <StyledImage height={height} mobileSize={mobileSize} image={imageFour} />
        {captionFour ? <StyledCaption>{captionFour}</StyledCaption> : ""}
      </StyledGridItemFour>
    </StyledGrid>
  );
};

export default FourByFourGrid;
