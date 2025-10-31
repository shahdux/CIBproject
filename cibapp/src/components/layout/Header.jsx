import React, { Component } from 'react';
import "./Header.css"
import heroimg from "../../assets/heroimage.svg"
import Button from '../common/Button';
const Header = () => {
    return (
        <div className='heroSection'>
            <div className='forpg'>
                <p className='heroTitle'>CIB</p>
                <p className='heroSub'>Delivering value to our clients, our 
community and our shareholders</p>
            <Button buttonName="Discover More"/>
            </div>
            <img src={heroimg} alt="" className='imageh'/>
        </div>
      );
}
 
export default Header;