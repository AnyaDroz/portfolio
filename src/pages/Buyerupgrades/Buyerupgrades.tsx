//components
import Heroimage from "../../components/Casestudy/Heroimage/Heroimage";
import Description from "../../components/Casestudy/Description/Description";
import FullBleedGif from "../../components/Casestudy/FullBleedGif/FullBleedGif";
import TwoImages from "../../components/Casestudy/TwoImages/TwoImages";
import SpacerMedium from "../../components/Casestudy/Spacers/SpacerMedium/SpacerMedium";
import SpacerLarge from "../../components/Casestudy/Spacers/SpacerLarge/SpacerLarge";
import ImageAndText from "../../components/Casestudy/ImageAndText/ImageAndText";
import DoubleGallery from "../../components/Casestudy/DoubleGallery/DoubleGallery";
import SingleImage from "../../components/Casestudy/SingleImage/SingleImage";
import SpacerXSmall from "../../components/Casestudy/Spacers/SpacerXSmall/SpacerXSmall";
import SpacerSmall from "../../components/Casestudy/Spacers/SpacerSmall/SpacerSmall";
import Heading from "../../components/Casestudy/TextSection/Heading/Heading";
import Paragraph from "../../components/Casestudy/TextSection/Paragraph/Paragraph";
import InlineImage from "../../components/Casestudy/TextSection/InlineImage/InlineImage";
import SubHeading from "../../components/Casestudy/TextSection/SubHeading/SubHeading";
import Quote from "../../components/Casestudy/TextSection/Quote/Quote";
import Callout from "../../components/Casestudy/TextSection/CallOut/CallOut";
//images
import BuyerProblemImage from "../../images/BuyerUpgradesInlineImage.png";
import Hero from "../../images/BuyerupgradesHero.png";
import BuyerChartOne from "../../images/BuyerChartOne.svg";
import BuyerChartTwo from "../../images/BuyerChartTwo.svg";
import BuyerUpgradeGifOne from "../../images/Buyerupgradesgif01.gif";
import BuyerResearchOne from "../../images/buyerresearchwall.png";
import BuyerResearchTwo from "../../images/buyerresearchwalltwo.png";
import BuyerWireframeOne from "../../images/BuyerWireframeOne.png";
import BuyerWireframeTwo from "../../images/BuyerWireframeTwo.png";
import BuyerWireframeThree from "../../images/BuyerWireframeThree.png";
import BuyerWireframeFour from "../../images/BuyerWireframeFour.png";
import BuyerWireframeFive from "../../images/BuyerWireframeFive.png";
import BuyerWireframeSix from "../../images/BuyerWireframeSix.png";
import BuyerWireframeSeven from "../../images/BuyerWireframeSeven.png";
import BuyerWireframeEight from "../../images/BuyerWireframeEight.png";
import BuyerScreen from "../../images/BuyerScreen.png";
import BuyerMobile from "../../images/BuyerMobile.png";
import BuyerComponents from "../../images/BuyerComponents.png";
import HighFidelityOne from "../../images/HighFidelityOne.png";
import HighFidelityTwo from "../../images/HighFidelityTwo.png";
import HighFidelityThree from "../../images/HighFidelityThree.png";
import HighFidelityFour from "../../images/HighFidelityFour.png";
import HighFidelityFive from "../../images/HighFidelityFive.png";
import HighFidelitySix from "../../images/HighFidelitySix.png";
import BuyerResultsGraph from "../../images/BuyerResultsGraph.svg";
import BuyerResultsOne from "../../images/BuyerResultsOne.png";
import BuyerBeforeAndAfter from "../../images/BuyerBeforeAndAfter.png";
import Logo from "../../components/Logo/Logo"
import { StyledLogoContainer} from "./Buyerupgrades.styles";
import BuyerResultsTwo from "../../images/BuyerResultsTwo.png";

