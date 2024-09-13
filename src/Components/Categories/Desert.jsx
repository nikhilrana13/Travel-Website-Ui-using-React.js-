import React from 'react'
import Navbar from '../Navbar'
import Cards from './Cards'
import Beachimg from '../../assets/image1.png'
import Desertimg from '../../assets/header-bg.png'

export default function Desert() {
  return (
    <>
    <Navbar backgroundImage={Desertimg}/>
    <div className="container">
      <h4>Popular Desert Destinations</h4>
      <div className="beach-card">
        <Cards  imageUrl={Beachimg} Labelname="Adventure" PlaceName="Desert" Score="4.5" Discount="Save up tp 50% off" Price="$600"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Desert" Score="4.5" Discount="Save up tp 50% off" Price="$600"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Desert" Score="4.5" Discount="Save up tp 50% off" Price="$600"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Desert" Score="4.5" Discount="Save up tp 50% off" Price="$600"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Desert" Score="4.5" Discount="Save up tp 50% off" Price="$600"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Desert" Score="4.5" Discount="Save up tp 50% off" Price="$600"/>
       
      </div>
    </div>
    </>
  )
}
