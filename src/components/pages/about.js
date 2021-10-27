import React from 'react';

import aboutImg from "../../../static/assets/images/about/karen-&-eddie-at-the-park.jpg";


export default function() {

    return (
        <div className="about-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    backgroundImage: `url(${aboutImg})`  
                }}
            />
            <div className="right-column">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas atque, ab fugit exercitationem, ex ducimus fuga corrupti tempora quis veritatis in blanditiis sequi recusandae consequuntur corporis animi cum commodi possimus?</p>
            </div>
        </div>
    ); 
}