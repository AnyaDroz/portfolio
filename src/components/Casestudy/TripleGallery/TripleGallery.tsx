import React from 'react'
import {
    GalleryGrid,
    StyledImageOne,
    StyledImageTwo,
    StyledImageThree,
    StyledImageFour,
    StyledImageFive,
    StyledImageSix, 
} from "./TripleGallery.styles"


type TripleGalleryProps = {
    color: string, 
    imageOne: string, 
    imageTwo: string, 
    imageThree: string, 
    imageFour: string,
    imageFive: string, 
    imageSix: string,
}

const TripleGallery = ({color, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix}:TripleGalleryProps) => {
  return (
    <GalleryGrid color={color}>
        <StyledImageOne image={imageOne}/>
        <StyledImageTwo image={imageTwo}/>
        <StyledImageThree image={imageThree}/>
        <StyledImageFour image={imageFour}/>
        <StyledImageFive image={imageFive}/>
        <StyledImageSix image={imageSix}/>
    </GalleryGrid>
  )
}

export default TripleGallery