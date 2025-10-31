import React, { Component } from 'react';
import "./Footer.css";
import logoimg from "../../assets/logo.svg"
import Footerlink from '../common/Footerlink';
import footerimg1 from "../../assets/google.svg";
import footerimg2 from "../../assets/appstiore.svg";
import socials from "../../assets/socials.svg";
import footerbg from "../../assets/bgf2.svg";






const Footer = () => {
    return ( 
        <>
        
        <div className='footer'>
<div className='firstpart'>
    <div className='logowdivs'>
        <img src={logoimg} alt="" />
        <div className='forfooterlinks' >
            <div className='footerdiv1'>
                <Footerlink footerlinkname="FAQs"/>
                  <Footerlink footerlinkname="Learning Center"/>
                    <Footerlink footerlinkname="Fees & Charges"/>
                      <Footerlink footerlinkname="Terms & Conditions"/>
                      
            </div>
             <div className='footerdiv1'>
                <Footerlink footerlinkname="Local"/>
                  <Footerlink footerlinkname="Abroad"/>
                    <Footerlink footerlinkname="Business"/>
                      <Footerlink footerlinkname="Corporate"/>
                      
            </div>
             <div className='footerdiv1'>
                <Footerlink footerlinkname="Careers"/>
                  <Footerlink footerlinkname="Why CIB"/>
                    <Footerlink footerlinkname="Email Us"/>
                      <Footerlink footerlinkname="System Status"/>
                      
            </div>
        </div>
        <div className='forfooterimages'>
            <img src={footerimg1} alt="" />
                        <img src={footerimg2} alt="" />


        </div>
    </div>
</div>
<div className='secPart'>
    <div className='footerlinks2'>
                  <Footerlink footerlinkname="CBE Approvals"/>

                  <Footerlink footerlinkname="Cookie Policy"/>
                  <Footerlink footerlinkname="Privacy Policy"/>

                  <Footerlink footerlinkname="User Agreements"/>

    </div>
    <img src={socials} alt="" />

</div>
        </div>
        <img src={footerbg} alt="" className='bgf'/>
        <div className='lastSection'>
            <p className='copytext'>Copyright © 2025 Commercial International Bank</p>
        </div>
        </>
     );
}
 
export default Footer;