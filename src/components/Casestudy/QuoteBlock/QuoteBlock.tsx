import {
  StyledQuote,
  StyledHeading,
  StyledContainer,
} from "./QuoteBlock.styles";
import Grid from "../../Grid/Grid";

type QuoteProps = {
  heading: string;
  quoteOne: string;
  quoteTwo: string;
  quoteThree: string;
};

const QuoteBlock = ({
  heading,
  quoteOne,
  quoteTwo,
  quoteThree,
}: QuoteProps) => {
  return (
    <Grid>
      <StyledContainer>
        <StyledHeading>{heading}</StyledHeading>
        <StyledQuote>{quoteOne}</StyledQuote>
        <StyledQuote>{quoteTwo}</StyledQuote>
        <StyledQuote>{quoteThree}</StyledQuote>
      </StyledContainer>
    </Grid>
  );
};

export default QuoteBlock;
