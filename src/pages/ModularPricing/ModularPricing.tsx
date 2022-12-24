import React from "react";
import Heroimage from "../../components/Casestudy/Heroimage/Heroimage";
import Description from "../../components/Casestudy/Description/Description";
import Heading from "../../components/Casestudy/TextSection/Heading/Heading";
import Callout from "../../components/Casestudy/TextSection/CallOut/CallOut";
import ModularPricingHero from "../../images/ModularPricingHero.png";
import Paragraph from "../../components/Casestudy/TextSection/Paragraph/Paragraph";
import SingleImage from "../../components/Casestudy/SingleImage/SingleImage";
import MPImage from "../../images/ModularPricing01.png";
import MPGraph from "../../images/ModularPricingGraph.png";
import MPConcepts from "../../images/MPConceptTesting.png";
import SubHeading from "../../components/Casestudy/TextSection/SubHeading/SubHeading";
import TripleImage from "../../components/Casestudy/TripleImage/TripleImage";
import DashboardOne from "../../images/DashboardOneMP.png";
import DashboardTwo from "../../images/DashboardTwoMP.png";
import DashboardThree from "../../images/DashboardThreeMP.png";
import DoubleGallery from "../../components/Casestudy/DoubleGallery/DoubleGallery";
import WireframeOne from "../../images/MP_wireframeOne.png";
import WireframeTwo from "../../images/MP_wireframeTwo.png";
import WireframeThree from "../../images/MP_wireframeThree.png";
import WireframeFour from "../../images/MP_wireframeFour.png";
import WireframeFive from "../../images/MP_wireframeFive.png";
import WireframeSix from "../../images/MP_wireframeSix.png";
import MPUserJourney from "../../images/MP_UserJourney.png";
import MPScreen from "../../images/MPScreen.png";
import FullBleedGif from "../../components/Casestudy/FullBleedGif/FullBleedGif";
import MPGif from "../../images/MPGif.gif";
import TwoImages from "../../components/Casestudy/TwoImages/TwoImages";
import HighFidOne from "../../images/MPHighFidOne.png";
import HighFidTwo from "../../images/MPHighFidTwo.png";
import Quote from "../../components/Casestudy/TextSection/Quote/Quote";
import MPFinal from "../../images/MPFinal.png";
import SpacerMedium from "../../components/Casestudy/Spacers/SpacerMedium/SpacerMedium";
import SpacerSmall from "../../components/Casestudy/Spacers/SpacerSmall/SpacerSmall";
import SpacerXSmall from "../../components/Casestudy/Spacers/SpacerXSmall/SpacerXSmall";
import SpacerLarge from "../../components/Casestudy/Spacers/SpacerLarge/SpacerLarge";

