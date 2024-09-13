import React from 'react'


export default function Bookingbox() {
  return (
    <div className='Bookingbox'>
        <div className="input-field">
            <div className="Input">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='Search destinations, hotals' />
            </div>

            <div className="Input">
                <i className="fa-solid fa-calendar-days"></i>
                <input type="date" placeholder='Check in' />
                <i className="fa-solid fa-calendar-days"></i>
                <input type="date" placeholder='Check out' />
            </div>

            <div className="Input">
                <i className="fa-solid fa-bed"></i>
                <select>
               <option>1 room, 2 adults</option>
               <option>2 rooms, 4 adults</option>
                 </select>
            </div>

            <button className='Searchbtn'>Search</button>
        </div>
    </div>
  )
}
