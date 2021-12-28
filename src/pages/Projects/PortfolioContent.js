import React, {useEffect} from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import image from '../../images/Mockup.png'
import gsap from "gsap";

const PortfolioContent = (props) => {

  const timeline = gsap.timeline();

    useEffect(() => {
        const image = document.querySelector('.img-size');
        const aboutText = document.querySelectorAll('.about-text')
        timeline.from(image, {opacity: 0, x: -600, duration: 1.3})
        .from(aboutText, {opacity: 0, x: 600, duration: 1.5, stagger:0.2}, "-=1.3")
    })


  return ( 
    <>
      <div className="container-work">
        <div className="container-img">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="container-text">
          <h4 className="about-text">{props.title}</h4>
          <h4 className="about-text tech">Technologies</h4>
          <ul className="tech-list about-text">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </ul>
          <p className="about-text"><Link className="button-projects" href="#" title="View site here" /></p>
        </div>
      </div>

      <div className="container-work">
        <div className="container-img">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="container-text">
          <h4>{props.title}</h4>
          <h4 className="tech">Technologies</h4>
          <ul className="tech-list">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </ul>
          <Link className="button-projects" href="#" title="View site here" />
        </div>
      </div>

      <div className="container-work">
        <div className="container-img">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="container-text">
          <h4>{props.title}</h4>
          <h4 className="tech">Technologies</h4>
          <ul className="tech-list">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </ul>
          <Link className="button-projects" href="#" title="View site here" />
        </div>
      </div>

      <div className="container-work">
        <div className="container-img">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="container-text">
          <h4>{props.title}</h4>
          <h4 className="tech">Technologies</h4>
          <ul className="tech-list">
            <i className="fab fa-html5"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
          </ul>
          <Link className="button-projects" href="#" title="View site here" />
        </div>
      </div>
    </>
    
  )
};

export default PortfolioContent;