import React from 'react'
import {StyledImage, StyledContainer} from "./FullBleedGif.styles"

type FullBleedProps = {
    image: string,
    width: number, 
    height: number,
    color: string,
    marginTop: number, 
    marginBottom: number
  }

const FullBleedGif = ({color, image, width, height, marginTop, marginBottom}:FullBleedProps) => {
  return (
    <StyledContainer color={color}>
      <StyledImage marginTop={marginTop} marginBottom={marginBottom} image={image} width={width} height={height}/>
    </StyledContainer>
  )
}



export default FullBleedGif