import React from "react";
import { StyledContainer, StyledImage } from "./SingleImage.styles";

type SingleImageProps = {
  image: string;
  color: string;
  marginTop: number;
  marginBottom: number;
  height: number;
  fit: string;
  mobileFit: string;
};

const SingleImage = ({
  fit,
  image,
  color,
  marginTop,
  marginBottom,
  height,
  mobileFit,
}: SingleImageProps) => {
  return (
    <StyledContainer color={color}>
      <StyledImage
        mobileFit={mobileFit}
        fit={fit}
        image={image}
        marginTop={marginTop}
        marginBottom={marginBottom}
        height={height}
      />
    </StyledContainer>
  );
};

export default SingleImage;
