import React from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import image from '../../images/Mockup.png'

const PortfolioContent = (props) => {

  return ( 
    <>
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
          <Link className="button-projects" href="#" title="View site here">Button</Link>
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
          <Link className="button-projects" href="#" title="View site here">Button</Link>
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
          <Link className="button-projects" href="#" title="View site here">Button</Link>
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
          <Link className="button-projects" href="#" title="View site here">Button</Link>
        </div>
      </div>
    </>
    
  )
};

export default PortfolioContent;