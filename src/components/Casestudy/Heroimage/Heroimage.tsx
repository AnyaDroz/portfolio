import { FileTextChanges } from "typescript";
import { StyledImage, StyledContainer} from "./Heroimage.styles";


type HeroImageProps = {
  image: string;
  color: string;
  padding: number;
  position: string;
  paddingMobile: number;
  sizeMobile: string;
  sizeDesktop: string;
};

const Heroimage = ({ sizeDesktop, paddingMobile, image, color, padding, position, sizeMobile }: HeroImageProps) => {
  return (
    <StyledContainer paddingMobile={paddingMobile} padding={padding} color={color}>
      <StyledImage sizeDesktop={sizeDesktop} sizeMobile={sizeMobile} position={position} image={image} color={color} />
    </StyledContainer>
  );
};

export default Heroimage;
