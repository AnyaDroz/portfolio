import styled from "styled-components";

const size = {
  mobileM: '768px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`, 
};

type StyledContainerProps ={
  color: string,
}

export const StyledContainerOne = styled.div<StyledContainerProps>(({color})=>`
  padding: 40px;
  grid-column-start: 1;
  grid-column-end: 13;
  background-color: ${color};
 

@media ${device.mobileM} { 
  grid-column-start: 1;
  grid-column-end: 25;
  grid-row-start: 1;
  grid-row-end: 2;
  padding: 0px;
  }
`);

export const StyledContainerTwo = styled.div<StyledContainerProps>(({color})=>`
  padding: 40px;
  grid-column-start: 13;
  grid-column-end: 25;
  background-color: ${color};
  

@media ${device.mobileM} { 
  grid-column-start: 1;
  grid-column-end: 25;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 50px;
 
}`);

type StyledImageProps = {
    image: string,
  }

export const StyledImageOne = styled.div<StyledImageProps>(({image})=>`
  margin: auto;
  height: 500px;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; 
  position:relative;
  
@media ${device.mobileM} { 
  margin: auto;
  height: 300px;
  }`);

export const StyledImageTwo = styled.div<StyledImageProps>(({image})=>`
  height: 500px;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; 
  position:relative;

@media ${device.mobileM} { 
  margin: auto;
  height: 300px;
  background-size: 120%; 
  }`);


