import React from 'react'
import { Link } from 'react-router-dom'



export default function Categorybox() {
  return (
    <>
    <div className="categorybox">
        <h4>Top Categories</h4>
        <div className="box">
            <div className="card">
            <i className="fa-solid fa-umbrella-beach"></i>
                <li><Link to='/Beach'>Beach</Link></li>
            </div>
            <div className="card">
            <i class="fa-sharp-duotone fa-solid fa-cactus"></i>
                <li><Link to='/Desert'>Deserts</Link></li>
            </div>
            <div className="card">
            <i className="fa-solid fa-mountains"></i>
                <li><a href=''>Mountains</a></li>
            </div>
            <div className="card">
            <i className="fa-thin fa-tree-city"></i>
                <li><a href=''>Iconic cities</a></li>
            </div>
            <div className="card">
            <i className="fa-solid fa-sailboat"></i>
                <li><a href=''>Houseboats</a></li>
            </div>
            <div className="card">
            <i className="fa-solid fa-route"></i>
                <li><a href=''>Camping</a></li>
            </div>

        </div>
    </div>

    
    </>
  )
}



