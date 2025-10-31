import React, { Component } from 'react';
import "./Home.css";
import Navbar from './../components/layout/Navbar';
import Header from '../components/layout/Header';
import MainMenuTab from '../components/common/MainMenuTab';
import Subtitle from '../components/common/Subtitle';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

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
                <Card/>

            </div>
        </div>
        
        
        
        
        
        
        
        
        </>
    );
}
 
export default Home;