import styled from "styled-components";

const size = {
  mobileM: "768px",
};

export const device = {
  mobileM: `(max-width: ${size.mobileM})`,
};

export const StyledQuote = styled.div`
  font-family: TWKLausanneMedium;
  line-height: 150%;
  font-size: 18px;
  text-align: center;
  width: 50%;
  margin: auto;
  margin-top: 20px;
 
  @media ${device.mobileM} { 
    width: 85vw;
    font-size: 16px;
}
`;

export const StyledHeading = styled.div`

  text-align: center;
  font-family: TWKLausanneMedium;
  line-height: 150%;
  font-size: 14px;
  text-transform: uppercase;
`;

export const StyledContainer = styled.div`

 
  color: #0e407e;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-top: 8px;
  font-family: TWKLausanneMedium;
  line-height: 150%;
  font-size: 18px;
  background-color: #f9f9f9;
  
  
`;
