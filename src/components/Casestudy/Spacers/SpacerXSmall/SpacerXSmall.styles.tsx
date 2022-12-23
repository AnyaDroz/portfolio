import styled from "styled-components";

const size = {
   mobileM: '768px', 
}
 
export const device = {
   mobileM: `(max-width: ${size.mobileM})`, 
};

export const StyledXSmallSpacer = styled.div`
   height: 15px;
   width: auto;

   @media ${device.mobileM} { 
   height: 15px;
   width: auto;
}`