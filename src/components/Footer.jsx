import React from 'react';
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-heading">
                <h1 className="logotype">YUKI</h1>
            </div>
            <div className="footer-body">
                <div className="footer-container">
                    <h2 className="footer-caption">contacts</h2>
                    <ul>
                        <li><a href="https://www.instagram.com/potter.bl/">Instagram</a></li>
                        <li><a href="https://t.me/potter_bl">Telegram</a></li>
                        <li><a href="https://www.linkedin.com/in/potterbl/">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-thin">copyright. all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;