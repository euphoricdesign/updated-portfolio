import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import  './Footer.scss'
import { gsap } from 'gsap';

const Footer = () => {
    const timeline = gsap.timeline();

    useEffect(() => {
        const footer = document.querySelector('.footer-wrapper');
        timeline.from(footer, {opacity: 0, duration: 1.5})
    })


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
                    <li><Link to=""><i className="fab fa-facebook"></i></Link></li>
                    <li><Link to=""><i className="fab fa-linkedin"></i></Link></li>
                    <li><Link to=""><i className="fab fa-instagram"></i></Link></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;