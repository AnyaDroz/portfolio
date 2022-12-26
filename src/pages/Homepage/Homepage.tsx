import {
  StyledNavItems,
  StyledIntro,
  StyledNavbar,
  StyledNavItem,
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
  StyledCaseStudyOneActive,
  StyledCaseStudyThreeActive,
  StyledCaseStudyFiveActive,
  StyledCaseStudySixActive,
  StyledContainerLogo,
} from "./Homepage.styles";
import Logo from "../../components/Logo/Logo";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PasscodeChecker from "../../components/PasscodeChecker/PasscodeChecker";
import SpacerXSmall from "../../components/Casestudy/Spacers/SpacerXSmall/SpacerXSmall";

const Homepage = () => {
  const firstContainerRef = useRef<HTMLInputElement>(null);
  const introContainerRef = useRef<HTMLInputElement>(null);
  const [positionY, setPositionY] = useState<number>(0);
  const [positionX, setPositionX] = useState<number>(0);
  const [differenceWidth, setdifferenceWidth] = useState<number>(0);
  const [differenceHeight, setdifferenceHeight] = useState<number>(0);
  const [introHeight, setintroHeight] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  let navigate = useNavigate();

  const routeChangeBuyer = (e: React.MouseEvent) => {
    let path = `/buyer-upgrades`;
    navigate(path);
  };

  const routeChangeMulti = (e: React.MouseEvent) => {
    let path = `/multi-transactions`;
    navigate(path);
  };

  const routeChangeInstant = (e: React.MouseEvent) => {
    let path = `/instant-access`;
    navigate(path);
  };

  const routeChangeModular = (e: React.MouseEvent) => {
    let path = `/modular-pricing`;
    navigate(path);
  };

  const routeChangeQuotes = (e: React.MouseEvent) => {
    let path = `/quotes`;
    navigate(path);
  };

  const routeChangeHydra = (e: React.MouseEvent) => {
    let path = `/hydra`;
    navigate(path);
  };

  const getPosition = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setPositionY(y);
    setPositionX(x + window.scrollX);
    
    if (firstContainerRef.current) {
    const firstContainerWidth: number =
    firstContainerRef.current.getBoundingClientRect().width;
    setdifferenceWidth(firstContainerWidth)
    const firstContainerHeight: number =
      firstContainerRef.current.getBoundingClientRect().height;
    setdifferenceHeight(firstContainerHeight)}
    
    if (introContainerRef.current) {
    const introHeight: number =
      introContainerRef.current.getBoundingClientRect().height;
    setintroHeight(introHeight)}
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll, { passive: true });
    if (introContainerRef.current) {const introHeight: number =
      introContainerRef.current.getBoundingClientRect().height;
    setintroHeight(introHeight)}
    setOffset(offset);
    return () => window.removeEventListener("scroll", onScroll);
  }, []); 

  return (
    <>
      <PasscodeChecker />
      <StyledMainContent onMouseMove={getPosition}>
        <StyledCursorHorizontal introHeight={introHeight} positionY={positionY} offset={offset}/>
        <StyledCursorVertical positionX={positionX} offset={offset} />
        <StyledNavbar ref={introContainerRef}>
          <StyledContainerLogo>
            <Logo />
            <SpacerXSmall />
            <StyledIntro>
              Anya is a product designer creating soulful & strategic
              experiences, with a love for programming.
            </StyledIntro>
          </StyledContainerLogo>
          <StyledNavItems>
            <StyledNavItem>
              <a href="https://www.linkedin.com/in/anya-drozdova/" target="_blank" rel="noreferrer">LinkedIn </a>
            </StyledNavItem>
            <StyledNavItem>
              <a href="https://github.com/AnyaDroz?tab=repositories" target="_blank" rel="noreferrer">Github</a>
            </StyledNavItem>
          </StyledNavItems>
        </StyledNavbar>
        <StyledGrid>
          <StyledCaseStudyOneEmpty ref={firstContainerRef} onClick={routeChangeBuyer}/>
          <StyledCaseStudyOneActive offset={offset} positionY={positionY} positionX={positionX} introHeight={introHeight} onClick={routeChangeBuyer}/>
          <StyledCaseStudyTwoEmpty onClick={routeChangeMulti} />
          <StyledCaseStudyTwoActive offset={offset} differenceWidth={differenceWidth} positionY={positionY} positionX={positionX} introHeight={introHeight} onClick={routeChangeMulti}/>
          <StyledCaseStudyThreeEmpty onClick={routeChangeInstant} />
          <StyledCaseStudyThreeActive offset={offset} onClick={routeChangeInstant} differenceHeight={differenceHeight} positionY={positionY} positionX={positionX} introHeight={introHeight}/>
          <StyledCaseStudyFourEmpty onClick={routeChangeModular} />
          <StyledCaseStudyFourActive offset={offset} onClick={routeChangeModular} differenceHeight={differenceHeight} differenceWidth={differenceWidth} positionY={positionY} positionX={positionX} introHeight={introHeight}/>
          <StyledCaseStudyFiveEmpty onClick={routeChangeQuotes} />
          <StyledCaseStudyFiveActive offset={offset} onClick={routeChangeQuotes} differenceHeight={differenceHeight} differenceWidth={differenceWidth} positionY={positionY} positionX={positionX} introHeight={introHeight}/>
          <StyledCaseStudySixEmpty onClick={routeChangeHydra} />
          <StyledCaseStudySixActive offset={offset} onClick={routeChangeHydra} differenceHeight={differenceHeight} differenceWidth={differenceWidth} positionY={positionY} positionX={positionX} introHeight={introHeight}/>
        </StyledGrid>
        <StyledFooter>
          <div>Site built by me :)</div>
          <div>anya.productdesign@gmail.com</div>
          <div>07426728951</div>
        </StyledFooter>
      </StyledMainContent>
    </>
  );
};

export default Homepage;
