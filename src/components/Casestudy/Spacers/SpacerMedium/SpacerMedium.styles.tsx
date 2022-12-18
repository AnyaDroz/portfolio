import styled from "styled-components";

const size = {
   mobileM: '425px', 
}
 
export const device = {
   mobileM: `(max-width: ${size.mobileM})`, 
};

export const StyledMediumSpacer = styled.div`
   height: 50px;
   width: auto;

   @media ${device.mobileM} { 
   height: 10px;
   width: auto;
}`
