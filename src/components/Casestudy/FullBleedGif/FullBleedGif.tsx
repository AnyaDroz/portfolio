import React from 'react'
import {StyledImage, StyledContainer} from "./FullBleedGif.styles"

type FullBleedProps = {
    image: string,
    width: number, 
    height: number,
    color: string,
  }

const FullBleedGif = ({color, image, width, height}:FullBleedProps) => {
  return (
    <StyledContainer color={color}>
      <StyledImage image={image} width={width} height={height}/>
    </StyledContainer>
  )
}



export default FullBleedGif