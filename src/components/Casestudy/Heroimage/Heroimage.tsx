import React, { ReactPropTypes } from 'react'
import {StyledImage} from "./Heroimage.styles"


type HeroImageProps = {
  image: string
}


const Heroimage = ({image}:HeroImageProps) => {
  return (
    <>
    <StyledImage image={image}/>
    </>
  )
}

export default Heroimage