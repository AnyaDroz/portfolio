import React from 'react'
import Grid from "../../../../components/Grid/Grid"
import {StyledImage} from "./InlineImage.styles"

type StyledImageProps = {
    imageWidth: number,
    imageHeight: number, 
    image: string,
}

const InlineImage = ({imageWidth, imageHeight, image}:StyledImageProps) => {
  return (
    <Grid>
    <StyledImage imageWidth={imageWidth} image={image} imageHeight={imageHeight}/>
    </Grid>
  )
}

export default InlineImage