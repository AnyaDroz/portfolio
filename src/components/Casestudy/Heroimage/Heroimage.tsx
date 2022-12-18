import {StyledImage, StyledContainer} from "./Heroimage.styles"

type HeroImageProps = {
  image: string,
  color: string
}

const Heroimage = ({image, color}:HeroImageProps) => {
  return (
    <StyledContainer color={color}>
    <StyledImage image={image} color={color}/>
    </StyledContainer>
  )
}

export default Heroimage