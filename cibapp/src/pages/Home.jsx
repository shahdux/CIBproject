import React, { Component } from 'react';
import "./Home.css";
import Navbar from './../components/layout/Navbar';
import Header from '../components/layout/Header';
import MainMenuTab from '../components/common/MainMenuTab';
import Subtitle from '../components/common/Subtitle';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import Button from '../components/common/Button';
import CenterCard from '../components/common/CenterCard';
import cardimage1 from "../assets/cardimg1.svg";



 

const Home = () => {
    return (  
        <>
        
        
        
        <Navbar/>
        
        <Header/>
        <MainMenuTab/>
        
        <div className='section1'>
            <div className='forpg2'>

<Subtitle subtitleName="Apply Online" />
<SectionTitle sectiontitlename=" Apply online now for cards and loans with ease!"/>
            </div>
            <div className='forcards'>
                <Card iconimg={icon1}
                 cardtextname="Apply for a New 
Account"/>
   <Card iconimg={icon2}
                 cardtextname="Apply for a Card"/>
                  <Card iconimg={icon3}
                 cardtextname="Apply for a loan or 
overdraft"/>

            </div>
        </div>
        
        <div className='section1 section2height'>
             <div className='forpg2'>

<SectionTitle sectiontitlename="Learning Center"/>
<p className='subtitle2'>Learn more about banking and your finances</p>             </div>
             <div className='forcards'>
                <CenterCard 
                cardimage={cardimage1}
                cardtitlename="Buying and making a home"
                cardtitledes="Buying a home can be an emotional process, 
but its important to approach it 
logically"
cardbuttonname="Read more"
                />
             </div>
             <Button buttonName="View more"/>


        </div>
        
        
        
        
        
        
        </>
    );
}
 
export default Home;