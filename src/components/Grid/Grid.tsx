import React, { PropsWithChildren } from 'react'
import {StyledGrid} from "./Grid.styles"


const Grid = ({children}:PropsWithChildren) => {
  return (
   <StyledGrid>
     {children}
    </StyledGrid>
  )
}

export default Grid