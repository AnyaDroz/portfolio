import React from "react";
import { StyledImage, StyledContainer } from "./FullBleedGif.styles";

type FullBleedProps = {
  image: string;
  width: number;
  height: number;
  color: string;
  marginTop: number;
  marginBottom: number;
  mobileSize: string;
  mobileMargin: string;
  mobileHeight: string;
  mobileWidth: string;
  desktopPosition: string;
  desktopSize: string;
  mobilePosition: string;
};

const FullBleedGif = ({
  color,
  image,
  width,
  height,
  marginTop,
  marginBottom,
  mobileSize,
  mobileMargin,
  mobileHeight,
  mobileWidth,
  desktopPosition,
  desktopSize,
  mobilePosition,
}: FullBleedProps) => {
  return (
    <StyledContainer color={color}>
      <StyledImage
        mobilePosition={mobilePosition}
        desktopSize={desktopSize}
        mobileWidth={mobileWidth}
        mobileHeight={mobileHeight}
        mobileMargin={mobileMargin}
        mobileSize={mobileSize}
        desktopPosition={desktopPosition}
        marginTop={marginTop}
        marginBottom={marginBottom}
        image={image}
        width={width}
        height={height}
      />
    </StyledContainer>
  );
};

export default FullBleedGif;
