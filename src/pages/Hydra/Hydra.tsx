import React from 'react'
import Heroimage from '../../components/Casestudy/Heroimage/Heroimage'
import Description from '../../components/Casestudy/Description/Description'
import Heading from '../../components/Casestudy/TextSection/Heading/Heading'
import Paragraph from '../../components/Casestudy/TextSection/Paragraph/Paragraph'
import Callout from '../../components/Casestudy/TextSection/CallOut/CallOut'
import SingleImage from '../../components/Casestudy/SingleImage/SingleImage'
import HydraHero from "../../images/HydraHero.png"
import SubHeading from '../../components/Casestudy/TextSection/SubHeading/SubHeading'
import HydraBeforeOne from "../../images/HydraBeforeOne.png"
import HydraBeforeTwo from "../../images/HydraBeforeTwo.png"
import HydraBeforeThree from "../../images/HydraBeforeThree.png"
import TripleImageCaption from '../../components/Casestudy/TripleImageCaption/TripleImageCaption'
import TripleImage from '../../components/Casestudy/TripleImage/TripleImage'
import HydraHighOne from "../../images/HydraHighOne.png"
import HydraHighTwo from "../../images/HydraHighTwo.png"
import HydraHighThree from "../../images/HydraHighThree.png"
import LayoutOfThree from '../../components/Casestudy/LayoutOfThree/LayoutOfThree'
import HydraOne from "../../images/HydraOne.png"
import HydraTwo from "../../images/HydraTwo.png"
import HydraThree from "../../images/HydraThree.png"
import InlineImage from '../../components/Casestudy/TextSection/InlineImage/InlineImage'
import HydraInline from "../../images/HydraInline.png"
import HydraSidePanel from "../../images/SidePanelHydra.png"
import HydraExplainer from "../../images/HydraExplainer.png"
import TwoImages from '../../components/Casestudy/TwoImages/TwoImages'
import WireframeOne from '../../images/WireframeOne.png'
import WireframeTwo from '../../images/WireframeTwo.png'
import HighFid from "../../images/HydraHighFid.png"
import HydraInlineTwo from "../../images/HydraInlineTwo.png"
import HydraTripleImageOne from "../../images/HydraTripleImageOne.png"
import HydraTripleImageTwo from "../../images/HydraTripleImageTwo.png"
import HydraTripleImageThree from "../../images/HydraTripleImageThree.png"
import TwoImagesOne from "../../images/HydraDoubleImageOne.png"
import TwoImagesTwo from "../../images/HydraDoubleImageTwo.png"
import SingleImageCompare from "../../images/SingleImageComparison.png"
import SpacerMedium from "../../components/Casestudy/Spacers/SpacerMedium/SpacerMedium"
import SpacerSmall from "../../components/Casestudy/Spacers/SpacerSmall/SpacerSmall"
import SpacerLarge from "../../components/Casestudy/Spacers/SpacerLarge/SpacerLarge"
import SpacerXSmall from "../../components/Casestudy/Spacers/SpacerXSmall/SpacerXSmall"
import HydraOneOfTwo from "../../images/HydraOneOfTwo.png"
import HydraTwoOfTwo from "../../images/HydraTwoOfTwo.png"


