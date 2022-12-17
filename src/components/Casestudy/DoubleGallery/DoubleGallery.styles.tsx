import styled from "styled-components";

type StyledImageGallery = {
    color: string,
}

export const GalleryGrid = styled.div<StyledImageGallery>(({color})=>`
display: grid;
grid-template-columns: 50% 8px 50%;
grid-template-rows: 40vw 40vw 40vw;
padding: 16px;
background-color: ${color};
`);

type StyledImageProps = {
    image: string,
  }

export const StyledImageOne = styled.div<StyledImageProps>(({image})=>`
grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

`);

export const StyledImageTwo = styled.div<StyledImageProps>(({image})=>`
grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background-image:url(${image});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;

 

`);
export const StyledImageThree = styled.div<StyledImageProps>(({image})=>`
    grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image:url(${image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  
`);

export const StyledImageFour = styled.div<StyledImageProps>(({image})=>`
grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  background-image:url(${image});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;

  

`);

export const StyledImageFive = styled.div<StyledImageProps>(({image})=>`
grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  background-image:url(${image});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  
`);

export const StyledImageSix = styled.div<StyledImageProps>(({image})=>`
grid-column-start: 3;
  grid-column-end:4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-image:url(${image});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
`);





