import styled from "styled-components";

const size = {
    mobileM: '768px', 
}
  
export const device = {
    mobileM: `(max-width: ${size.mobileM})`, 
};


export const StyledParagraph = styled.div`
    grid-column-start: 11;
    grid-column-end: 20;
    font-family:TWKLausanneLight;
    line-height: 150%;
    font-size: 18px;
    
    @media ${device.mobileM} { 
    grid-column-start: 1;
    grid-column-end: 25; 
    font-size: 16px;
}`;