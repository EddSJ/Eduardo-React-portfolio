import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contactImg from "../../../static/assets/images/contact/contact-img.jpg";


export default function() {

    return (
        <div className="contact-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    backgroundImage: `url(${contactImg})`  
                }}
            />
            <div className="right-column">
              <div className="contact-bullets-points">
                <div className="bullet-point-group">
                  <div className="icon">
                    <FontAwesomeIcon icon="phone" />
                  </div>

                  <div className="text">555-5555-555</div>
                </div>

                <div className="bullet-point-group">
                  <div className="icon">
                    <FontAwesomeIcon icon="envelope" />
                  </div>

                  <div className="text">eddiekidd98@gmail.com</div>
                </div>

                <div className="bullet-point-group">
                  <div className="icon">
                    <FontAwesomeIcon icon="map-marked-alt" />
                  </div>

                  <div className="text">cocotitlan, Edo Mex Mexico</div>
                </div>
              </div>
            </div>
        </div>
    ); 
}