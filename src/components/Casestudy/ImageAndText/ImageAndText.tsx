import React from "react";
import {
  StyledBulletPoint,
  StyledImageContainerOne,
  StyledImageContainerTwo,
  StyledTextContainer,
  StyledHeader,
  StyledContainer,
} from "./ImageAndText.styles";
import Grid from "../../Grid/Grid";

type ImageAndTextProps = {
  imageOne: string;
  imageTwo: string;
  header: string;
  bulletPointOne: string;
  bulletPointTwo: string;
  bulletPointThree: string;
};

const ImageAndText = ({
  imageOne,
  imageTwo,
  header,
  bulletPointOne,
  bulletPointTwo,
  bulletPointThree,
}: ImageAndTextProps) => {
  return (
    <StyledContainer>
      <StyledImageContainerOne image={imageOne} />
      <StyledImageContainerTwo image={imageTwo} />

      <StyledTextContainer>
        <StyledHeader>{header}</StyledHeader>
        <StyledBulletPoint>{bulletPointOne}</StyledBulletPoint>
        <StyledBulletPoint>{bulletPointTwo}</StyledBulletPoint>
        <StyledBulletPoint>{bulletPointThree}</StyledBulletPoint>
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default ImageAndText;
