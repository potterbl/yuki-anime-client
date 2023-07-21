import React from 'react';
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-heading">
                <h1 className="logotype">LOGO</h1>
                <h2 className="footer-caption">contacts</h2>
                <h2 className="footer-caption">social media</h2>
                <h2 className="footer-caption">site-map</h2>
            </div>
            <div className="footer-bottom">
                <p className="footer-thin">copyright. all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;