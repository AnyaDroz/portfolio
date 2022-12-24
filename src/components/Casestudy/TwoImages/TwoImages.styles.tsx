import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

type StyledContainerProps = {
  color: string;
};

export const StyledContainerOne = styled.div<StyledContainerProps>(
  ({ color }) => `
  
  grid-column-start: 1;
  grid-column-end: 13;
  background-color: ${color};
 

@media ${device.mobileM} { 
  grid-column-start: 1;
  grid-column-end: 25;
  grid-row-start: 1;
  grid-row-end: 2;
 
  }
`
);

export const StyledContainerTwo = styled.div<StyledContainerProps>(
  ({ color }) => `

  grid-column-start: 13;
  grid-column-end: 25;
  background-color: ${color};
  

@media ${device.mobileM} { 
  grid-column-start: 1;
  grid-column-end: 25;
  grid-row-start: 2;
  grid-row-end: 3;
 
 
}`
);

type StyledImagePropsOne = {
  image: string;
  desktopSizeOne: string;
  mobileSizeOne: string;

};

export const StyledImageOne = styled.div<StyledImagePropsOne>(
  ({ image, desktopSizeOne, mobileSizeOne  }) => `
  margin: auto;
  height: 500px;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${desktopSizeOne}; 
  position:relative;
  
@media ${device.mobileM} { 
  margin: auto;
  height: 300px;
  background-size: ${mobileSizeOne};
  }`
);

type StyledImagePropsTwo = {
  image: string;
  desktopSizeTwo: string;
  mobileSizeTwo: string;
};


export const StyledImageTwo = styled.div<StyledImagePropsTwo>(
  ({ image, desktopSizeTwo, mobileSizeTwo  }) => `
  height: 500px;
  background-image:url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${desktopSizeTwo}; 
  position:relative;

@media ${device.mobileM} { 
  margin: auto;
  height: 300px;
  background-size: ${mobileSizeTwo};
  }`
);
