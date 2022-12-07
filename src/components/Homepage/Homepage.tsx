
import {
    StyledNavItems,
    StyledIntro,
    StyledNavbar,
    StyledNavItemOne,
    StyledNavItemTwo,
    StyledNavItemThree,
    StyledCursorHorizontal,   
    StyledCursorVertical,  
    StyledGrid,
    StyledCaseStudyOneEmpty,
    StyledCaseStudyTwo,
    StyledCaseStudyThree,
    StyledCaseStudyFour,
    StyledCaseStudyFive,
    StyledCaseStudySix,
    StyledMainContent,
    StyledFooter,
    StyledFooterItemOne,
    StyledFooterItemTwo,
    StyledFooterItemThree,
    StyledFooterItemFour,
    StyledCaseStudyOneActive,
  } from "./Homepage.styles"

import { useEffect, useState } from "react"

const Homepage = () => {
    type HomepageProps = {
      
    }
    
   const [position, setPosition] = useState<any>(0)


    const getPosition = (e: React.MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
        // console.log(x)
        setPosition(y)
        console.log(position)
    }
  


  return (
    <>
  <StyledMainContent onMouseMove={getPosition}>
  <StyledCursorHorizontal position={position} />
  <StyledCursorVertical/>
    
    <StyledNavbar>
    <StyledIntro>Anya is a product designer creating soulful & strategic experiences, with a love for programming </StyledIntro>
    <StyledNavItems>
        <StyledNavItemOne>/ work</StyledNavItemOne>
        <StyledNavItemTwo>/ info</StyledNavItemTwo>
        <StyledNavItemThree>/ code</StyledNavItemThree>
        </StyledNavItems>
    </StyledNavbar>
    
   
    
    <StyledGrid>
        <StyledCaseStudyOneEmpty>
        </StyledCaseStudyOneEmpty>
        <StyledCaseStudyOneActive position={position}>
        </StyledCaseStudyOneActive>
        <StyledCaseStudyTwo>
            {/* <StyledImageTwo src={macbook} alt="macbook" ></StyledImageTwo> */}
        </StyledCaseStudyTwo>
        <StyledCaseStudyThree>
        </StyledCaseStudyThree>
        <StyledCaseStudyFour>
        </StyledCaseStudyFour>
        <StyledCaseStudyFive>
        </StyledCaseStudyFive>
        <StyledCaseStudySix>
        </StyledCaseStudySix>
    </StyledGrid>
    
    </StyledMainContent>
    <StyledFooter>
        <StyledFooterItemOne>anya.drozdova@gmail.com</StyledFooterItemOne>
        <StyledFooterItemTwo>LinkedIn</StyledFooterItemTwo>
        <StyledFooterItemThree>07426728951</StyledFooterItemThree>
        <StyledFooterItemFour>Instagram</StyledFooterItemFour>
    </StyledFooter> 

    </>
  )
}

export default Homepage