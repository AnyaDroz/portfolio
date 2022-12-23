import styled from "styled-components"
const size = {
  mobileM: '768px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledHeader = styled.div`
    font-family:TWKLausanneHeavy;
    line-height: 150%;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const StyledBulletPoint = styled.div`
    margin-bottom: 10px;
`;

export const StyledTextContainer = styled.div`
   width: 20vw;
   font-family:TWKLausanneLight;
    line-height: 150%;
    font-size: 16px;
    margin-top: 50px;

    @media ${device.mobileM} { 
      margin-top: 0px;
      font-size: 14px;
    width: 90vw;
    margin: auto;
    padding-bottom: 16px;
  }
`;


type StyledImageProps = {
    image: string,
  }

export const StyledImageContainerOne = styled.div<StyledImageProps>(({image})=>`
 
 height: 100vw;
 width: 100vw;
 margin: auto;
    background-image:url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    @media ${device.mobileM} {
      height: 400px; 
      background-size: 60%;
      margin: auto;
      padding-top: 50px;
  }
`);

export const StyledImageContainerTwo = styled.div<StyledImageProps>(({image})=>`

height: 100vw;
 width: 100vw;
 margin: auto;

    background-image:url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 

    @media ${device.mobileM} { 
      height: 400px;
      background-size: 60%;
      margin-top: 20px;
  }
`);

export const StyledImageContainer = styled.div`
display: flexbox;
gap: 10px;
justify-self: center;
justify-content: center;  
margin-top: 50px;
margin-bottom: 50px;

@media ${device.mobileM} { 
  display: block;
  margin-top: 0px;
  }
`;

export const StyledContainer = styled.div`
display: flexbox;
gap: 10px;
background-color:#F9F9F9;
width: 100vw;
justify-content: center; 

@media ${device.mobileM} { 
  display: block;
  }
`;
