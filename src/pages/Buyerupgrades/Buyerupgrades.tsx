import React from 'react'
import Heroimage from '../../components/Casestudy/Heroimage/Heroimage'
import BuyerProblemImage from "../../images/BuyerUpgradesInlineImage.png"
import Hero from "../../images/BuyerupgradesHero.png"
import Description from '../../components/Casestudy/Description/Description'
import TextSection from '../../components/Casestudy/TextSection/TextSection'
import FullBleedImage from '../../components/Casestudy/FullBleedImage/FullBleedImage'
import BuyerUpgradeGifOne from "../../images/Buyersupgradesgif01.gif"
const Buyerupgrades = () => {
  return (
    <div>
        <Heroimage image={Hero}></Heroimage>
        <Description companyName={"iwocaPay"} projectName={"Buyer Upgrades"} 
        description={
          "Get sellers paid more by increasing usage of Pay Later"
          }/>
       <TextSection header={"The problem"} redParagraph={
         "The seller’s customers, the buyers, aren’t utilising the Pay Later financing option, this means sellers aren’t seeing the growth benefit they expected."} 
         paragraph={"The seller’s customers, the buyers, aren’t utilising the Pay Later financing option, this means sellers aren’t seeing the growth benefit they expected."}
         image={BuyerProblemImage}
         imageWidth={310}
         imageHeight={310}
         />
      <TextSection
         paragraph={"Now, our strategy is to encourage the beginners to adopt. The jobs to be done is: as a seller, I want to offer financing to enable customers to purchase more and often, so I can grow my business."}
         />
         <TextSection
         paragraph={"In a nutshell, we need to increase buyer conversion on Pay Later, for sellers to engage with iwocaPay."}
         />
         <FullBleedImage image={BuyerUpgradeGifOne}></FullBleedImage>
    </div>
  )
}

export default Buyerupgrades