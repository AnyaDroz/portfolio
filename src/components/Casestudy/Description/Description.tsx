import React from 'react'
import {
    StyledCompanyName,
    StyledProjectName,
    StyledDescription,
    StyledDescriptionContainer,
} from "./Description.styles"
import Grid from "../../Grid/Grid"

type DescriptionProps = {
    companyName: string
    projectName: string
    description: string
}


const Description = ({companyName, projectName, description}:DescriptionProps) => {
  return (
      <>
    <Grid>
        <StyledDescriptionContainer>
    <StyledCompanyName>{companyName}</StyledCompanyName>
    <StyledProjectName>{projectName}</StyledProjectName>
    <StyledDescription>{description}</StyledDescription>
    </StyledDescriptionContainer>
    </Grid>
    </>
   
  )
}

export default Description