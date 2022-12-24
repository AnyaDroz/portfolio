import React from "react";
import Grid from "../../../../components/Grid/Grid";
import { StyledParagraph } from "../Paragraph/Paragraph.styles";

type ParagraphProps = {
  children: string;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <Grid>
      <StyledParagraph>{children}</StyledParagraph>
    </Grid>
  );
};

export default Paragraph;
