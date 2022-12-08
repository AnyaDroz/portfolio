import React, { ReactPropTypes } from 'react'
import { StyledProps } from 'styled-components'

import {StyledImage} from "./Heroimage.styles"
// import image from "../../../images/ProjectFive.png"



const Heroimage = ({image}:any) => {
  //shouldnt be any^
  return (
    <>
    <StyledImage image={image}/>
    </>
  )
}

export default Heroimage