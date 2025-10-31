import React, { Component } from 'react';
import "./CenterCard.css"
const CenterCard = (props) => {
    return ( 
       <div className='learnCard'>
        <img src={props.cardimage} alt="" />
        <div className='forcardpg'>
            <div className='fortitlewdes'>

            <p className='cardtitle'>{props.cardtitlename}</p>
                        <p className='carddes'>{props.cardtitledes}</p>
            </div>

                        <div className='readmorediv'>
                            <p className='readmoretext'>{props.cardbuttonname}</p>
                        </div>

        </div>
       </div>
     );
}
 
export default CenterCard;