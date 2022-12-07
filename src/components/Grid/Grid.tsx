import React from 'react'
import {StyledGrid} from "./Grid.styles"


const Grid = ({children}) => {
  return (
   <StyledGrid>
       {children}
       </StyledGrid>
  )
}

export default Grid