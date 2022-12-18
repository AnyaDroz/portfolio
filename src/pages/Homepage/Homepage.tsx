
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
    StyledCaseStudyFourActive,
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
    StyledCaseStudyThreeActive,
    StyledCaseStudyFiveActive
  } from "./Homepage.styles"


import { useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


const Homepage = () => {
  const firstContainerRef = useRef<any>(null);
  const introContainerRef = useRef<any>(null);
  const [positiony, setPositiony] = useState<any>(0)
  const [positionx, setPositionx] = useState<any>(0)
  const [differenceWidth, setdifferenceWidth] = useState<any>(0)
  const [differenceHeight, setdifferenceHeight] = useState<any>(0)
  const [introHeight, setintroHeight] = useState<any>(0)
  const [offset, setOffset] = useState<any>(0);
  let navigate = useNavigate();

  const routeChangeOne = (e: React.MouseEvent) => { 
    console.log("click")
    let path = `/Buyerupgrades`; 
    navigate(path);
  }

  const routeChangeTwo = (e: React.MouseEvent) => { 
    console.log("click")
    let path = `/Multitransactions`; 
    navigate(path);
  }

  const routeChangeThree = (e: React.MouseEvent) => { 
    console.log("click")
    let path = `/Instantaccess`; 
    navigate(path);
  }

  const routeChangeFour = (e: React.MouseEvent) => { 
    console.log("click")
    let path = `/Modularpricing`; 
    navigate(path);
  }

  const routeChangeFive = (e: React.MouseEvent) => { 
    console.log("click")
    let path = `/Quotes`; 
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

      useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        console.log(offset)
        return () => window.removeEventListener('scroll', onScroll);
        
    }, []);


    console.log(offset); 


  return (
    
    <>
    
  <StyledMainContent onMouseMove={getPosition}>
  <StyledCursorHorizontal positiony={positiony}/>
  <StyledCursorVertical positionx={positionx} offset={offset}/>
  <StyledNavbar ref={introContainerRef}>
    <StyledIntro>Anya is a product designer creating soulful & strategic experiences, with a love for programming.</StyledIntro>
  <StyledNavItems>
    <StyledNavItemOne >/ work</StyledNavItemOne>
    <StyledNavItemTwo>/ info</StyledNavItemTwo>
    <StyledNavItemThree>/ code</StyledNavItemThree>
    </StyledNavItems>
  </StyledNavbar>
    <StyledGrid>
      <StyledCaseStudyOneEmpty ref={firstContainerRef} onClick={routeChangeOne}/>
      <StyledCaseStudyOneActive positiony={positiony} positionx={positionx} introHeight={introHeight} onClick={routeChangeOne}/>
      <StyledCaseStudyTwoEmpty onClick={routeChangeTwo}/>
      <StyledCaseStudyTwoActive differenceWidth={differenceWidth} positiony={positiony} positionx={positionx} introHeight={introHeight} onClick={routeChangeTwo}/>
      <StyledCaseStudyThreeEmpty onClick={routeChangeThree}/>
      <StyledCaseStudyThreeActive onClick={routeChangeThree} differenceHeight={differenceHeight} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
      <StyledCaseStudyFourEmpty onClick={routeChangeFour}/>
      <StyledCaseStudyFourActive onClick={routeChangeFour} differenceHeight={differenceHeight} differenceWidth={differenceWidth} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
      <StyledCaseStudyFiveEmpty onClick={routeChangeFive}/>
      <StyledCaseStudyFiveActive onClick={routeChangeFive} differenceHeight={differenceHeight} differenceWidth={differenceWidth} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
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