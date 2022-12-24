import React from "react";
import { StyledHeading } from "./Heading.styles";
import Grid from "../../../../components/Grid/Grid";

type HeadingProps = {
  children: string;
};

const Heading = ({ children }: HeadingProps) => {
  return (
    <Grid>
      <StyledHeading>{children}</StyledHeading>
    </Grid>
  );
};

export default Heading;
