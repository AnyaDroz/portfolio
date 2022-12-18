import styled from "styled-components";

const size = {
  mobileM: '425px', 
}

export const device = {
  mobileM: `(max-width: ${size.mobileM})`, 
};

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  column-gap: 8px;
  overflow: hidden;

  @media ${device.mobileM} { 
    column-gap: 2px;
    margin: 8px;
  }
`;

