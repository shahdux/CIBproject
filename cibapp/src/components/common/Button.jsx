import React, { Component } from 'react';
import "./Button.css"
const Button = (props) => {
    return ( 
        <div className='button'>
            <p className='buttonName'>{props.buttonName}</p>
        </div>
     );
}
 
export default Button;