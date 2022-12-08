
import {StyledParagraph, 
    StyledHeader, 
    StyledTextContainer,
    StyledParagraphRed} from "./TextSection.styles"
import Grid from "../../Grid/Grid"

type TextSectionProps = {
    paragraph: string,
    redParagraph?: string,
    header?:string,
    inlineImage?:string
}


const TextSection = ({header, paragraph, redParagraph, inlineImage}:TextSectionProps) => {
  return ( 
    <>
    <StyledTextContainer>
    <Grid>
        {header ? <StyledHeader>{header}</StyledHeader> : ""}
        {redParagraph ? <StyledParagraphRed>{redParagraph}</StyledParagraphRed> :""}
        <StyledParagraph>{paragraph}</StyledParagraph>
        {inlineImage ? <StyledImage image={image}/> : ""}
    </Grid>
    </StyledTextContainer>
    </>
  )
}

export default TextSection