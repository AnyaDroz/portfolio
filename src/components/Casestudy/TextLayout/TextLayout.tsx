import React from "react";
import {
  StyledTextGrid,
  StyledHeading,
  StyledParagraph,
  StyledImageOne,
  StyledImageTwo,
  StyledTopText,
  StyledBottomText,
  StyledLeftTop,
  StyledLeftBottom,
} from "./TextLayout.styles";

type TextLayoutProps = {
  heading: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  paragraphFour: string;
  paragraphFive: string;
  paragraphSix: string;
  paragraphSeven: string;
  headingTwo: string;
  imageOne: string;
  imageTwo: string;
  explainerOne: string;
  explainerTwo: string;
};

const TextLayout = ({
  heading,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  paragraphFive,
  paragraphSix,
  paragraphSeven,
  headingTwo,
  imageOne,
  imageTwo,
  explainerOne,
  explainerTwo,
}: TextLayoutProps) => {
  return (
    <StyledTextGrid>
      <StyledLeftTop>
        <StyledHeading>{heading}</StyledHeading>
        <StyledParagraph>{paragraphOne}</StyledParagraph>
        <StyledParagraph>{paragraphTwo}</StyledParagraph>
        <StyledParagraph>{paragraphThree}</StyledParagraph>
      </StyledLeftTop>
      <StyledLeftBottom>
        <StyledHeading>{headingTwo}</StyledHeading>
        <StyledParagraph>{paragraphFour}</StyledParagraph>
        <StyledParagraph>{paragraphFive}</StyledParagraph>
        <StyledParagraph>{paragraphSix}</StyledParagraph>
        <StyledParagraph>{paragraphSeven}</StyledParagraph>
      </StyledLeftBottom>
      <StyledImageOne image={imageOne}></StyledImageOne>
      <StyledImageTwo image={imageTwo}></StyledImageTwo>
      <StyledTopText>
        <StyledParagraph>{explainerOne}</StyledParagraph>
      </StyledTopText>
      <StyledBottomText>
        <StyledParagraph>{explainerTwo}</StyledParagraph>
      </StyledBottomText>
    </StyledTextGrid>
  );
};

export default TextLayout;
