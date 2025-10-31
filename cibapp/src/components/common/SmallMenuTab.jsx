import React, { Component } from 'react';
import "./SmallMenuTab.css"
const SmallMenuTab = (props) => {
    return ( 
        <p className='smallmenutab'>{props.smalltabtitle}</p>
     );
}
 
export default SmallMenuTab;