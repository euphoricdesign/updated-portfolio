import React, {useEffect} from 'react';
import  './Footer.scss';
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
                    <li><a rel='noreferrer' target="_blank" href="https://www.facebook.com/profile.php?id=100011077833486v"><i className="fab fa-facebook"></i></a></li>
                    <li><a rel='noreferrer' target="_blank" href="https://www.linkedin.com/in/merlina-villecco-64149a214/"><i className="fab fa-linkedin"></i></a></li>
                    <li><a rel='noreferrer' target="_blank" href="https://www.instagram.com/merlinavillecco_/"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;