import React, { Component } from 'react';
import "./Card.css"
import icon1 from "../../assets/icon1.svg"
const Card = () => {
    return ( 
        <div className='card1'>
            <img src={icon1} alt="" />
            <p className='cardtext'>Apply for a New 
Account</p>
        </div>
     );
}
 
export default Card;