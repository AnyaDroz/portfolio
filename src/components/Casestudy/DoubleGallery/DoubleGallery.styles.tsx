import styled from "styled-components";

type StyledImageGallery = {
  color: string,
}

export const GalleryGrid = styled.div<StyledImageGallery>(({color})=>`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 40vw 40vw 40vw 40vw;
  background-color: ${color};
  padding-bottom: 40px;
  padding-top: 40px;
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 8px;
  margin-left: 16px;
  border: #c6c6c6 1px solid;
  margin-bottom: 16px;
`);

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
  border: #c6c6c6 1px solid;
`);

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
  border: #c6c6c6 1px solid;
  margin-bottom: 16px;
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
  border: #c6c6c6 1px solid;
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
  border: #c6c6c6 1px solid;
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
  border: #c6c6c6 1px solid;
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
  border: #c6c6c6 1px solid;
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
  border: #c6c6c6 1px solid;
`);





