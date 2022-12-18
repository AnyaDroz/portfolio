import styled from "styled-components"
const size = {
  mobileM: '425px', 
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
   width: 220px;
   font-family:TWKLausanneLight;
    line-height: 150%;
    font-size: 16px;
    margin-top: 50px;
    @media ${device.mobileM} { 
      font-size: 14px;
    width: 100%;
  }
`;


type StyledImageProps = {
    image: string,
  }

export const StyledImageContainerOne = styled.div<StyledImageProps>(({image})=>`
 
 height: 558px;
 width: 419px;
  
    background-image:url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    @media ${device.mobileM} { 
      height: 500px;

  }
`);

export const StyledImageContainerTwo = styled.div<StyledImageProps>(({image})=>`
  height: 558px;
    width: 419px;

    background-image:url(${image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 

    @media ${device.mobileM} { 
      height: 500px;
   
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
