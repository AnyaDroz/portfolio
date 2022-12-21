import React from 'react'
import Heroimage from '../../components/Casestudy/Heroimage/Heroimage'
import Description from '../../components/Casestudy/Description/Description'
import Heading from '../../components/Casestudy/TextSection/Heading/Heading'
import Callout from '../../components/Casestudy/TextSection/CallOut/CallOut'
import Paragraph from '../../components/Casestudy/TextSection/Paragraph/Paragraph'
import QuotesHero from "../../images/QuotesHero.png"
import SingleImage from '../../components/Casestudy/SingleImage/SingleImage'
import QuotesHighFid from "../../images/QuotesSingle.png"
import InlineImage from '../../components/Casestudy/TextSection/InlineImage/InlineImage'
import QuoteGraph from "../../images/InlineImageQuotes.png"
import BulletAndImage from '../../components/Casestudy/BulletAndImage/BulletAndImage'
import QuotesUserJourney from "../../images/QuotesUserJourney.png"
import QuotesIA from "../../images/QuotesIA.png"
import QuotesWireframeOne from "../../images/QuotesWireframeOne.png"
import QuotesWireframeTwo from "../../images/QuotesWireframeTwo.png"
import QuotesWireframeThree from "../../images/QuotesWireframeThree.png"
import QuotesWireframeFour from "../../images/QuotesWireframeFour.png"
import QuotesWireframeFive from "../../images/QuotesWireframeFive.png"
import QuotesWireframeSix from "../../images/QuotesWireframeSix.png"
import TripleGallery from '../../components/Casestudy/TripleGallery/TripleGallery'
import FullBleedGif from '../../components/Casestudy/FullBleedGif/FullBleedGif'
import SubHeading from '../../components/Casestudy/TextSection/SubHeading/SubHeading'
import Quote from "../../components/Casestudy/TextSection/Quote/Quote"
import QuotesMobileSingle from "../../images/QuotesMobileSingle.png"
import QuotesHighOne from "../../images/QuotesHighOne.png"
import FourByFourGrid from '../../components/Casestudy/FourByFourGrid/FourByFourGrid'
import QuotesHighTwo from "../../images/QuotesHighTwo.png"
import QuotesHighThree from "../../images/QuotesHighThree.png"
import QuotesHighFour from "../../images/QuotesHighFour.png"
import SpacerMedium from '../../components/Casestudy/Spacers/SpacerMedium/SpacerMedium'
import SpacerSmall from '../../components/Casestudy/Spacers/SpacerSmall/SpacerSmall'
import SpacerXSmall from '../../components/Casestudy/Spacers/SpacerXSmall/SpacerXSmall'
import SpacerLarge from "../../components/Casestudy/Spacers/SpacerLarge/SpacerLarge"

