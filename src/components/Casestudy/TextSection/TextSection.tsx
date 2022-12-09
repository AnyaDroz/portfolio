
import {StyledParagraph, 
    StyledHeader, 
    StyledTextContainer,
    StyledParagraphRed,
    StyledImage,
    StyledSideContainer,
} from "./TextSection.styles"
import Grid from "../../Grid/Grid"

type TextSectionProps = {
    paragraph: string,
    redParagraph?: string,
    header?:string,
    image?:string,
    imageWidth?: number,
    imageHeight?: number,
}


const TextSection = ({header, paragraph, redParagraph, image, imageWidth, imageHeight}:TextSectionProps) => {
  return ( 
    <>
    <StyledTextContainer>
    <Grid>
        {header ? <StyledHeader>{header}</StyledHeader> : ""}
        <StyledSideContainer>
        {redParagraph ? <StyledParagraphRed>{redParagraph}</StyledParagraphRed> :""}
        <StyledParagraph>{paragraph}</StyledParagraph>
        {image && imageWidth && imageHeight? <StyledImage imageWidth={imageWidth} image={image} imageHeight={imageHeight}/> : ""}
        </StyledSideContainer>
    </Grid>
    </StyledTextContainer>
    </>
  )
}

export default TextSection