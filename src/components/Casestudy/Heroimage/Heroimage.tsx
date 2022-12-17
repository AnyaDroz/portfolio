import React, { ReactPropTypes } from 'react'
import {StyledImage} from "./Heroimage.styles"


type HeroImageProps = {
  image: string,
  color: string
}


const Heroimage = ({image, color}:HeroImageProps) => {
  return (
    <>
    <StyledImage image={image} color={color}/>
    </>
  )
}

export default Heroimage