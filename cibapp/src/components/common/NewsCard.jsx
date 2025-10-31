import React, { Component } from 'react';
import "./NewsCard.css"
const NewsCard = (props) => {
    return ( 
        <div className='newsCard'>
            <img src={props.newsimage} alt="" />
            <div className='fornewspg'>
                <p className='newsdate'>{props.newsDate}</p>
                                <p className='newstitle'>{props.newsTitle}</p>

                <p className='newsdes'>{props.newsDes}</p>

            </div>
        </div>
     );
}
 
export default NewsCard;