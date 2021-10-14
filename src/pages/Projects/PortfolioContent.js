import React, {useState, useEffect} from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";

const PortfolioContent = ({ image }) => {
  const [content, setContent] = useState(true)

  const showCards = () => {
    setTimeout(() => {
      setContent(false)
    },1000)
  }

  useEffect(() => {
    showCards()
  })

  return (
    <div className="figure">
      
      {
        content 
        ?
        <div className="card"></div>
        :
        <img src={image} alt="project1" className="portfolio-img" />
      }
      
      <div className="capa">
        <h3>Movie App</h3>
        <p>Lorem Ipsum is simply dummy</p>
        <div className="icon-wrapper">
          <i className="fab fa-react"></i>
          <i className="fab fa-sass"></i>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
