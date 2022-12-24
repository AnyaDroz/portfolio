import React from "react";
import Grid from "../../Grid/Grid";
import {
  StyledContainerOne,
  StyledContainerTwo,
  StyledImageOne,
  StyledImageTwo,
} from "./TwoImages.styles";

type TwoImagesProps = {
  imageOne: string;
  imageTwo: string;
  color: string;
  mobileSizeOne: string;
  desktopSizeOne: string;
  mobileSizeTwo:string;
  desktopSizeTwo:string;


};

const TwoImages = ({ imageOne, imageTwo, color, mobileSizeOne, desktopSizeOne, mobileSizeTwo, desktopSizeTwo }: TwoImagesProps) => {
  return (
    <Grid>
      <StyledContainerOne color={color}>
        <StyledImageOne desktopSizeOne={desktopSizeOne} mobileSizeOne={mobileSizeOne} image={imageOne} />
      </StyledContainerOne>
      <StyledContainerTwo color={color}>
        <StyledImageTwo desktopSizeTwo={desktopSizeTwo} mobileSizeTwo={mobileSizeTwo} image={imageTwo} />
      </StyledContainerTwo>
    </Grid>
  );
};

export default TwoImages;
