import React from 'react'
import Navbar from './components/navbar/Navbar'
import Herobox from './components/hero/Herobox'
import Ads from './components/ads/Ads'
import Partners from './components/partners/Partners'
import Download from './components/download/Download'
import Blue from './components/blue/Blue'
import Footer from './components/footer/Footer'
import Storeroom from './components/Deals/Storeroom'
// import Carosel from './components/Carosels/Carosel'
import Mcarousel from './components/Carosel/Mcarousel'
import Cardinfo from './components/cardss/Cardinfo1'
import Reviews from './components/Reviews/Reviews'

export default function Home(props) {
  return (
    <div className='mainBody'>
     
      <Mcarousel/>
      <Cardinfo Heading="Top Products" handleClick={props.handleClick}/>
      {/* <Herobox /> */}
      <Partners/>
      <Storeroom Heading="Categories"/>
      <Reviews/>
      <Download />
      <Blue />
      
    </div>
  )
}
