import React from "react";
import Grid from "../../../Grid/Grid";
import { StyledSubHeading } from "../SubHeading/SubHeading.styles";

type SubHeadingProps = {
  children: string;
};

const SubHeading = ({ children }: SubHeadingProps) => {
  return (
    <Grid>
      <StyledSubHeading>{children}</StyledSubHeading>
    </Grid>
  );
};

export default SubHeading;
