import React from 'react'

import {
StyledBulletOne,
StyledBulletTwo,
StyledBulletThree,
StyledBulletFour,
StyledGrid,
Heading,
Paragraph, 
StyledImage
} from "./BulletAndImage.styles"

type BulletandImageProps = {
    headingOne: string, 
    paragraphOne:string,
    headingTwo: string,
    paragraphTwo: string, 
    headingThree: string, 
    paragraphThree: string, 
    headingFour: string, 
    paragraphFour: string, 
    image: string
}

const BulletAndImage = ({
    headingOne,
    paragraphOne,
    headingTwo,
    paragraphTwo,
    headingThree,
    paragraphThree,
    headingFour,
    paragraphFour, 
    image
}:BulletandImageProps) => {
  return (
    <StyledGrid>
        <StyledBulletOne>
            <Heading>{headingOne}</Heading>
            <Paragraph>{paragraphOne}</Paragraph>
        </StyledBulletOne>
        <StyledBulletTwo>
            <Heading>{headingTwo}</Heading>
            <Paragraph>{paragraphTwo}</Paragraph>
        </StyledBulletTwo>
        <StyledBulletThree>
            <Heading>{headingThree}</Heading>
            <Paragraph>{paragraphThree}</Paragraph>
        </StyledBulletThree>
        <StyledBulletFour>
            <Heading>{headingFour}</Heading>
            <Paragraph>{paragraphFour}</Paragraph>
        </StyledBulletFour>
        <StyledImage image={image}/>
    </StyledGrid>
  )
}

export default BulletAndImage