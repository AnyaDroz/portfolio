import React from "react";

import {
  StyledTripleImageGrid,
  StyledImageOne,
  StyledImageTwo,
  StyledImageThree,
  StyledCaption,
  StyledContainerTwo,
  StyledContainerThree,
  StyledContainerOne,
} from "./TripleImageCaption.styles";

type TripleImageProps = {
  color: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  captionOne: string;
  captionTwo: string;
  captionThree: string;
};

const TripleImageCaption = ({
  color,
  imageOne,
  imageTwo,
  imageThree,
  captionOne,
  captionTwo,
  captionThree,
}: TripleImageProps) => {
  return (
    <div>
      <StyledTripleImageGrid color={color}>
        <StyledContainerOne>
          <StyledImageOne image={imageOne} />
          <StyledCaption>{captionOne}</StyledCaption>
        </StyledContainerOne>
        <StyledContainerTwo>
          <StyledImageTwo image={imageTwo} />
          <StyledCaption>{captionTwo}</StyledCaption>
        </StyledContainerTwo>
        <StyledContainerThree>
          <StyledImageThree image={imageThree} />
          <StyledCaption>{captionThree}</StyledCaption>
        </StyledContainerThree>
      </StyledTripleImageGrid>
    </div>
  );
};

export default TripleImageCaption;
