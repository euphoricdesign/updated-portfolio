import React, {useEffect} from "react";
import image from '../../images/Mockup.png';
import image2 from '../../images/Mockup2.png' ;
import image3 from '../../images/Mockup3.png' ;
import gsap from "gsap";
import "./Projects.scss";

const PortfolioContent = () => {
  const timeline = gsap.timeline();

    useEffect(() => {
        const image = document.querySelector('.img-size');
        const aboutText = document.querySelectorAll('.about-text');
        const secondImage = document.querySelector('.second-image')
        const aboutText2 = document.querySelectorAll('.about-text2');
        const thirdImage = document.querySelector('.third-image')
        const aboutText3 = document.querySelectorAll('.about-text3');
        timeline.from(image, {opacity: 0, x: -600, duration: 1.3})
        .from(aboutText, {opacity: 0, x: 600, duration: 1.5, stagger:0.2}, "-=1.3")
        .from(secondImage, {opacity: 0, x: 600, duration: 1.3, stagger:0.2}, "-=1.3")
        .from(aboutText2, {opacity: 0, x: -600, duration: 1.5, stagger:0.2}, "-=1.3")
        .from(thirdImage, {opacity: 0, x: -600, duration: 1.3, stagger:0.2}, "-=1.3")
        .from(aboutText3, {opacity: 0, x: 600, duration: 1.5, stagger:0.3}, "-=1.3")
    })


  return ( 
    <>
      <div className="container-work">
        <div className="container-img">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="container-text">
          <h4 className="about-text">Red Bull - Torneo Janoz 1X1</h4>
          <h4 className="about-text tech">Tecnologías</h4>
          <ul className="tech-list about-text">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </ul>
          <p className="about-text"><a className="button-projects" href="https://redbull-janoz1x1.netlify.app/" target='_blank' rel="noreferrer" title="View site here">View site here</a></p>
        </div>
      </div>

      <div className="container-work">
        <div className="container-img">
          <img src={image2} className="img-size second-image" alt="" />
        </div>
        <div className="container-text">
          <h4 className="about-text2">React Weather Application</h4>
          <h4 className="about-text2 tech">Tecnologías</h4>
          <ul className="tech-list about-text2">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </ul>
          <p className="about-text2"><a className="button-projects" href="https://challenge-weather.netlify.app/" target='_blank' rel="noreferrer" title="View site here">View site here</a></p>
        </div>
      </div>

      <div className="container-work">
        <div className="container-img">
          <img src={image3} className="img-size third-image" alt="" />
        </div>
        <div className="container-text">
          <h4 className="about-text3"> United States Congress App</h4>
          <h4 className="tech about-text3">Technologies</h4>
          <ul className="tech-list about-text3">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </ul>
          <p className="about-text3"><a className="button-projects" href="https://congress-app.netlify.app/" target='_blank' rel="noreferrer" title="View site here">View site here</a></p>
        </div>
      </div>
{/* 
      <div className="container-work">
        <div className="container-img">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="container-text">
          <h4>Red Bull - Torneo Janoz 1X1</h4>
          <h4 className="tech">Technologies</h4>
          <ul className="tech-list">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </ul>
          <p><a className="button-projects" href="https://redbull-janoz1x1.netlify.app/" target='_blank' rel="noreferrer" title="View site here">View site here</a></p>
        </div>
      </div> */}
    </>
  )
};

export default PortfolioContent;