import React from 'react'
import './Style.css'
import Categorybox from './Categorybox';
import { Link } from 'react-router-dom';
import Bookingbox from './Bookingbox';






export default function Navbar({backgroundImage}) {
  return (
    <header style={{backgroundImage : `url(${backgroundImage})`}}>
        <nav>
            <div className="logo">
                <h1>Trvxl</h1>
            </div>
            <ul>
                <li><Link to=''>Home</Link></li>
                <li><Link to=''>Stays</Link></li>
                <li><Link to=''>Flights</Link></li>
                <li><Link to=''>Packages</Link></li>
                <li><Link to=''>Sign Up</Link></li>
            </ul>
        </nav>
    
    <div className="booking-field">
        <div className="heading">
            <h1>The whole world <br></br>
            awaits.
            </h1>
        </div>
        <Bookingbox />
        <Categorybox />
    </div>




    </header>
  )
}
