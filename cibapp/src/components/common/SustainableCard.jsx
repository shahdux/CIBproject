import React, { Component } from 'react';
import "./SustainableCard.css"
const SustainableCard = (props) => {
    return ( 
        <div className='iconwdes'>
<img src={props.iconimages} alt="" />
<p className='iconTitle'>{props.icontitle}</p>
<p className='iconDes'>{props.iconDes}</p>

        </div>
     );
}
 
export default SustainableCard;