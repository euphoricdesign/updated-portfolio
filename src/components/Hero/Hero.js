import React, { useEffect } from 'react';
import Typical from 'react-typical'
import './Hero.scss'
// import imagen1 from '../../images/imagen2.svg'
import { gsap } from 'gsap';

const Hero = () => {
    const timeline = gsap.timeline();

    useEffect(() => {
        const overlay = document.querySelector('.overlay');
        timeline.from(overlay, {opacity: 0,  duration: 2.5})
    })

    return (
        <div className="hero-wrapper">
            <div className="overlay">
                <div><i class="fas fa-laptop-code"></i></div>
                <h1 className="my-name"><span className="hi">Hi</span>, I'm Merlina Villecco</h1>
                <p className="what-i-do">I'm a {` `}
                        <Typical 
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                'front-end developer',
                                1500,
                                'web designer',
                                1500
                            ]}
                        />
                </p>
            </div>
        </div>
    );
};

export default Hero;