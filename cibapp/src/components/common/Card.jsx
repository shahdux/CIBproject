import React, { Component } from 'react';
import "./Card.css"
const Card = (props) => {
    return ( 
        <div className='card1'>
            <img src={props.iconimg} alt="" />
            <p className='cardtext'>{props.cardtextname}</p>
        </div>
     );
}
 
export default Card;