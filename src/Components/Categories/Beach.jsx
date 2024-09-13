import React from 'react'
import Navbar from '../Navbar'
import Cards from './Cards'
import Beachimg from '../../assets/image1.png'

export default function Beach() {
  return (
    <>
    <Navbar backgroundImage={Beachimg}/>  
    <div className="container">
      <h4>Popular Beach Destinations</h4>
      <div className="beach-card">
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Beach" Score="3.5" Discount="Save up tp 30% off" Price="$300"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Beach" Score="3.5" Discount="Save up tp 30% off" Price="$300" Reviews=" 350 Reviews"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Beach" Score="3.5" Discount="Save up tp 30% off" Price="$300" Reviews=" 350 Reviews"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Beach" Score="3.5" Discount="Save up tp 30% off" Price="$300" Reviews=" 350 Reviews"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Beach" Score="3.5" Discount="Save up tp 30% off" Price="$300" Reviews=" 350 Reviews"/>
        <Cards imageUrl={Beachimg} Labelname="Adventure" PlaceName="Beach" Score="3.5" Discount="Save up tp 30% off" Price="$300" Reviews=" 350 Reviews"/>
      </div>
    </div>
    </>

  )
}
