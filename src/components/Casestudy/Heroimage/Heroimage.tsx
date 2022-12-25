import { FileTextChanges } from "typescript";
import { StyledImage, StyledContainer } from "./Heroimage.styles";

type HeroImageProps = {
  image: string;
  color: string;
  paddingTop: number;
  position: string;
  paddingMobile: number;
  sizeMobile: string;
  sizeDesktop: string;
  imageMobile: string;
  paddingBottom: number;
};

const Heroimage = ({
  sizeDesktop,
  paddingMobile,
  image,
  color,
  paddingTop,
  position,
  sizeMobile,
  imageMobile,
  paddingBottom
}: HeroImageProps) => {
  return (
    <StyledContainer
      paddingMobile={paddingMobile}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      color={color}
    >
      <StyledImage
        imageMobile={imageMobile}
        sizeDesktop={sizeDesktop}
        sizeMobile={sizeMobile}
        position={position}
        image={image}
        color={color}
      />
    </StyledContainer>
  );
};

export default Heroimage;
