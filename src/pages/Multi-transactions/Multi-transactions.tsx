import React from 'react'
import Heroimage from '../../components/Casestudy/Heroimage/Heroimage'
import Description from '../../components/Casestudy/Description/Description'
import Heading from '../../components/Casestudy/TextSection/Heading/Heading'
import Callout from '../../components/Casestudy/TextSection/CallOut/CallOut'
import SpacerSmall from '../../components/Casestudy/Spacers/SpacerSmall/SpacerSmall'
import Hero from "../../images/Multitransactions-Hero.png"
import Paragraph from '../../components/Casestudy/TextSection/Paragraph/Paragraph'
import SingleImage from '../../components/Casestudy/SingleImage/SingleImage'
import MultiSingleImage from "../../images/Multi-transactions-singleimage.png"
import TwoImages from '../../components/Casestudy/TwoImages/TwoImages'
import GraphOne from "../../images/Multi-Graph-One.png"
import GraphTwo from "../../images/Multi-Graph-Two.png"
import QuoteBlock from "../../components/Casestudy/QuoteBlock/QuoteBlock"
import MultiJourney from "../../images/Multi-journeymap.svg"
import InlineImage from "../../components/Casestudy/TextSection/InlineImage/InlineImage"
import MultiInlineImage from "../../images/Multi-InlineImage.png"
import SubHeading from "../../components/Casestudy/TextSection/SubHeading/SubHeading"
import MultiExplainer from "../../images/Multi-explainer.png"
import TripleGallery from '../../components/Casestudy/TripleGallery/TripleGallery'
import HighFidelityOne from "../../images/MThighfidelityOne.png"
import HighFidelityTwo from "../../images/MThighfidelityTwo.png"
import HighFidelityThree from "../../images/MThighfidelityThree.png"
import HighFidelityFour from "../../images/MThighfidelityFour.png"
import HighFidelityFive from "../../images/MThighfidelityFive.png"
import HighFidelitySix from "../../images/MThighfidelitySix.png"
import HighFidOne from "../../images/MTHF01.png"
import HighFidTwo from "../../images/MTHF02.png"
import LayoutOfThree from '../../components/Casestudy/LayoutOfThree/LayoutOfThree'
import Visualisations from "../../images/VisualisationsMT.png"
import MTHighFidelOne from "../../images/Multitransactions_final_3.png"
import MTHighFidelTwo from "../../images/Multitransactions_final_4.png"
import MTFinal from "../../images/MTEnd.png"
import Quote from "../../components/Casestudy/TextSection/Quote/Quote"