const ModularPricing = () => {
  return (
    <div>
      <Heroimage
      sizeDesktop={"contain"}
      sizeMobile={""}
       paddingMobile={40}
        position={"center"}
        padding={40}
        image={ModularPricingHero}
        color={"#F4CB59"}
      />
      <Description
        companyName={"iwocaPay"}
        projectName={"Modular Pricing"}
        description={"Sellers choose how much they pay for BNPL."}
      />
      <Heading>The Problem</Heading>
      <SpacerMedium />
      <Callout>
        Many sellers don't want to pay anything for Pay later transactions,
        citing the 'unknown and mounting cost' as an obstacle.
      </Callout>
      <SpacerSmall />
      <Paragraph>
        For the current pricing of the BNPL feature, sellers pay a subsidy for
        every invoice that their buyer chooses to Pay Later. The buyer also pays
        interest on any days beyond the initial free 30 days.
      </Paragraph>
      <SpacerXSmall />
      <Paragraph>
        At the same time we have evidence that other sellers could benefit from
        subsidising the full cost of Pay Later for their buyers as a growth
        strategy.
      </Paragraph>
      <SpacerLarge />
      <SingleImage
      mobileFit={""}
        fit={"contain"}
        height={500}
        marginTop={50}
        marginBottom={50}
        color={"#F9F9F9"}
        image={MPImage}
      />
      <SpacerLarge />
      <Heading>Evidence</Heading>
      <SpacerSmall />
      <Paragraph>
        We think that offering more flexibility when it comes to pricing options
        is the first step to making the product more customisable to the unique
        needs of sellers - who then, won't hesitate to offer iwocaPay on every,
        single invoice leading to more invoices paid, faster.
      </Paragraph>
      <SpacerXSmall />
      <Paragraph>
        Initial data suggests that the more Pay links a seller sends on their
        invoices, the more payments they receive through iwocaPay, and so, the
        more invoices are paid faster. In turn, they send even more Pay links.
      </Paragraph>
      <SpacerLarge />
      <SingleImage
      mobileFit={""}
        fit={"contain"}
        height={500}
        marginTop={50}
        marginBottom={50}
        color={"#F9F9F9"}
        image={MPGraph}
      />
      <SpacerLarge />
      <Heading>Concept testing</Heading>
      <SpacerSmall />
      <Paragraph>
        We started by testing pricing options - we asked suppliers who have
        never used iwocaPay to look at fictional BNPL products and asked their
        thoughts on value vs cost.
      </Paragraph>
      <SpacerLarge />
      <SingleImage
      mobileFit={""}
        fit={"contain"}
        height={500}
        marginTop={50}
        marginBottom={50}
        color={"#F9F9F9"}
        image={MPConcepts}
      />
      <SpacerLarge />
      <Heading>Responses</Heading>
      <SpacerSmall />
      <SubHeading>How much time do suppliers spend on payments?</SubHeading>
      <SpacerXSmall />
      <Paragraph>
        On average more than one working day a week, but they didn’t mind too
        much.
      </Paragraph>
      <SpacerSmall />
      <Paragraph>
        The cost of a product is directly evaluated to the magnitude of the
        problem it solves for the user, even though they saw the benefit there
        theme of “it’s great, but not for us”
      </Paragraph>
      <SpacerSmall />
      <SubHeading>What should we build?</SubHeading>
      <SpacerSmall />
      <Paragraph>
        A journey that lets sellers try iwocaPay for free first to see what
        works for them.
      </Paragraph>
      <SpacerSmall />
      <SubHeading>Which pricing options do you prefer and why?</SubHeading>
      <SpacerSmall />
      <Paragraph>
        The pricing options were confusing - who pays for what and for how many
        days?
      </Paragraph>
      <SpacerSmall />
      <Paragraph>
        Some users want to dig deeper into the numbers to make a decision.
        Others prefer to simply start - by exposing all the percentages and
        options in one go - users experienced choice paralysis.
      </Paragraph>
      <SpacerSmall />
      <Heading>Where should we build it?</Heading>
      <Paragraph>
        Expose just two pricing options after they’ve signed up.
      </Paragraph>
      <SpacerLarge />
      <TripleImage
        color={"#F9F9F9"}
        imageOne={DashboardOne}
        imageTwo={DashboardTwo}
        imageThree={DashboardThree}
      />
      <SpacerLarge />
      <Heading>Dashboard Evolution</Heading>
      <SpacerSmall />
      <Paragraph>
        Back in the day, iwocaPay could generate just one type of link - it had
        to be generated from the dashboard for every invoice, and could only be
        paid by one buyer.
      </Paragraph>
      <SpacerXSmall />
      <Paragraph>
        A year later, we upgraded with the launch of a ‘Generic link’ - Sellers
        now have just one link they can reshare multiple times and get paid
        anywhere, by anyone.
      </Paragraph>
      <SpacerXSmall />
      <Paragraph>
        Today, we’ve acquired three different ways of generating Pay Links- but,
        we never took the time to explain the use cases for these within the
        dashboard, mainly because buyers always saw the same checkout on every
        link type before the release of modular pricing.
      </Paragraph>
      <SpacerXSmall />
      <Paragraph>
        Internally we started referring to them as 'The Generic link', 'The
        Custom Link' and 'The Pre-filled' link - there was still some work to do
        on how to present these to customers.
      </Paragraph>
      <SpacerLarge />
      <DoubleGallery
       mobilePadding={""}
       desktopPadding={""}
       mobileSize={"mobileSize"}
      mobileGrid={""}
        grid={"40vw 40vw 40vw"}
        color={"#F9F9F9"}
        imageOne={WireframeOne}
        imageTwo={WireframeTwo}
        imageThree={WireframeThree}
        imageFour={WireframeFour}
        imageFive={WireframeFive}
        imageSix={WireframeSix}
      />
      <SpacerLarge />
      <Heading>UserJourney</Heading>
      <SpacerSmall />
      <Paragraph>
        There were several choices for how and when to showcase the pay link
        types and pricing options. The decision for this was made by imagining
        frequency of usage - the user will only ever have to understand this
        information once, so is best suited in an onboarding and FAQ.
      </Paragraph>
      <SpacerLarge />
      <SingleImage
      mobileFit={""}
        fit={"contain"}
        height={800}
        marginTop={50}
        marginBottom={50}
        color={"#F9F9F9"}
        image={MPUserJourney}
      />
      <SpacerLarge />
      <Heading>High Fidelity</Heading>
      <SpacerSmall />
      <Paragraph>
        A dedicated Pay Links page - An area where sellers can explore,
        understand, and customise their different pay links. Each use case has a
        new tab, with, for the first time a preview of how these different
        checkouts and pricing options look.
      </Paragraph>
      <SpacerLarge />
      <SingleImage
      mobileFit={""}
        fit={"contain"}
        height={800}
        marginTop={20}
        marginBottom={20}
        color={"#F4CB59"}
        image={MPScreen}
      />
      <SpacerLarge />
      <Heading>Release Two</Heading>
      <SpacerSmall />
      <Paragraph>
        Branded feature launch notification. There has been a lack of up-take to
        recent releases due to sellers missing the launch email. This will
        re-engage and educate sellers with custom motion graphics.
      </Paragraph>
      <SpacerLarge />
      <FullBleedGif
      mobileWidth= {"95vw"}
      mobileHeight= {"60vw"}
      mobileMargin= {"20px"}
      mobileSize= {"mobileSize"}
        marginTop={0}
        marginBottom={0}
        color={"#F9F9F9"}
        image={MPGif}
        width={830}
        height={519}
      />
      //Gif
      <SpacerLarge />
      <Heading>Release three</Heading>
      <SpacerSmall />
      <Paragraph>
        Now, we’ll only be showing Pay links from the moment they’re clicked by
        buyers to avoid the build-up of dead links.
      </Paragraph>
      <SpacerLarge />
      <TwoImages
      desktopSizeOne={""}
      mobileSizeOne={""}
      desktopSizeTwo={""}
      mobileSizeTwo={""}
        imageOne={HighFidTwo}
        imageTwo={HighFidOne}
        color={"#F4CB59"}
      />
      <SpacerLarge />
      <Heading>User Testing</Heading>
      <SpacerSmall />
      <Paragraph>
        We tested the designs through interviews with existing sellers. Sellers
        said they would engage with the feature in a variety of ways - depending
        on business needs.
      </Paragraph>
      <SpacerMedium />
      <SubHeading>Which of the Pay Link types would you use?</SubHeading>
      <SpacerXSmall />
      <Paragraph>It completely depends on their sales process.</Paragraph>
      <SpacerSmall />
      <Quote>
        “most of our work is done custom for the client - so we would use the
        custom link”
      </Quote>
      <SpacerXSmall />
      <Quote>
        “the Payment button is far superior - were sometimes dealing with
        shopkeepers who arent tech savy”
      </Quote>
      <SpacerXSmall />
      <Quote>
        “I’ve been exploring it by putting the re-usable link on our website”
      </Quote>
      <SpacerMedium />
      <SubHeading>What Pricing would you set and why?</SubHeading>
      <SpacerXSmall />
      <Paragraph>
        They would experiment with the setting, many sellers were curious to try
        offering an interest free BNPL to customers.
      </Paragraph>
      <SpacerXSmall />
      <Quote>
        “I haven’t really have thought about this I’m not sure which I’d use -
        we’d probably want to experiment. I like the idea of asking the customer
        to pay the fees - but if they can’t pay the fees - we can provide some
        added value.”
      </Quote>
      <SpacerMedium />
      <SubHeading>
        What stops you from using iwocaPay on every transaction?
      </SubHeading>
      <SpacerXSmall />
      <Paragraph>
        Businesses requested card payments, subscription options, repeat
        invoices, milestone payments, card payments, more integrations and
        international payments to name a few.
      </Paragraph>
      <SpacerLarge />
      <SingleImage
      mobileFit={""}
        fit={"cover"}
        height={500}
        marginTop={0}
        marginBottom={0}
        color={"#F9F9F9"}
        image={MPFinal}
      />
    </div>
  );
};

export default ModularPricing;
