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
};

const TwoImages = ({ imageOne, imageTwo, color }: TwoImagesProps) => {
  return (
    <Grid>
      <StyledContainerOne color={color}>
        <StyledImageOne image={imageOne} />
      </StyledContainerOne>
      <StyledContainerTwo color={color}>
        <StyledImageTwo image={imageTwo} />
      </StyledContainerTwo>
    </Grid>
  );
};

export default TwoImages;