const Buyerupgrades = () => {
  return (
    <div>
      <StyledLogoContainer>
      <Logo/>
      </StyledLogoContainer>
   
      <Heroimage
      sizeDesktop={"100vw"}
      sizeMobile={"140vw"}
      paddingMobile={0}
        position={"center"}
        padding={40}
        color={"#2D83D1"}
        image={Hero}
      ></Heroimage>
      <Description
        companyName={"iwocaPay"}
        projectName={"Buyer Upgrades"}
        description={"Get sellers paid more by increasing usage of Pay Later"}
      />
      <Heading>The problem</Heading>
      <SpacerSmall />
      <Callout>
        The seller’s customers, the buyers, aren’t utilising the Pay Later
        financing option, this means sellers aren’t seeing the growth benefit
        they expected.
      </Callout>
      <SpacerXSmall />
      {/* <InlineImage image={BuyerProblemImage} imageHeight={300} imageWidth={300}/><SpacerXSmall/> */}
      <Paragraph>
        To date our key outcome was to simply Get sellers paid. ﻿The focus was
        on the activation phase of a model called the Product-Led Growth
        Flywheel.
      </Paragraph>
      <SpacerXSmall />
      <Paragraph>
        Now, our strategy is to encourage the beginners to adopt. The jobs to be
        done is: as a seller, I want to offer financing to enable customers to
        purchase more and often, so I can grow my business.
      </Paragraph>
      <SpacerXSmall />
      <Paragraph>
        In a nutshell, we need to increase buyer conversion on Pay Later, for
        sellers to engage with iwocaPay.
      </Paragraph>
      <SpacerLarge />
      <FullBleedGif
        mobileWidth= {"95vw"}
        mobileHeight= {"65vw"}
        mobileMargin= {"20px"}
        mobileSize= {"cover"}
        marginTop={0}
        marginBottom={0}
        color={"white"}
        width={720}
        height={452}
        image={BuyerUpgradeGifOne}
      ></FullBleedGif>
      <SpacerLarge />
      <Heading>Competitors</Heading>
      <SpacerXSmall />
      <Paragraph>
        Trust & familiarity are connected, checkouts and banks build on users'
        existing mental models so that handling the money is a streamline
        experience. Taking a heuristic look at the interface of other B2B (&
        B2C) checkouts there are a few patterns worth noting.
      </Paragraph>
      <SpacerMedium />
      <SubHeading>White labelled</SubHeading>
      <SpacerSmall />
      <Paragraph>
        Keep it simple and straightforward, no distractions. Focus on the
        merchant & the order, not the payments provider.
      </Paragraph>
      <SpacerSmall />
      <SubHeading>max automated</SubHeading>
      <SpacerSmall />
      <Paragraph>
        Balance uses Open Banking to auto-assess the business and pre-fill
        information. We currently only use OB for instant transactions.
      </Paragraph>
      <SpacerSmall />
      <SubHeading>Single page process</SubHeading>
      <SpacerSmall />
      <Paragraph>
        The entire process, regardless of how you pay, the process for card
        payments or BNPL are all completed on steps on the same page.
      </Paragraph>
      <SpacerLarge />
      <Heading>Data</Heading>
      <SpacerSmall />
      <Paragraph>
        The number of Pay later transactions (our growth feature for sellers)
        isn’t going up - the majority of payments are through Pay now and for
        very small transaction values.
      </Paragraph>
      <SpacerLarge />
      <TwoImages
     desktopSizeOne={"contain"}
     mobileSizeOne={"contain"}
     desktopSizeTwo={"contain"}
     mobileSizeTwo={"fit"}
        imageOne={BuyerChartOne}
        imageTwo={BuyerChartTwo}
        color={"white"}
      />
      <SpacerLarge />
      <Heading>User insights</Heading>
      <SpacerSmall />
      <Paragraph>
        We already know, many businesses see the word interest & immediately
        think debt, but we also know there is an opportunity to reframe this
        attitude & with the prevailance of BNPL in consumer transactions, it’s
        only a matter of time before this becomes common place.
      </Paragraph>
      <SpacerMedium />
      <SubHeading>Debt Aversion</SubHeading>
      <SpacerSmall />
      <Quote>
        "I don't like owing people money and I don't like a paying interest
        unless I need to."
      </Quote>
      <SpacerSmall />
      <Quote>
        "I would never click pay later because I don't believe in taking on debt
        or anything like that."
      </Quote>
      <SpacerMedium />
      <SubHeading>Pay as late as possible</SubHeading>
      <SpacerSmall />
      <Paragraph>
        There is quite a large amount of insights that reveal this (new-ish)
        segment of businesses who understand that paying as late as possible is
        great for business.
      </Paragraph>
      <SpacerSmall />
      <Quote>
        "So we don’t have to think about it that much, and it's better business
        to pay it later as possible.”
      </Quote>
      <SpacerSmall />
      <Quote>
        “It depends how you'd normally pay them. You never pay an invoice
        straightaway. You always pay it later on the due date as it were.”
      </Quote>
      <SpacerMedium />
      <SubHeading>Mobilise the team</SubHeading>
      <SpacerSmall />
      <Paragraph>
        This was the first time we looked at the buyer side & it was important
        to get everyone’s perspectives and buy-in. This first phase consisted of
        presenting all the research we had and running a quick fire round of How
        Might We’s based on the problem area of the checkout experience.
      </Paragraph>
      <SpacerLarge />
      <ImageAndText
        imageOne={BuyerResearchOne}
        imageTwo={BuyerResearchTwo}
        header={"Top three HMWs"}
        bulletPointOne={
          "➊ HMW reduce the cognitive load by aligning to a users existing mental models of a digital payment experience? "
        }
        bulletPointTwo={
          "➋ HMW convert the opportunists at the moment of a transaction to try Pay Later?"
        }
        bulletPointThree={
          "➌ HMW improve the perceptions of security by leveraging on familiarity and the merchant sending the order?"
        }
      />
      <SpacerLarge />
      <Heading>Low fidelity</Heading>
      <SpacerSmall />
      <Paragraph>
        After establishing our HMWs and evaluating the mental models our
        customers have around payments and payment terms - I worked on wire
        frames with ‘small but mighty’ changes that would address drop offs.
      </Paragraph>
      <SpacerLarge />
      <DoubleGallery
        mobilePadding={""}
        desktopPadding={""}
        mobileSize={"80% auto"}
        mobileGrid={"65vw 65vw 65vw 65vw 65vw 65vw 72vw 72vw;"}
        grid={"40vw 40vw 40vw 40vw"}
        color={"white"}
        imageOne={BuyerWireframeOne}
        imageTwo={BuyerWireframeTwo}
        imageThree={BuyerWireframeThree}
        imageFour={BuyerWireframeFour}
        imageFive={BuyerWireframeFive}
        imageSix={BuyerWireframeSix}
        imageSeven={BuyerWireframeSeven}
        imageEight={BuyerWireframeEight}
      />
      <SpacerLarge />
      <Heading>High Fidelity</Heading>
      <SpacerXSmall />
      <Paragraph>
        We upgraded the checkout experience in two phases, the first focussed on
        small but impactful changes at the top of the funnel. The second release
        re-designed the ‘Pay Later’ flow and buyer sign up into a single page
        process.
      </Paragraph>
      <SpacerLarge />
      <SingleImage
      mobileFit={""}
        fit={"contain"}
        height={500}
        marginTop={50}
        marginBottom={50}
        image={BuyerBeforeAndAfter}
        color={"#2D83D1"}
      />
      <SpacerLarge />
      <Heading>Release One</Heading>
      <SpacerMedium />
      <SubHeading>01 no forced account creation</SubHeading>
      <SpacerSmall />
      <Paragraph>
        Email friction is the 2nd top reason for all checkout abandonment. By
        exposing the email input, we’re not overwhelming users before they’ve
        made their choice.
      </Paragraph>
      <SpacerMedium />
      <SubHeading>02 exposing pay later</SubHeading>
      <SpacerSmall />
      <Paragraph>
        On the old version of the checkout, the user had to click on the Pay
        Later option to see any of the benefits. In the new design we’ve exposed
        and brought attention to the value of Pay Later.
      </Paragraph>
      <SpacerMedium />
      <SubHeading>03 new copy</SubHeading>
      <SpacerSmall />
      <Paragraph>
        Instead of Pay Later which is less common in B2B (as invoices already by
        default allow this option) we’ve highlighted the fact the payment is
        split into smaller chunks
      </Paragraph>
      <SpacerMedium />
      <SubHeading>04 visual explanation of pay later</SubHeading>
      <SpacerSmall />
      <Paragraph>
        We’ve made the visual more appealing and highlighted that the user pays
        £0 today, which was never clear in the old design.
      </Paragraph>
      <SpacerMedium />
      <SubHeading>05 modularity</SubHeading>
      <SpacerSmall />
      <Paragraph>
        The new layout allows us the flexibility of removing or adding new
        payment options more easily.
      </Paragraph>
      <SubHeading>06 security & trust</SubHeading>
      <SpacerSmall />
      <Paragraph>
        Less iwocaPay branding, and removal of the trustpilot review (it was
        highly unusual for a payment provider to show a review).
      </Paragraph>
      <SpacerSmall />
      <Paragraph>
        We’ve removed the small print about interest and added this information
        to the main copy.
      </Paragraph>
      <SpacerSmall />
      <Paragraph>
        Instead a small discrete padlock with the messaging ‘secure payments’ is
        added beneath the CTA.
      </Paragraph>
      <SpacerMedium />
      <SubHeading>07 Exit Screen</SubHeading>
      <SpacerSmall />
      <Paragraph>
        Users who move their cursor to close the window, or remain inactive will
        be asked their reason for leaving so we can learn more about drop-offs.
      </Paragraph>
      <SpacerMedium />
      <SubHeading>08 faq has exposed supporting information</SubHeading>
      <SpacerSmall />
      <Paragraph>
        The FAQ provides information without the user having to click on it.
      </Paragraph>
      <SpacerLarge />
      <TwoImages
        color={"#2D83D1"}
        imageOne={BuyerScreen}
        imageTwo={BuyerMobile}
        desktopSizeOne={"80% auto"}
        mobileSizeOne={"auto 80%"}
        desktopSizeTwo={"auto 80%"}
        mobileSizeTwo={"auto 80%"}
      />
      <SpacerXSmall />
      <SingleImage
        mobileFit={"950px auto"}
        fit={"cover"}
        height={600}
        marginTop={0}
        marginBottom={0}
        image={BuyerComponents}
        color={"#2D83D1"}
      />
      <SpacerLarge />
      <Heading>Release two</Heading>
      <SpacerSmall />
      <Paragraph>
        The second release enables seller to ‘brand’ their checkout by adding a
        logo and changing the colours of CTAs and the visuals to match their
        websites. It consolidates all the ‘Pay Later’ steps into a single page
        checkout, to make the process more streamline, allow users to go back
        and forth between steps and feel less like a sign up.
      </Paragraph>
      <SpacerLarge />
      <DoubleGallery
       mobilePadding={"20px"}
       desktopPadding={"60px"}
      mobileSize={"90% auto"}
        mobileGrid={"65vw 65vw 65vw 65vw 65vw 65vw"}
        color={"#2D83D1"}
        imageOne={HighFidelityOne}
        imageTwo={HighFidelityTwo}
        imageThree={HighFidelityThree}
        imageFour={HighFidelityFour}
        imageFive={HighFidelityFive}
        imageSix={HighFidelitySix}
        grid={"30vw 30vw 30vw"}
      />
      <SpacerLarge />
      <Heading>The result</Heading>
      <SpacerSmall />
      <Paragraph>
        It’s still early days... however, we we’ve released this checkout with
        one of our active B2B e-commerce merchants and here are some early
        indicators that the project has been successful.
      </Paragraph>
      <Paragraph>
        Our test merchant has processed almost 3x as much in volume through Pay
        later than Pay now.
      </Paragraph>
      <SpacerLarge />
      <TwoImages
        color={"white"}
        imageOne={BuyerResultsOne}
        imageTwo={BuyerResultsTwo}
        desktopSizeOne={"80% auto"}
        mobileSizeOne={"90% auto"}
        desktopSizeTwo={"auto 40%"}
        mobileSizeTwo={"auto 40%"}
      />
      <SpacerLarge />
  
      </div>
  );
};

export default Buyerupgrades;
