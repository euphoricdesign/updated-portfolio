import React, { useEffect } from 'react';
import about from '../../images/about2.jpg'
import TitleComp from '../../components/Title/TitleComp';
import Skills from '../../components/Skills/Skills';
import { gsap } from 'gsap';
import './AboutPage.scss'

const AboutPage = () => {
    const timeline = gsap.timeline();

    useEffect(() => {
        const image = document.querySelector('.img');
        const aboutText = document.querySelectorAll('.about-text');
        const aboutTextP = document.querySelectorAll('.about-text-p');
        const containerWithOpaciy = document.querySelector('.container-with-opacity');
        timeline.from(image, {opacity: 0, x: -600, duration: 1.3})
        .from(aboutText, {opacity: 0, x: 600, duration: 1.5, stagger:0.2}, "-=1.3")
        .from(aboutTextP, {opacity: 0, x: 600, duration: 1.5, stagger:0.2}, "-=1.3")
        .from(containerWithOpaciy, {opacity: 1, duration: 2.5});
    })

    return (
        <div className='container-with-opacity'>
            <div className="about-page">
                <TitleComp title={"sobre mi"} span={"sobre mi"} />
                <div className="image-section">
                    <div className="img">
                        <img className="img-about" src={about} alt=""/>
                    </div>
                    <div className="about-info">
                        <h4 className="about-text">Soy<span> Merlina</span></h4>
                        <p className="about-text-p">
                            Desarrolladora y diseñadora web creativa, ocurrente y con muchas ganas de aprender y seguir creciendo profesionalmente.
                        </p>
                        <p className="about-text-p">
                            Actualmente me encuentro en busqueda de desafios para plasmar en proyectos interesantes, todos mis conocimientos y experiencia.
                        </p>
                    </div>
                </div>

                <div>
                    <TitleComp title={"habilidades"} span={"habilidades"} />
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;