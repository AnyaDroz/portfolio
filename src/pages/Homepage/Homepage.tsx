
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
    StyledCaseStudyTwoEmpty,
    StyledCaseStudyTwoActive,
    StyledCaseStudyThreeEmpty,
    StyledCaseStudyFourEmpty,
    StyledCaseStudyFiveEmpty,
    StyledCaseStudySixEmpty,
    StyledMainContent,
    StyledFooter,
    StyledFooterItemOne,
    StyledFooterItemTwo,
    StyledFooterItemThree,
    StyledFooterItemFour,
    StyledCaseStudyOneActive,
  } from "./Homepage.styles"


import { useEffect, useState } from "react"


const projects: Array<{name: string, defaultImage: string, ActiveImage: string}> = [
  {
    name: "Buyer Upgrades",
    defaultImage: "",
    ActiveImage: ""
  }
]





const Homepage = () => {

 
    
   const [positiony, setPositiony] = useState<any>(0)
   const [positionx, setPositionx] = useState<any>(0)


    const getPosition = (e: React.MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
        setPositiony(y)
        setPositionx(x)
   
    }


  return (
    <>
  <StyledMainContent onMouseMove={getPosition}>
  <StyledCursorHorizontal positiony={positiony} />
  <StyledCursorVertical positionx={positionx}/>
  
  <StyledNavbar>
  <StyledIntro>Anya is a product designer creating soulful & strategic experiences, with a love for programming.</StyledIntro>
  <StyledNavItems>
      <StyledNavItemOne>/ work</StyledNavItemOne>
      <StyledNavItemTwo>/ info</StyledNavItemTwo>
      <StyledNavItemThree>/ code</StyledNavItemThree>
      </StyledNavItems>
  </StyledNavbar>
    
   
    
   
    
    <StyledGrid>
    {/* {projects.map((item, index) => {
        return (
          <StyledCaseStudy
          image={projects.DefaultImage}
          />
          <StyledCaseStudyActive
          image={projects.ActiveImage}
          position={position} 
          positionx={positionx}
          />
        );
      })} */}
        <StyledCaseStudyOneEmpty>
        </StyledCaseStudyOneEmpty>
        <StyledCaseStudyOneActive positiony={positiony} positionx={positionx}>
        </StyledCaseStudyOneActive>
        
        <StyledCaseStudyTwoEmpty>
        </StyledCaseStudyTwoEmpty>
        <StyledCaseStudyTwoActive positiony={positiony} positionx={positionx}>
        </StyledCaseStudyTwoActive>


        <StyledCaseStudyThreeEmpty>
        </StyledCaseStudyThreeEmpty>


        <StyledCaseStudyFourEmpty>
        </StyledCaseStudyFourEmpty>
        <StyledCaseStudyFiveEmpty>
        </StyledCaseStudyFiveEmpty>
        <StyledCaseStudySixEmpty>
        </StyledCaseStudySixEmpty>
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