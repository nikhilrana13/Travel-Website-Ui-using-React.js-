import React from 'react'




export default function Cards({imageUrl,Labelname,PlaceName,Reviews,Score,Discount,Price}) {
  return (
    <div className="Card-box">
    <a href="" className="travel-card">
    <div className="image">
      <img src={imageUrl} />
    </div>
    <div className="content">
      <label className="category">{Labelname}</label>
      <h1 className="topic">
         {PlaceName}
      </h1>
      <div className="recommendation">
        <div className="score">
          <span>{Score}</span>
          <i class="fa-regular fa-star"></i>
        </div>
        <div className="comment">({Reviews})</div>
      </div>
      <div className="price">
        <div className="discount-info">{Discount}</div>
        <div className="original-price">{Price}</div>
      </div>
    </div>
   
  </a>
</div>
)
}
