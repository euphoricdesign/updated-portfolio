import React, {useEffect} from 'react';
import './Contact.scss';
import TitleComp from '../../components/Title/TitleComp';
import { gsap } from 'gsap';
import Footer from '../../components/Footer/Footer';

const Contact = () => {
    const styleParagraph1 = window.innerWidth < 1920 ? {width:150} : {width: 308}
    
    
    const styleParagraph2 = window.innerWidth < 1920 ? {width:161} : {width: 335}

    const timeline = gsap.timeline();

    useEffect(() => {
        const info = document.querySelector('.fancylink')
        const info2 = document.querySelector('.effect')
        const contactText = document.querySelector('.contact-text')
        timeline.from(info, {opacity: 0, x: -600, duration: 1.3})
        .from(contactText, {opacity: 0, x: -600, duration: 1.3}, "-=1.5")
        .from(info2, {opacity: 0, x: -600, duration: 1.3}, "-=1")
        
    })

    return (
        <>
            <div className="contact-wrapper">
                <TitleComp title={"contacto"} span={"contacto"}/>
                <div className="contact-section">
                    <div className="info">
                        <p className="contact-text title-contact">No dudes en ponerte en contacto en cualquier momento! 💌</p>
                        <p className="fancylink fancylink--preline" style={styleParagraph1}>mervil@gmail.com</p>
                        <a className="fancylink fancylink--preline effect" style={styleParagraph2} href="tel:(+54)3875656716">+54 387 565 6716</a>
                        {/* <p className="subtitle-contact">Feel free to get in touch anytime!</p> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;