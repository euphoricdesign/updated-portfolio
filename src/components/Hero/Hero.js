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
                    <h1 className="my-name"><span className="hi">Hola</span>, Soy Merlina Villecco</h1>
                    <p className="what-i-do">
                            <Typical 
                                loop={Infinity}
                                wrapper='b'
                                steps={[
                                    'Desarrolladora Front-end',
                                    1500,
                                    'Diseñadora Web',
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