import React from 'react';
import { Link } from 'react-router-dom';
import  './Footer.scss'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                    <li><Link><i class="fab fa-facebook"></i></Link></li>
                    <li><Link><i class="fab fa-linkedin"></i></Link></li>
                    <li><Link><i class="fab fa-instagram"></i></Link></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;