const Quotes = () => {
  return (
<div>
    <Heroimage position={"bottom"} padding={40} color={"#E29FBB"} image={QuotesHero}></Heroimage>
    <Description companyName={"iwoca"} projectName={"Quotes"} description={"Providing choice, early on."}/>
    <Heading>The problem</Heading><SpacerSmall/>
    <Callout>A customer applying for financing has no indication of what options are available</Callout><SpacerSmall/>
    <Paragraph>Currently, a customer applying for financing has no indication of what options are available, or what they might be eligible for, until they have completed a full application.</Paragraph><SpacerSmall/>
    <Paragraph>Additionally, the online signup only presents the Flexi-loan, which means customers are never exposed to the other products unless they contact someone or search the website.</Paragraph><SpacerLarge/>  
    <SingleImage fit={"contain"} height={500} marginTop={50} marginBottom={50} image={QuotesHighFid} color={"#F9F9F9"}/><SpacerLarge/>
    <Heading>Hypothesis</Heading><SpacerSmall/>
    <Paragraph>More customers will be willing to apply knowing what they are eligible for and how much it will cost. Fewer customers will drop-off if the quote matches the final offer - and by providing choice, we can serve more customers’ needs.</Paragraph><SpacerMedium/>
    <InlineImage image={QuoteGraph} imageHeight={208} imageWidth={469}/><SpacerMedium/>
    <Paragraph>The decline does not reflect the first funding increase across Funding Options portfolio (+13.1%) - we believe we lost share to just Cashflow and Esme, in part because they give customers instant, accurate quotes.</Paragraph><SpacerSmall/>
    <Paragraph>Think Business: “it's about providing the customer certainty as early as possible”</Paragraph><SpacerLarge/>
    <BulletAndImage 
    headingOne={"➊ Eligibility indicators"}
    paragraphOne={"Our customers receive no feedback until after entering all their personal and company details, and many would have to upload documents before any indication. The customer will be able to know within three questions if they should continue."}
    headingTwo={"➋ Speed and transparency"}
    paragraphTwo={"The customer now has several points of feedback and additional ‘what next’ explanations. The speed is improved vastly because they now get product offerings before submitting documentation"}
    headingThree={"➌ Offer indicators"} 
    paragraphThree={"The customer will be able to know the exact price + limits before having to submit documents. They will have a detailed understanding of how each product works."}
    headingFour={"➍ Distinct and tailored products"} 
    paragraphFour={"The customer will be able to understand how our products fit different needs, that the price isn’t just for the amount that you borrow and to make the selection easy and calculator-less and pain-less."} 
    image={QuotesUserJourney}/><SpacerLarge/>
    <Heading>The UI and information architecture</Heading><SpacerSmall/>
    <Paragraph>Loans are difficult to imagine in real-life as tangible products. By representing them as an experience using paper-feel details it relates finance to the world we live in - creating the impression of an experience.</Paragraph><SpacerMedium/>
    <InlineImage image={QuotesIA} imageHeight={420} imageWidth={681}/><SpacerMedium/>
    <Heading>01 First impressions</Heading>
    <Paragraph>Peaks interest, delights and should be memorable.</Paragraph><SpacerXSmall/>
    <Heading>02 What they asked for</Heading>
    <Paragraph>Encourage thinking of loans as use cases.</Paragraph><SpacerXSmall/>
    <Heading>03 It’s affordable</Heading>
    <Paragraph>Not only is it affordable, it’s free to repay early.</Paragraph><SpacerXSmall/>
    <Heading>04 The facts</Heading>
    <Paragraph>It’s trustworthy and a serious consideration.</Paragraph><SpacerXSmall/>
    <Heading>05 Options</Heading>
    <Paragraph>Make it easy, but also give them choice.</Paragraph><SpacerXSmall/>
    <Heading>06 Impact and value</Heading>
    <Paragraph>Reinforcing the summary in more detail.</Paragraph><SpacerXSmall/>
    <Heading>07 The true cost</Heading>
    <Paragraph>Why interest rates aren’t that important.</Paragraph><SpacerXSmall/>
    <Heading>08 About us and reviews</Heading>
    <Paragraph>How we compare to banks and who we have helped.</Paragraph><SpacerLarge/>
    <TripleGallery
    color={"#F9F9F9"}
    imageOne={QuotesWireframeOne}
    imageTwo={QuotesWireframeTwo}
    imageThree={QuotesWireframeThree}
    imageFour={QuotesWireframeFour}
    imageFive={QuotesWireframeFive}
    imageSix={QuotesWireframeSix}/><SpacerLarge/>
    <Heading>High Fidelity</Heading><SpacerSmall/>
    <Paragraph>I created custom iwoca loan illustrations and visualisations to demonstrate how the loans work and which use cases they’re suitable for. 
iwoca is a team of talented and quirky individuals who see small businesses as people first and foremost - we wanted to design human and joyful experiences.</Paragraph>
<Heading>Testing</Heading><SpacerSmall/>
<Paragraph>Participants rated the memorability of the products 4 / 5 & they valued the well-thought out copy 'I actually think the text is really good and communicated very well' and 'the text was really well put together'.</Paragraph><SpacerSmall/>
<SubHeading>What do you think about the options presented?</SubHeading><SpacerXSmall/>
<Paragraph>Users were surprised, but reacted positively, to have a final offer alongside the quotes.</Paragraph><SpacerXSmall/>
<Quote>"most of our work is done custom for the client - so we would use the custom link"</Quote><SpacerXSmall/>
<Quote>"the Payment button is far superior - were sometimes dealing with shopkeepers who arent tech savy"</Quote><SpacerSmall/>
<SubHeading>What Pricing would you set and why?</SubHeading><SpacerXSmall/>
<Paragraph>Visuals support their understanding and add a little delight.</Paragraph><SpacerXSmall/>
<Quote>"I haven’t really have thought about this I’m not sure which I’d use - we’d probably want to experiment. I like the idea of asking the customer to pay the fees - but if they can’t pay the fees - we can provide some added value."</Quote><SpacerLarge/>
<SingleImage fit={"contain"} height={500} marginTop={50} marginBottom={50} image={QuotesMobileSingle} color={"#F9F9F9"}/><SpacerLarge/>
<Heading>On reflection</Heading><SpacerSmall/>
<Paragraph>After implementaton there was a significant increase in both conversion rate (by 2%) and the speed of onboarding (it took on average under a day, compared to a week prior to the release).</Paragraph><SpacerXSmall/>
<Paragraph>There was an even bigger impact for our ops & sales team who no longer had to explain the benefits of the product or manually onboard every merchant.</Paragraph><SpacerLarge/>
//gif
<FourByFourGrid imageOne={QuotesHighOne} imageTwo={QuotesHighTwo} imageThree={QuotesHighThree} imageFour={QuotesHighFour} color={"#E29FBB"}/>
</div>
  )
}

export default Quotes