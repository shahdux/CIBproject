import React, { Component } from 'react';
import "./Card.css"
const Card = (props) => {
    return ( 
        <div className='card1'>
            <img src={props.iconimg} alt="" />
            <div className='twd'>
            <p className='cardtext'>{props.cardtextname}</p>
    <p className='cardDes2'>{props.cardtextdes}</p>
            </div>
        </div>
     );
}
 
export default Card;