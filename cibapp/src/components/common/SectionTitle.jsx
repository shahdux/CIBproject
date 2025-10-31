import React, { Component } from 'react';
import "./SectionTitle.css"
const SectionTitle = (props) => {
    return ( 
<p className='sectiontitle'>{props.sectiontitlename}</p>
     );
}
 
export default SectionTitle;