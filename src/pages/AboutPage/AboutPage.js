import React, { useEffect } from 'react';
import about from '../../images/about2.jpg'
import TitleComp from '../../components/Title/TitleComp';
import Skills from '../../components/Skills/Skills';
import Footer from '../../components/Footer/Footer';
import { gsap } from 'gsap';
import './AboutPage.scss'

const AboutPage = () => {
    const timeline = gsap.timeline();

    useEffect(() => {
        const image = document.querySelector('.img');
        const aboutText = document.querySelectorAll('.about-text');
        const containerWithOpaciy = document.querySelector('.container-with-opacity');
        timeline.from(image, {opacity: 0, x: -600, duration: 1.3})
        .from(aboutText, {opacity: 0, x: 600, duration: 1.5, stagger:0.2}, "-=1.3")
        .from(containerWithOpaciy, {opacity: 1, duration: 2.5});
    })

    return (
        <div className='container-with-opacity'>
            <div className="about-page">
                <TitleComp title={"about me"} span={"about me"} />
                <div className="image-section">
                    <div className="img">
                        <img className="img-about" src={about} alt=""/>
                    </div>
                    <div className="about-info">
                        <h4 className="about-text">I am<span> Merlina</span></h4>
                        <p className="about-text">
                            A creative web designer and developer, restless and eager to learn and continue to grow professionally.
                        </p>
                        <p className="about-text">
                            I am currently looking for challenges to translate all my knowledge and experience into interesting projects.
                        </p>
                    </div>
                </div>

                <div>
                    <TitleComp title={"skills"} span={"skills"} />
                    <Skills />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;