const Multitransactions = () => {
  return (
    <div>
    <Heroimage color={"#0E407E"} image={Hero}></Heroimage>
      <Description companyName={"iwocaPay"} projectName={"Multi-transactions"} description={"Let buyers Pay later on multiple invoices at a time"}/>
      <Heading>The problem</Heading><SpacerSmall/>
      <Callout>Buyers can only pay for a second invoice using Pay Later if they have paid off their first balance. This means iwocaPay is only really suitable for one-off invoices.</Callout><SpacerSmall/>
      <Paragraph>This stops potential buyers from completing the sign-up and puts-off sellers with a regular client base from joining iwocaPay. Additionally, competing B2B Pay Later players such as TreviPay, Tillit, Balance and Behalf all offer financing on recurring payments.</Paragraph>
    <SingleImage fit={"contain"} height={500} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={MultiSingleImage}/>
    <Heading>Evidence</Heading>
    <Paragraph>Data shows that the majority of businesses receive upto 10 invoices per month from upto 5 suppliers (a proportion of those being regular suppliers) it’s just not worthwhile to sign up for Pay later for only one of those transactions.</Paragraph>
    <Paragraph>By allowing multiple transactions for Pay later, there will be less friction to usage - both for buyers and sellers.</Paragraph>
    <TwoImages imageOne={GraphOne} imageTwo={GraphTwo} color={"#F9F9F9"}/>
    <QuoteBlock 
    heading={"User Insights"} 
    quoteOne={'"Repeat functionality would be great, I would’ve thought this already existed"'}
    quoteTwo={'"We’re on a monthly retainer so it’s not worth it to use Pay Later just once every quarter"'}
    quoteThree={'"A big part of our service is with regular customers"'}/>
    <Paragraph>Multi-transactions was a hygiene feature, our users expected it to exist so this particular project did not require a full-scale discovery. I did however seek evidence to confirm this assumption by interviewing both buyers and sellers.</Paragraph>
    <Paragraph>An unexpected insight was that buyers wanted to see the total amount of credit they could be approved for, rather than being assessed for every invoice. This also appealed to sellers as a way to increase cart value.</Paragraph>
    <SingleImage fit={"contain"} height={900} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={MultiJourney}/>
    <Heading>Development</Heading>
    <Paragraph>A buyer’s dashboard needs to support a variety of combinations of different Pay link states - these states have different actions, and are of varying urgency. For example, an overdue Pay link should take priority over a partial Pay link.</Paragraph>
    <InlineImage image={MultiInlineImage} imageHeight={368} imageWidth={469}/>
    <Paragraph>The challenges were; figuring out the hierarchy of information on the dashboard - to show the most important top-level information first and make sure users could also deep dive into the details of transactions for reconciliation and tracking.</Paragraph>
    <Paragraph>We ran a card sorting exercise to help us understand what was most important to our users. Additionally, we knew that many customers were sharing their dashboard with their accountants, so we repeated the same card-sorting exercise with this group of users.</Paragraph>
    <SingleImage fit={"contain"} height={500} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={MultiExplainer}/>
    <Heading>Low fidelity</Heading>
    <Paragraph>Emulating the look and feel of a paper invoices - I opted for a card system instead of numerical tables. Progress visualisations were added to encourage repayments and reduce buyer’s remorse.</Paragraph>
    <Paragraph>Multiple repayment brought up the question of whether to consolidate them to a single schedule - but, we know from behavioural insights that users are engaged in activities with smaller achievements - so the payments were kept ‘attached’ to the original transaction to make them feel more manageable. </Paragraph>
    <TripleGallery 
    color={"#F9F9F9"} 
    imageOne={HighFidelityOne}
    imageTwo={HighFidelityTwo}
    imageThree={HighFidelityThree}
    imageFour={HighFidelityFour}
    imageFive={HighFidelityFive}
    imageSix={HighFidelitySix}
    />
    <SubHeading>Dashboard header system</SubHeading>
    <Paragraph>The high-fidelity designs made use of a pattern system for the top banner, for every different dashboard state, the user is greeted with a slightly different look & feel.</Paragraph>
    <Paragraph>This was a way of communicating if they are overdue or paid off their balance without relying on copy.</Paragraph>
    <TwoImages imageOne={HighFidOne} imageTwo={HighFidTwo} color={"#0E407E"}/>
    <SubHeading>Onboarding</SubHeading>
    <Paragraph>A dismissable, walk through tour was created for users to take them through their new dashboard.</Paragraph>
    //Gif
    <SubHeading>Porgress indicators and Visualisations</SubHeading>
    <Paragraph>There is a lot of information that needs to be displayed for each inoivce - rather than relying solely on copy I created a visual system for the types of payments a user could encounter.</Paragraph>
    <LayoutOfThree color={"#0E407E"} imageOne={MTHighFidelOne} imageTwo={MTHighFidelTwo} imageThree={Visualisations}/>
    <Heading>User Testing</Heading>
    <Paragraph>We tested the designs with participants in user testing and with existing customers.</Paragraph>
    <SubHeading>User Insight</SubHeading>
    <Paragraph>Users found the dashboard intuitive and the account overview matched the information they wanted to see</Paragraph>
    <Callout>“The dashboard clearly states my next payment, there’s a countdown, I can see what my balance is. How much of a remaining limit I have almost like a credit card...”</Callout>
    <Callout>“Pretty simple and straightforward, everything in one dashboard, there’s nothing else I’d really want to see from there, that’s pretty straightforward.”</Callout>
    <SubHeading>User Insight</SubHeading>
    <Paragraph>Visuals support their understanding and add a little delight.</Paragraph>
    <Quote>“I don’t really have any questions about this payment so far it all seems to make sense. The interest calculations do make sense as well, yeah they do make perfect sense, so no,it’s pretty easy to understand andI quite like the little graphic of the circle being filled..”</Quote>
    <SubHeading>User Insight</SubHeading>
    <Paragraph>Business owners couldn’t understand the schedules, and why there was interest included in the first month, as it states that the first 30 days are interest free on the payment terms.</Paragraph>
    <Paragraph>The system is set up so that the repayments calculate to be equal, this makes it look like a mistake - which is a big friction point in financial products where trust is paramount</Paragraph>
    //Gif
    <Heading>Reflection</Heading>
    <Paragraph>Since this project, I’ve gained experience in both strategy and programming. If I could go back - I would descope the front-end build and think about what the smallest slice of delivery that could enable multiple transactions - infact the first version might not even need a custom built dashboard.</Paragraph>
    <Paragraph>In terms of development, my knowledge in programming has taught me feasibility and in particular for this project - how using CSS grids could make complex layouts simpler to implement. In terms of development, my knowledge in programming has taught me feasibility and in particular for this project - how using CSS grids could make complex layouts simpler to implement.</Paragraph>
    <Paragraph>For design - I would use more familiar patterns e.g. my choice in icons and clearer navigation so users can find information more easily.</Paragraph>
    <SingleImage fit={"contain"} height={500} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={MTFinal}/>
    </div>

  )
}

export default Multitransactions