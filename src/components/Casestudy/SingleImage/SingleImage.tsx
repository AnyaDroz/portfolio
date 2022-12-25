import React from "react";
import { StyledContainer, StyledImage } from "./SingleImage.styles";

type SingleImageProps = {
  image: string;
  color: string;
  marginTop: number;
  marginBottom: number;
  fit: string;
  mobileFit: string;
  mobileHeight: string;
  desktopHeight: string;
};

const SingleImage = ({
  fit,
  image,
  color,
  marginTop,
  marginBottom,
  mobileFit,
  mobileHeight,
  desktopHeight
}: SingleImageProps) => {
  return (
    <StyledContainer color={color}>
      <StyledImage
        mobileFit={mobileFit}
        fit={fit}
        image={image}
        marginTop={marginTop}
        marginBottom={marginBottom}
        desktopHeight={desktopHeight}
        mobileHeight={mobileHeight}
      />
    </StyledContainer>
  );
};

export default SingleImage;
