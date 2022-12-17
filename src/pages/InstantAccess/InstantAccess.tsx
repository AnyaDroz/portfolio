import React from 'react'
import Heroimage from '../../components/Casestudy/Heroimage/Heroimage'
import InstantAccessHero from "../../images/InstantAccessHero.png"
import Description from '../../components/Casestudy/Description/Description'
import Callout from "../../components/Casestudy/TextSection/CallOut/CallOut"
import Heading from "../../components/Casestudy/TextSection/Heading/Heading"
import Paragraph from '../../components/Casestudy/TextSection/Paragraph/Paragraph'
import SingleImage from '../../components/Casestudy/SingleImage/SingleImage'
import MobileIA from "../../images/MobileIA.png"
import TwoImages from "../../components/Casestudy/TwoImages/TwoImages"
import GraphOne from "../../images/GraphOneIA.png"
import GraphTwo from "../../images/GraphTwoIA.png"
import TextLayout from '../../components/Casestudy/TextLayout/TextLayout'
import SVGOne from "../../images/SvgOne.svg"
import SVGTwo from "../../images/SvgTwo.svg"
import IAExplainer from "../../images/Explainer.png"
import IAUsermap from "../../images/IAUsermap.png"
import FourByFourGrid from '../../components/Casestudy/FourByFourGrid/FourByFourGrid'
import WireframeOne from "../../images/IAwireframe_1.png"
import WireframeTwo from "../../images/IAwireframe_2.png"
import WireframeThree from "../../images/IAwireframe_3.png"
import WireframeFour from "../../images/IAwireframe_4.png"
import FullBleedGif from '../../components/Casestudy/FullBleedGif/FullBleedGif'
import IAGif from "../../images/instant_access4.gif"
import Quote from "../../components/Casestudy/TextSection/Quote/Quote"
import InlineImage from '../../components/Casestudy/TextSection/InlineImage/InlineImage'
import InlineImageIA from "../../images/IAinlineimage.png"
import IAGiftwo from "../../images/instant_access5.gif"
import IAHighFidOne from "../../images/IAHighFidelityOne.png"
import IAHighFidTwo from "../../images/IAHighFidelityTwo.png"
import IAHighFidThree from "../../images/IAHighFidelityThree.png"
import IAHighFidFour from "../../images/IAHighFidelityFour.png"
import IAGifthree from "../../images/instant_access3.gif"
import IABottomFrame from "../../images/IABottomFrame.png"

