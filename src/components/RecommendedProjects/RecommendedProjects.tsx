import React from 'react'
import {StyledContainer,StyledPreviousProject, StyledNextProject } from "./RecommendedProjects.styles"
import { useNavigate } from "react-router-dom";

type ProjectProps = {
    previousProject: string,
    nextProject: string,
    previousPath: string,
    nextPath: string,
}


const RecommendedProjects = ({nextPath, previousPath, previousProject, nextProject}:ProjectProps) => {
    let navigate = useNavigate();
    const routePrevious = (e: React.MouseEvent) => {
        console.log("click");
        let path = `${previousPath}`;
        navigate(path);
      };

      const routeNext = (e: React.MouseEvent) => {
        console.log("click");
        let path = `${nextPath}`;
        navigate(path);
      };
    
      
  return (
      <StyledContainer>
          <StyledPreviousProject onClick={routePrevious}>
          Previous: {previousProject}
          </StyledPreviousProject>
          <StyledNextProject onClick={routeNext}>
          Next: {nextProject}
        </StyledNextProject>
      </StyledContainer>


  )
}

export default RecommendedProjects