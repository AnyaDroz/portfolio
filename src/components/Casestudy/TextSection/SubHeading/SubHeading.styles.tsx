import styled from "styled-components";

const size = {
    mobileM: '768px', 
  }
  
  export const device = {
    mobileM: `(max-width: ${size.mobileM})`, 
  };

export const StyledSubHeading = styled.div`
grid-column-start: 11;
    grid-column-end: 20;
    font-family:TWKLausanneLight;
    line-height: 150%;
    font-size: 14px;
    border-bottom: 1px solid black;
    padding-bottom: 12px;
    text-transform: uppercase;

    @media ${device.mobileM} { 
    grid-column-start: 1;
    grid-column-end: 25; 
    border-bottom: 1px solid black;
    padding-bottom: 8px;
    text-transform: uppercase;
}`;