import React from 'react'
import {StyledImage, StyledContainer} from "./FullBleedImage.styles"

type FullBleedProps = {
    image: string,
  }

const FullBleedImage = ({image}:FullBleedProps) => {
  return (
    <StyledContainer>
      <StyledImage image={image}/>
    </StyledContainer>
  )
}



export default FullBleedImage