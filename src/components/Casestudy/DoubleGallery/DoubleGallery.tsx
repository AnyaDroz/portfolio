import React from 'react'

import {
    GalleryGrid,
    StyledImageOne,
    StyledImageTwo,
    StyledImageThree,
    StyledImageFour,
    StyledImageFive,
    StyledImageSix, 
    StyledImageSeven,
    StyledImageEight,
} from "./DoubleGallery.styles"


type GalleryProps ={
    imageOne: string,
    imageTwo: string,
    imageThree: string,
    imageFour: string,
    imageFive: string,
    imageSix: string,
    imageSeven?: string,
    imageEight?: string,
    color: string,
}


const DoubleGallery = ({imageOne,imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight, color}:GalleryProps) => {
  return (
<GalleryGrid color={color}>
        <StyledImageOne image={imageOne}/>
        <StyledImageTwo image={imageTwo}/>
        <StyledImageThree image={imageThree}/>
        <StyledImageFour image={imageFour}/>
        <StyledImageFive image={imageFive}/>
        <StyledImageSix image={imageSix}/>
        {imageSeven ? <StyledImageSeven image={imageSeven}/> : ""}
        {imageEight ? <StyledImageEight image={imageEight}/> : ""}
</GalleryGrid>
  )
}

export default DoubleGallery