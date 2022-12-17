
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
    StyledCaseStudyThreeActive
  } from "./Homepage.styles"


import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const firstContainerRef = useRef<any>(null);
  const introContainerRef = useRef<any>(null);
  const [positiony, setPositiony] = useState<any>(0)
  const [positionx, setPositionx] = useState<any>(0)
  const [differenceWidth, setdifferenceWidth] = useState<any>(0)
  const [differenceHeight, setdifferenceHeight] = useState<any>(0)
  const [introHeight, setintroHeight] = useState<any>(0)
  let navigate = useNavigate();

  const routeChange = (e: React.MouseEvent) => { 
    console.log("click")
    let path = `/Buyerupgrades`; 
    navigate(path);
  }

    const getPosition = (e: React.MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
        setPositiony(y + window.scrollY)
        setPositionx(x + window.scrollX)

        const firstContainerWidth:number = firstContainerRef.current.getBoundingClientRect().width;
        setdifferenceWidth(firstContainerWidth)
        const firstContainerHeight:number = firstContainerRef.current.getBoundingClientRect().height;
        setdifferenceHeight(firstContainerHeight)
        const introHeight:number = introContainerRef.current.getBoundingClientRect().height;
        setintroHeight(introHeight)
      }


  return (
    <>
  <StyledMainContent onMouseMove={getPosition}>
  <StyledCursorHorizontal positiony={positiony}/>
  <StyledCursorVertical positionx={positionx} positiony={positiony}/>
  <StyledNavbar ref={introContainerRef}>
    <StyledIntro>Anya is a product designer creating soulful & strategic experiences, with a love for programming.</StyledIntro>
  <StyledNavItems>
    <StyledNavItemOne >/ work</StyledNavItemOne>
    <StyledNavItemTwo>/ info</StyledNavItemTwo>
    <StyledNavItemThree>/ code</StyledNavItemThree>
    </StyledNavItems>
  </StyledNavbar>
    <StyledGrid>
      <StyledCaseStudyOneEmpty ref={firstContainerRef} onClick={routeChange}/>
      <StyledCaseStudyOneActive 
      positiony={positiony} 
      positionx={positionx} 
      introHeight={introHeight}
      onClick={routeChange}
      />
      <StyledCaseStudyTwoEmpty/>
      <StyledCaseStudyTwoActive differenceWidth={differenceWidth} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
      <StyledCaseStudyThreeEmpty/>
      <StyledCaseStudyThreeActive differenceHeight={differenceHeight} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
      
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