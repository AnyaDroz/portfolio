import React from 'react'
import {
    StyledTripleImageGrid,
    StyledImageOne,
    StyledImageTwo, 
    StyledImageThree
} from "./TripleImage.styles"

type TripleImageProps ={
    imageOne: string, 
    imageTwo: string, 
    imageThree: string,
    color: string,
}

const TripleImage = ({color,imageOne,imageTwo,imageThree}:TripleImageProps) => {
  return (
<StyledTripleImageGrid color={color}>
    <StyledImageOne image = {imageOne}/>
    <StyledImageTwo image = {imageTwo}/>
    <StyledImageThree image = {imageThree}/>
</StyledTripleImageGrid>
  )
}

export default TripleImage