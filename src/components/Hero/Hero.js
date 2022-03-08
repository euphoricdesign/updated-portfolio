import React, { useEffect } from 'react';
import Typical from 'react-typical'
import imagen1 from '../../images/girl.png';
import { gsap } from 'gsap';
import Footer from '../../components/Footer/Footer';
import './Hero.scss';

const Hero = () => {
    const style = { width : 70 }

    const timeline = gsap.timeline();

    useEffect(() => {
        const overlay = document.querySelector('.overlay');
        timeline.from(overlay, {opacity: 0,  duration: 2.5})
    })

    return (
        <div className="hero-wrapper">
            <div className="overlay">
                <div>
                    <div>
                        <img src={imagen1} style={style} alt=""/>
                    </div>
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
            <Footer />
        </div>
    );
};

export default Hero;