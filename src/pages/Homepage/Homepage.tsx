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
  StyledLogo,
  StyledContainerLogo,
} from "./Homepage.styles";

import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const firstContainerRef = useRef<any>(null);
  const introContainerRef = useRef<any>(null);
  const [positiony, setPositiony] = useState<any>(0);
  const [positionx, setPositionx] = useState<any>(0);
  const [differenceWidth, setdifferenceWidth] = useState<any>(0);
  const [differenceHeight, setdifferenceHeight] = useState<any>(0);
  const [introHeight, setintroHeight] = useState<any>(0);
  const [offset, setOffset] = useState<any>(0);
  let navigate = useNavigate();

  const routeChangeBuyer= (e: React.MouseEvent) => {
    console.log("click");
    let path = `/buyer-upgrades`;
    navigate(path);
  };

  const routeChangeMulti = (e: React.MouseEvent) => {
    console.log("click");
    let path = `/multi-transactions`;
    navigate(path);
  };

  const routeChangeInstant = (e: React.MouseEvent) => {
    console.log("click");
    let path = `/instant-access`;
    navigate(path);
  };

  const routeChangeModular = (e: React.MouseEvent) => {
    console.log("click");
    let path = `/modular-pricing`;
    navigate(path);
  };

  const routeChangeQuotes= (e: React.MouseEvent) => {
    console.log("click");
    let path = `/quotes`;
    navigate(path);
  };

  const routeChangeHydra = (e: React.MouseEvent) => {
    console.log("click");
    let path = `/Hhdra`;
    navigate(path);
  };

  const getPosition = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    setPositiony(y);
    setPositionx(x + window.scrollX);

    const firstContainerWidth: number =
      firstContainerRef.current.getBoundingClientRect().width;
    setdifferenceWidth(firstContainerWidth);
    const firstContainerHeight: number =
      firstContainerRef.current.getBoundingClientRect().height;
    setdifferenceHeight(firstContainerHeight);
    const introHeight: number =
      introContainerRef.current.getBoundingClientRect().height;
    setintroHeight(introHeight);
  };

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    console.log(offset);
    setOffset(offset);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <StyledMainContent onMouseMove={getPosition}>
        <StyledCursorHorizontal positiony={positiony} offset={offset} />
        <StyledCursorVertical positionx={positionx} offset={offset} />
        <StyledNavbar ref={introContainerRef}>
          <StyledContainerLogo>
            <StyledLogo />
            <StyledIntro>
              Anya is a product designer creating soulful & strategic
              experiences, with a love for programming.
            </StyledIntro>
          </StyledContainerLogo>
          <StyledNavItems>
            <StyledNavItem>
              <a
                href="https://www.linkedin.com/in/anya-drozdova/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </StyledNavItem>
            <StyledNavItem>
              <a
                href="https://github.com/AnyaDroz?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </StyledNavItem>
          </StyledNavItems>
        </StyledNavbar>
        <StyledGrid>
          <StyledCaseStudyOneEmpty
            ref={firstContainerRef}
            onClick={routeChangeBuyer}
          />
          <StyledCaseStudyOneActive
            offset={offset}
            positiony={positiony}
            positionx={positionx}
            introHeight={introHeight}
            onClick={routeChangeBuyer}
          />
          <StyledCaseStudyTwoEmpty onClick={routeChangeMulti} />
          <StyledCaseStudyTwoActive
            offset={offset}
            differenceWidth={differenceWidth}
            positiony={positiony}
            positionx={positionx}
            introHeight={introHeight}
            onClick={routeChangeMulti}
          />
          <StyledCaseStudyThreeEmpty onClick={routeChangeInstant} />
          <StyledCaseStudyThreeActive
            offset={offset}
            onClick={routeChangeInstant}
            differenceHeight={differenceHeight}
            positiony={positiony}
            positionx={positionx}
            introHeight={introHeight}
          />
          <StyledCaseStudyFourEmpty onClick={routeChangeModular} />
          <StyledCaseStudyFourActive
            offset={offset}
            onClick={routeChangeModular}
            differenceHeight={differenceHeight}
            differenceWidth={differenceWidth}
            positiony={positiony}
            positionx={positionx}
            introHeight={introHeight}
          />
          <StyledCaseStudyFiveEmpty onClick={routeChangeQuotes} />
          <StyledCaseStudyFiveActive
            offset={offset}
            onClick={routeChangeQuotes}
            differenceHeight={differenceHeight}
            differenceWidth={differenceWidth}
            positiony={positiony}
            positionx={positionx}
            introHeight={introHeight}
          />
          <StyledCaseStudySixEmpty onClick={routeChangeHydra} />
          <StyledCaseStudySixActive
            offset={offset}
            onClick={routeChangeHydra}
            differenceHeight={differenceHeight}
            differenceWidth={differenceWidth}
            positiony={positiony}
            positionx={positionx}
            introHeight={introHeight}
          />
        </StyledGrid>
        <StyledFooter>
          <div>anya.drozdova@gmail.com</div>
          <div>07426728951</div>
        </StyledFooter>
      </StyledMainContent>
    </>
  );
};

export default Homepage;
