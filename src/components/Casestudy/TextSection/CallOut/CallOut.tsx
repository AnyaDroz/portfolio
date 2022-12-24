import React from "react";
import { StyledCallout } from "./CallOut.styles";
import Grid from "../../../Grid/Grid";

type CalloutProps = {
  children: string;
};

const Callout = ({ children }: CalloutProps) => {
  return (
    <Grid>
      <StyledCallout>{children}</StyledCallout>
    </Grid>
  );
};

export default Callout;
