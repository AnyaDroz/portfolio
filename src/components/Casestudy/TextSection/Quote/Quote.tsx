import React from "react";
import Grid from "../../../Grid/Grid";
import { StyledQuote } from "./Quote.styles";

type QuoteProp = {
  children: string;
};

const Quote = ({ children }: QuoteProp) => {
  return (
    <Grid>
      <StyledQuote>{children}</StyledQuote>
    </Grid>
  );
};

export default Quote;
