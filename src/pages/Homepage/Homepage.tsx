
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
    StyledCaseStudyFiveActive,
    StyledCaseStudySixActive,
    StyledLogo,
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

  const routeChangeSix= (e: React.MouseEvent) => { 
    console.log("click")
    let path = `/Hydra`; 
    navigate(path);
  }

    const getPosition = (e: React.MouseEvent) => {
        const x = e.clientX
        const y = e.clientY
        setPositiony(y)
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
        setOffset(offset)
        return () => window.removeEventListener('scroll', onScroll);
        
    }, []);


    console.log(offset); 
    console.log(positiony); 


  return (
    
    <>

  <StyledMainContent onMouseMove={getPosition}>
  <StyledCursorHorizontal positiony={positiony} offset={offset}/>
  <StyledCursorVertical positionx={positionx} offset={offset}/>
  <StyledNavbar ref={introContainerRef}>
    <StyledLogo/>
    <StyledIntro>Anya is a product designer creating soulful & strategic experiences, with a love for programming.</StyledIntro>
  <StyledNavItems>
    <StyledNavItemOne >/ work</StyledNavItemOne>
    <StyledNavItemTwo>/ info</StyledNavItemTwo>
    <StyledNavItemThree>/ code</StyledNavItemThree>
    </StyledNavItems>
  </StyledNavbar>
    <StyledGrid>
      <StyledCaseStudyOneEmpty ref={firstContainerRef} onClick={routeChangeOne}/>
      <StyledCaseStudyOneActive offset={offset} positiony={positiony} positionx={positionx} introHeight={introHeight} onClick={routeChangeOne}/>
      <StyledCaseStudyTwoEmpty onClick={routeChangeTwo}/>
      <StyledCaseStudyTwoActive offset={offset} differenceWidth={differenceWidth} positiony={positiony} positionx={positionx} introHeight={introHeight} onClick={routeChangeTwo}/>
      <StyledCaseStudyThreeEmpty onClick={routeChangeThree}/>
      <StyledCaseStudyThreeActive offset={offset} onClick={routeChangeThree} differenceHeight={differenceHeight} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
      <StyledCaseStudyFourEmpty onClick={routeChangeFour}/>
      <StyledCaseStudyFourActive offset={offset} onClick={routeChangeFour} differenceHeight={differenceHeight} differenceWidth={differenceWidth} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
      <StyledCaseStudyFiveEmpty onClick={routeChangeFive}/>
      <StyledCaseStudyFiveActive offset={offset} onClick={routeChangeFive} differenceHeight={differenceHeight} differenceWidth={differenceWidth} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
      <StyledCaseStudySixEmpty onClick={routeChangeSix}/>
      <StyledCaseStudySixActive offset={offset} onClick={routeChangeSix} differenceHeight={differenceHeight} differenceWidth={differenceWidth} positiony={positiony} positionx={positionx} introHeight={introHeight}/>
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