const InstantAccess = () => {
  return (
    <div>
    <Heroimage image={InstantAccessHero} color={"#33885B"}/>
    <Description companyName={"iwocaPay"} projectName={"Instant Access"} description={"Letting businesses try iwocaPay before sign up."}/>
    <Heading>The Problem</Heading>
    <Callout>SME's struggle to see how iwocaPay fits their business - "iwocaPay looks great, but, it's not for us"</Callout>
    <Paragraph>We had a 50% increase in our traffic to the website, but conversion didn’t improve. So, what were these people looking for that they didn’t find? How can we better tailor iwocaPay or talk about iwocaPay so sellers can more quickly evaluate whether it’s a solution for them?</Paragraph>
    <SingleImage fit={"contain"} height={500} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={MobileIA}/>
    <Heading>Evidence</Heading>
    <Paragraph>In the first year of iwocaPay we were able to capture the industry of our merchants because of the manual onboarding. We saw some initial data to suggest industry segmented behaviour ( although numbers are too low to tell ) - part of this project was to recapture more business information at some point in the journey.</Paragraph>
    <Paragraph>Equally we can see the percentage of merchants onboarded sending a pay link is decreasing - suggesting they are getting through the first two sign up steps & not coming back to use the platform. We hypothesise this is because the ( upto 2 day! ) wait to be able to send a pay link. The good news - once they try it - they’re staying more active!</Paragraph>
    <TwoImages imageOne={GraphOne} imageTwo={GraphTwo} color={"#F9F9F9"}/>
    <TextLayout 
    heading={"Show me examples"} 
    paragraphOne={"“I would like more examples”"}
    paragraphTwo={"“For me, it would be nice to have a worked example so you can get a rough feel of how things work - especially with the 30, 60, 90 days examples.”"}
    paragraphThree={"“This is all about people - so I want to see how it affects the different people who use this e.g.  tradesman”"}
    paragraphFour={"“I like to give it a test - highly unliKely I’d call. I’m not a huge fan of being sold to over the phone...”"}
    paragraphFive={"“For a new service unless the website advertises or is offering services we would simply sign up and try it”"}
    paragraphSix={"“If it’s a modern web app or service like this I would simply sign up straight away. I’ve only ever called up if there’s something on the site that’s missing...”"}
    paragraphSeven={"“These days I sign up, start to use it and if I have questions I’d call in or email”"}
    headingTwo ={"How do you usually get started"}
    imageOne={SVGOne}
    imageTwo={SVGTwo}
    explainerOne={"Well, we actually gave examples in the designs, but noone read them, this supports our hypothesis that showing them how it works is more effective than telling them."}
    explainerTwo={"These insights highlight the way businesses have been experimenting and trying new products. It’s pretty clear self-serve has become very common place and having to call in or wait to use the product may cause friction."}/>
    <Heading>User journey</Heading>
    <Paragraph>There was plenty of discussion in figuring out when to ask which questions. The 'Director's profile' are the compulsory details we need to check a potential business. In this new flow we're requesting additional questions as a way to understand our users and prioritise leads.</Paragraph>
    <Paragraph>It's the first time users will be able to upload bank statements and pass Onfido checks without assistance - and, we wouldn't need to send a contract for the 'Seller agreement' via email any longer, users will be able to agree to this via a tickbox.</Paragraph>
    <SingleImage fit={"contain"} height={500} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={IAExplainer}/>
    <SingleImage fit={"contain"} height={1000} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={IAUsermap}/>
    <Heading>Low Fidelity</Heading>
    <Paragraph>For this project - we needed a simple solution that could be implemented quickly and easily customisable in the future.</Paragraph>
    <Paragraph>The two interface options were an expandable activation modal, that would follow the User around the account whilst they explored features VS a new 'global dashboard' that would change states from a sign up screen to an activated account state.</Paragraph>
    <FourByFourGrid
    color={"#F9F9F9"} 
    imageOne={WireframeOne} 
    imageTwo={WireframeTwo} 
    imageThree={WireframeThree}
    imageFour={WireframeFour}
    captionOne={"Option 1 - sticky activation modal."}
    captionTwo={"This would expand at any point during their trial - and encourage completion"}
    captionThree={"Option 2 - a new global dashboard with an 'account activation state' during the product trial"}
    captionFour={"Once the activation state is complete it would show a User an overview of their account"}/>
    <Heading>Testing</Heading>
    <Paragraph>After speaking with developers - both options would require the same amount of effort. I created an initial prototype for Option 2 - a new global dashboard, to test with users.</Paragraph>
    <Paragraph>The goal for the test was to understand if potential sellers were able to see how iwocaPay fits their business through exploring it’s features.</Paragraph>
    <FullBleedGif color={"#33885B"} image={IAGif} width={830} height={519}/>
    <Heading>Responses</Heading>
    <Paragraph>The main consideration when looking for a new payments solution was fees.</Paragraph>
    <Quote>"So, cost obviously - what’s it going to cost and what’s going to get taken away from any invoices that are paid"</Quote>
    <Quote>"cost is a big one..integrations too, but the cost is going to be a big one”</Quote>
    <Paragraph>It was clear that the users who played around with the Pay links page for longer understood the product.</Paragraph>
    <Quote>"Ahh Paylinks - yeah! If this goes live - I wanna know about it! Yeah all the links is perfect...well, this is even better I can see the different options across the top - I have the option of seeing who pays - for this. Okay and the Pay Later option I can choose here who pays for that privilege."</Quote>
    <InlineImage image={InlineImageIA} imageHeight={368} imageWidth={469}/>
    <Paragraph>I run an initiative called 'UserTV' which is a tick-tock-style slack channel of User insights.</Paragraph>
    <FullBleedGif color={"#F9F9F9"} image={IAGiftwo} width={830} height={519}/>
    <Heading>High fidelity</Heading>
    <Paragraph>After implementatons there was a significant increase in both conversion rate (by 2%) and the speed of onboarding (it took on average under a day, compared to a week prior to the release).</Paragraph>
    <Paragraph>There was an even bigger impact for our ops & sales team who no longer had to explain the benefits of the product or manually onboard every merchant.</Paragraph>
    <FourByFourGrid
    color={"#F9F9F9"} 
    imageOne={IAHighFidOne} 
    imageTwo={IAHighFidTwo} 
    imageThree={IAHighFidThree}
    imageFour={IAHighFidFour}
    />
    <FullBleedGif color={"#33885B"} image={IAGifthree} width={830} height={519}/>
    <SingleImage fit={"cover"} height={500} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={IABottomFrame}/>
    </div>
  )
}

export default InstantAccess