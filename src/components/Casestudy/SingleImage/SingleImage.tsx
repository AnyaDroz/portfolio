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
  mobilePosition: string;
};

const SingleImage = ({
  fit,
  image,
  color,
  marginTop,
  marginBottom,
  mobileFit,
  mobileHeight,
  desktopHeight,
  mobilePosition
}: SingleImageProps) => {
  return (
    <StyledContainer color={color}>
      <StyledImage
        mobilePosition={mobilePosition}
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
