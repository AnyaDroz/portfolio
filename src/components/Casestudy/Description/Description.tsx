import React from "react";
import {
  StyledCompanyName,
  StyledProjectName,
  StyledDescription,
  StyledDescriptionContainer,
  StyledLink,
} from "./Description.styles";
import Grid from "../../Grid/Grid";

type DescriptionProps = {
  companyName: string;
  projectName: string;
  description: string;
  linkToProject?: string;
};

const Description = ({
  companyName,
  projectName,
  description,
  linkToProject,
}: DescriptionProps) => {
  return (
    <>
      <Grid>
        <StyledDescriptionContainer>
          <StyledCompanyName>{companyName}</StyledCompanyName>
          <StyledProjectName>{projectName}</StyledProjectName>
          <StyledDescription>{description}</StyledDescription>
          {linkToProject ? (
            <StyledLink>
              <a href={linkToProject} target="_blank" rel="noreferrer">
                Open in Figma ↗︎
              </a>
            </StyledLink>
          ) : (
            ""
          )}
        </StyledDescriptionContainer>
      </Grid>
    </>
  );
};

export default Description;
