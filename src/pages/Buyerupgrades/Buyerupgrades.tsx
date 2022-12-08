import React from 'react'
import Heroimage from '../../components/Casestudy/Heroimage/Heroimage'
import Hero from "../../images/BuyerupgradesHero.png"
import Description from '../../components/Casestudy/Description/Description'
import TextSection from '../../components/Casestudy/TextSection/TextSection'

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
         />
         <TextSection
         paragraph={"The seller’s customers, the buyers, aren’t utilising the Pay Later financing option, this means sellers aren’t seeing the growth benefit they expected."}
         />
        
     
    </div>
  )
}

export default Buyerupgrades