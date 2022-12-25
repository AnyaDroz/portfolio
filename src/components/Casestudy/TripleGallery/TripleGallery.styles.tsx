import styled from "styled-components";
const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyledImageGallery = {
  color: string;
};

export const GalleryGrid = styled.div<StyledImageGallery>(
  ({ color }) => `
  margin: auto;
  justify-content: center;
display: grid;
grid-template-columns: 30% 8px 30% 8px 30%;;
grid-template-rows: 20vw 20vw;
padding: 16px;
background-color: ${color};

@media ${device.mobileM} { 
  grid-template-columns: 50% 8px 50%;
grid-template-rows: 35vw 35vw 35vw;
padding: 8px;
  }
`
);

type StyledImageProps = {
  image: string;
};

export const StyledImageOne = styled.div<StyledImageProps>(
  ({ image }) => `
grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobileM} { 
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    }
`
);

export const StyledImageTwo = styled.div<StyledImageProps>(
  ({ image }) => `
grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${image});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobileM} { 
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    }
`
);

export const StyledImageThree = styled.div<StyledImageProps>(
  ({ image }) => `
    grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobileM} { 
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    }

`
);

export const StyledImageFour = styled.div<StyledImageProps>(
  ({ image }) => `
grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image:url(${image});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobileM} { 
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    }
`
);

export const StyledImageFive = styled.div<StyledImageProps>(
  ({ image }) => `
grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image:url(${image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${device.mobileM} { 
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    }
  
`
);

export const StyledImageSix = styled.div<StyledImageProps>(
  ({ image }) => `
grid-column-start: 5;
  grid-column-end:6;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image:url(${image});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  @media ${device.mobileM} { 
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    }
`
);