const Hydra = () => {
  return (
    <div>
    <Heroimage position={"bottom"} padding={0} image={HydraHero} color={"#141414"}/>
    <Description companyName={"iwoca"} projectName={"Hydra"} description={"Improving the experience of the iwoca data analytics tool."}/>
    <Heading>The Problem</Heading><SpacerSmall/>
    <Callout>Most users find the dashboards ’tricky to get to grips with’ - there is a wealth of data that they can’t access.</Callout><SpacerSmall/>
    <Paragraph>Hydra dashboards allows users to view, manipulate, compare and share plots.</Paragraph><SpacerXSmall/>
    <Paragraph>One of the problems is that report writers don’t follow a single set of rules. This is great for creating custom iwoca reports, but it means the front-end has to deal with limitless parameter and visualisation options, making it difficult to systemise and onboard new users.</Paragraph><SpacerMedium/>
    <SubHeading>Adding reports to the dashboard</SubHeading><SpacerSmall/>
    <Paragraph>The first step to understanding data is building a dashboard of relevant reports.  The main problem for users is that the tools to get started are hidden and expand to cover the workspace. Upgrading this journey was the first of many small but impactful changes to Hydra.</Paragraph><SpacerLarge/>
    <TripleImageCaption 
    imageOne={HydraBeforeOne} 
    captionOne={"➊ An empty state dashboard gives very little guidance."}
    imageTwo={HydraBeforeTwo}
    captionTwo={"➋ A modal opens to cover most of the interface - users can’t see what reports they’ve already added and what they’re missing."}
    imageThree={HydraBeforeThree}
    captionThree={"➌ The report has been added, but, it’s empty - to a user it looks like the report isn’t working."}
    color={"#F9F9F9"}
    /><SpacerLarge/>
    <Heading>Low Fidelity</Heading><SpacerSmall/>
    <Paragraph>The first improvement is the layout of the interface. There is now a reports panel that can be viewed along-side the plots, so users can search for report data in context to their workflow.</Paragraph><SpacerXSmall/>
    <Paragraph>The top navigation minimises to create more working area and fewer unnecessary distractions, as well as holding sharing options for the dashboard. There are preloaded fields to reports, and a hover preview.</Paragraph><SpacerLarge/>
    <TripleImage 
    color={"#F9F9F9"}
    imageOne={HydraHighOne}
    imageTwo={HydraHighTwo}
    imageThree={HydraHighThree}/><SpacerXSmall/>
    <LayoutOfThree
    color={"#141414"}
    imageOne={HydraOne}
    imageTwo={HydraTwo}
    imageThree={HydraThree}
    /><SpacerLarge/>
    <Heading>Release 02</Heading><SpacerSmall/>
    <SubHeading>Finding reports</SubHeading><SpacerXSmall/>
    <Paragraph>Reports have no naming conventions so users don’t know what a plot shows until they’ve added it. Currently, personal workspaces don’t exist, so they can’t view recent searches or their frequently used reports.  Some reports are broken but there’s no way of knowing that until users add it to the dashboard.</Paragraph><SpacerLarge/>
    <InlineImage image={HydraInline} imageHeight={371} imageWidth={606}/><SpacerLarge/>
    <Paragraph>We found that most users only ever use a handful of reports so there is now recent and frequently used report filtering.  The new system has search logic - auto-filtering the list when users start typing.</Paragraph><SpacerXSmall/>
    <Paragraph>At this stage, we have little control of how reports are named - but the formatting has been standardised and users can even create their own tagging system to personalise their workflow.</Paragraph><SpacerLarge/>
    <SingleImage fit={"contain"} height={500} marginTop={0} marginBottom={0} color={"#141414"} image={HydraSidePanel}/><SpacerLarge/>
    <SubHeading>Arranging the workspace</SubHeading><SpacerSmall/>
    <Paragraph>Users had no way of seeing an overview of which reports they have in the dashboard - they would need to manually scroll & select to try to find the data they wanted to work with.  There was key functionality missing too - with no ability to move plots or see child and parent plots.</Paragraph><SpacerLarge/>
    <SingleImage fit={"contain"} height={500} marginTop={0} marginBottom={0} color={"#F9F9F9"} image={HydraExplainer}/><SpacerLarge/>
    <Heading>Low fidelity</Heading><SpacerSmall/>
    <Paragraph>The new designs introduced a panel that displaying a tree diagram of the reports. This lets users see which reports are in use, easily find them in their dashboard and identify parent reports and child plots at a glance. They can either move reports in this list form - or drag and drop the plots inthe workspace directly.</Paragraph><SpacerLarge/>
    <TwoImages color={"#f9f9f9"} imageOne={WireframeTwo} imageTwo={WireframeOne}/><SpacerSmall/>
    <SingleImage fit={"contain"} height={500} marginTop={50} marginBottom={50} color={"#141414"} image={HighFid}/><SpacerLarge/>
    <SubHeading>Manipulating reports</SubHeading><SpacerSmall/>
    <Paragraph>The main problem for users was seeing which parameters were compulsory, and easily finding options they had already filled - to edit or remove them.</Paragraph><SpacerMedium/>
    <InlineImage image={HydraInlineTwo} imageHeight={359} imageWidth={197}/><SpacerMedium/>
    <Paragraph>This panel is very overcrowded and misaligned, its difficult for users to scan. User can’t easily see which fields are compulsory for a plot to run.  The run button only has one state - it doesn’t notify users when a report requires reloading.</Paragraph><SpacerSmall/>
    <Heading>Low fidelity</Heading><SpacerXSmall/>
    <Paragraph>The new designs introduced a panel that displaying a tree diagram of the reports. This lets users see which reports are in use, easily find them in their dashboard and identify parent reports and child plots at a glance. They can either move reports in this list form - or drag and drop the plots inthe workspace directly.</Paragraph>
    <TwoImages color={"#F9f9f9"} imageOne={HydraOneOfTwo} imageTwo={HydraTwoOfTwo}/><SpacerLarge/>
    <Heading>High Fidelity</Heading><SpacerSmall/>
    <Paragraph>The parameters panel now shows multiple states of options and have a clean UI which makes them easy to explore and engage with.  The style is deliberately different from the reports panel so that its intuitive this panel is for actions - and works nicely in how users will read from left to right ‘select report’ then, ‘action on it’.</Paragraph><SpacerLarge/>
    <TripleImage color={"#141414"} imageOne={HydraTripleImageOne} imageTwo={HydraTripleImageTwo} imageThree={HydraTripleImageThree}/><SpacerLarge/>
    <Heading>Release 02</Heading><SpacerSmall/>
    <SubHeading>Comparing reports</SubHeading><SpacerXSmall/>
    <Paragraph>There’s no feature for comparing plots. Users are only able to inspect one plot at a time. Multi-select functionality doesn’t exist either, this would need to be implemented first.</Paragraph><SpacerSmall/>
    <Heading>Low Fidelity</Heading><SpacerXSmall/>
    <Paragraph>Here I explored different layouts fo a comparison view of the plots - when discussing with users, we chose a full screen view as the solution as it’s easier to read code and focus in on the selected data.</Paragraph><SpacerLarge/>
    <TwoImages color={"#F9F9F9"} imageOne={TwoImagesOne} imageTwo={TwoImagesTwo}/><SpacerLarge/>
    <Heading>High Fidelity</Heading><SpacerSmall/>
    <Paragraph>This was the final theme for this cycle - users can now with one click see the dfferences between any two plots on their dashboard - a powerful tool for understanding data, and learning the structure of reports.</Paragraph><SpacerLarge/>
    <SingleImage fit={"contain"} height={500} marginTop={0} marginBottom={0} color={"#141414"} image={SingleImageCompare}/>
    </div>
  )
}

export default Hydra