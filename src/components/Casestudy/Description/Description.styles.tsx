import styled from "styled-components";

const size = {
    mobileM: '425px', 
  }
  
export const device = {
    mobileM: `(max-width: ${size.mobileM})`, 
};

export const StyledDescriptionContainer = styled.div`
    margin-top:50px;
    grid-column-start: 2;
    grid-column-end: 8;
    margin-bottom: 80px;

@media ${device.mobileM} { 
    margin-top:20px;
    grid-column-start: 1;
    grid-column-end: 25;
    margin-bottom: 40px;
}`;

export const StyledCompanyName = styled.div`
    font-family: TWKLausanneLight;
    font-size: 18px;
    line-height: 150%;

@media ${device.mobileM} { 
    font-size: 16px;
    line-height: 150%;
}`;

export const StyledProjectName = styled.div`
font-family: TWKLausanneMedium;
font-size: 35px;
line-height: 150%;

@media ${device.mobileM} { 
    font-size: 24px;
    line-height: 150%;
}`;

export const StyledDescription = styled.div`
    font-family: TWKLausanneLight;
    font-size: 23px;
    line-height: 150%;

@media ${device.mobileM} { 
    font-size: 18px;
    line-height: 150%;
}`;



