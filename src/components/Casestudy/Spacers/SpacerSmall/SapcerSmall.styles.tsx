import styled from "styled-components";

const size = {
   mobileM: '768px', 
}
 
export const device = {
   mobileM: `(max-width: ${size.mobileM})`, 
};

export const StyledSmallSpacer = styled.div`
   height: 20px;
   width: auto;
   
   @media ${device.mobileM} { 
   height: 5px;
   width: auto;
}`