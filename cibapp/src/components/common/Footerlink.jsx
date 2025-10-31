import React, { Component } from 'react';
import "./Footerlink.css"
const Footerlink = (props) => {
    return ( 
        <p className='footerLink'>{props.footerlinkname}</p>
     );
}
 
export default Footerlink;