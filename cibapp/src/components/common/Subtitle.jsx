import React, { Component } from 'react';
import "./Subtitle.css"
const Subtitle = (props) => {
    return ( 
        <p className='subTitle'>{props.subtitleName}</p>
     );
}
 
export default Subtitle;