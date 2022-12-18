import styled from "styled-components";

const size = {
  mobileM: '768px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`, 
};

type StyledImageGallery = {
  color: string,
  grid: any
}

export const GalleryGrid = styled.div<StyledImageGallery>(({color, grid})=>`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: ${grid};
  background-color: ${color};
  padding-top: 16px;
  

  @media ${device.mobileM} { 
    grid-template-columns: 100%;
    grid-template-rows: repeat(8, 60vw);
    gap: 10px;
    padding-bottom: 40px;
    padding-top: 40px;
}`);


type StyledImageProps = {
    image: string,
  }

export const StyledImageOne = styled.div<StyledImageProps>(({image})=>`
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
    width: auto;
    height: 100%;
    border: none;
    margin-right: 0px;
    margin-left: 0px;
}`)

//border



export const StyledImageTwo = styled.div<StyledImageProps>(({image})=>`
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
  width: auto;
  height: 100%;
  border: none;
  margin-right: 0px;
  margin-left: 0px;
  
}`
);

export const StyledImageThree = styled.div<StyledImageProps>(({image})=>`
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
  width: auto;
  height: 100%;
  border: none;
  margin-right: 0px;
  margin-left: 0px;
}
`);

export const StyledImageFour = styled.div<StyledImageProps>(({image})=>`
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
  width: auto;
  height: 100%;
  border: none;
  margin-right: 0px;
  margin-left: 0px;
}
`);

export const StyledImageFive = styled.div<StyledImageProps>(({image})=>`
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
  width: auto;
  height: 100%;
  border: none;
  margin-right: 0px;
  margin-left: 0px;
}
`);

export const StyledImageSix = styled.div<StyledImageProps>(({image})=>`
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
  width: auto;
  height: 100%;
  border: none;
  margin-right: 0px;
  margin-left: 0px;
}
`);

export const StyledImageSeven = styled.div<StyledImageProps>(({image})=>`
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
  width: auto;
  height: 100%;
  border: none;
}
`);

export const StyledImageEight = styled.div<StyledImageProps>(({image})=>`
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
  width: auto;
  height: 100%;
  border: none;
}
`);





