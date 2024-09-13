import React from 'react'
import Navbar from '../../Navbar'
import beachimg from '../../../assets/china_mountain_temple_hd_travel.jpg'
import Countrycard from './Countrycard'
import './Home.css'





export default function Home() {
  return (
    <>
    <Navbar backgroundImage={beachimg} />
    <section className='section1'>
        <h4>Top Vacation Destinations</h4>
       <div className="country-card">
        <Countrycard />
       </div>

    </section>
    </>
  )
}
