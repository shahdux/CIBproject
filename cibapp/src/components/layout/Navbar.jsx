import React, { Component } from 'react';
import "./Navbar.css"
import logoimg from "../../assets/logo.svg"
import Linkname from '../common/Linkname';


const  Navbar= () => {
    return ( 
<div className='navbar'>
    <img src={logoimg} alt="" />
    <Linkname Navtitle= "About Us"/>
      <Linkname Navtitle= "Investor Relations"/>
        <Linkname Navtitle= "Responsible Banking"/>
          <Linkname Navtitle= "Newsroom"/>
            <Linkname Navtitle= "Learning Center"/>
                        <Linkname Navtitle= "Careers"/>

            <Linkname Navtitle= "Others"/>

</div>
     );
}
 
export default Navbar ;
