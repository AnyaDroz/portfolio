import { StyledImage, StyledContainer } from "./Heroimage.styles";

type HeroImageProps = {
  image: string;
  color: string;
  padding: number;
  position: string;
};

const Heroimage = ({ image, color, padding, position }: HeroImageProps) => {
  return (
    <StyledContainer padding={padding} color={color}>
      <StyledImage position={position} image={image} color={color} />
    </StyledContainer>
  );
};

export default Heroimage;
