import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyledImageGallery = {
  color: string;
  grid: string;
  mobileGrid: string;
  desktopPadding: string;
  mobilePadding: string;
};

export const GalleryGrid = styled.div<StyledImageGallery>(
  ({ color, grid, mobileGrid, mobilePadding, desktopPadding }) => `
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: ${grid};
  background-color: ${color};
  padding-top: ${desktopPadding};
  padding-bottom: ${desktopPadding};

  @media ${device.mobileM} { 
    grid-template-columns: 100%;
    grid-template-rows: ${mobileGrid};
    gap: 0px;
    padding-bottom: ${mobilePadding};
    padding-top: ${mobilePadding};

}
`
);

type StyledImageProps = {
  image: string;
  mobileSize: string;
};

export const StyledImageOne = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 8px;
  margin-left: 16px;
  filter: drop-shadow(0 0 1px #c6c6c6);
  margin-bottom: 16px;
  
 

  @media ${device.mobileM} { 
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 2;
    border: none;
    background-size: ${mobileSize};
    margin-right: 0px;
    margin-left: 0px;
}`
);

//border

export const StyledImageTwo = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 8px;
  margin-right: 16px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 1px #c6c6c6);

  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 3;
  background-size: ${mobileSize};
  border: none;
  margin-right: 0px;
  margin-left: 0px;
  
}`
);

export const StyledImageThree = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; 
  margin-right: 8px;
  margin-left: 16px;
  filter: drop-shadow(0 0 1px #c6c6c6);
  margin-bottom: 16px;

  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  grid-row-end: 4;
  background-size: ${mobileSize};
  border: none;
  margin-right: 0px;
  margin-left: 0px;
}
`
);

export const StyledImageFour = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 16px;
  margin-left: 8px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 1px #c6c6c6);
  
  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 5;
  background-size: 90% auto;
  border: none;
  margin-right: 0px;
  margin-left: 0px;
}
`
);

export const StyledImageFive = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; 
  margin-right: 8px;
  margin-left: 16px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 1px #c6c6c6);

  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 5;
  grid-row-end: 6;
  background-size: ${mobileSize};
  border: none;
  margin-right: 0px;
  margin-left: 0px;
}
`
);

export const StyledImageSix = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
  grid-column-start:2;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 16px;
  margin-left: 8px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 1px #c6c6c6);
  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 6;
  grid-row-end: 7;
  background-size: ${mobileSize};
  border: none;
  margin-right: 0px;
  margin-left: 0px;
}
`
);

export const StyledImageSeven = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
  grid-column-start:1;
  grid-column-end:2;
  grid-row-start: 4;
  grid-row-end: 5;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 8px;
  margin-left: 16px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 1px #c6c6c6);
  

  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 7;
  grid-row-end: 8;
  margin-right: 0px;
  margin-left: 0px;
  background-size: ${mobileSize};
  border: none;
}
`
);

export const StyledImageEight = styled.div<StyledImageProps>(
  ({ image, mobileSize }) => `
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 16px;
  margin-left: 8px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 1px #c6c6c6);
  @media ${device.mobileM} { 
    grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 8;
  grid-row-end: 9;
  margin-right: 0px;
  margin-left: 0px;
  border: none;
  background-size: ${mobileSize};
}
`
);
