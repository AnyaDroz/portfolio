import React from "react";

import {
  GalleryGrid,
  StyledImageOne,
  StyledImageTwo,
  StyledImageThree,
  StyledImageFour,
  StyledImageFive,
  StyledImageSix,
  StyledImageSeven,
  StyledImageEight,
} from "./DoubleGallery.styles";

type GalleryProps = {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  imageFour: string;
  imageFive: string;
  imageSix: string;
  imageSeven?: string;
  imageEight?: string;
  color: string;
  grid: string;
  mobileGrid: string;
  mobileSize: string;
  mobilePadding: string;
  desktopPadding: string;
};

const DoubleGallery = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
  color,
  grid,
  mobileGrid,
  mobileSize,
  desktopPadding,
  mobilePadding,
}: GalleryProps) => {
  return (
    <GalleryGrid
      mobilePadding={mobilePadding}
      desktopPadding={desktopPadding}
      mobileGrid={mobileGrid}
      color={color}
      grid={grid}
    >
      <StyledImageOne mobileSize={mobileSize} image={imageOne} />
      <StyledImageTwo mobileSize={mobileSize} image={imageTwo} />
      <StyledImageThree mobileSize={mobileSize} image={imageThree} />
      <StyledImageFour mobileSize={mobileSize} image={imageFour} />
      <StyledImageFive mobileSize={mobileSize} image={imageFive} />
      <StyledImageSix mobileSize={mobileSize} image={imageSix} />
      {imageSeven ? (
        <StyledImageSeven mobileSize={mobileSize} image={imageSeven} />
      ) : (
        ""
      )}
      {imageEight ? (
        <StyledImageEight mobileSize={mobileSize} image={imageEight} />
      ) : (
        ""
      )}
    </GalleryGrid>
  );
};

export default DoubleGallery;
