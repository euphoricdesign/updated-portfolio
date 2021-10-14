import React from 'react';
import TitleComp from '../../components/Title/TitleComp';
import PortfolioContent from './PortfolioContent';
import project1 from '../../images/fondo1.jpg'


import './Projects.scss'

const Projects = () => {
    return (
        <div className="portfolio section bd-container" id="portfolio">
            <TitleComp title={"projects"} span={"projects"}/>
            <div className="portfolio-container bd-grid">
                <PortfolioContent image={project1}/>
                <PortfolioContent image={project1}/>
                <PortfolioContent image={project1}/>
                <PortfolioContent image={project1}/>
                <PortfolioContent image={project1}/>
                <PortfolioContent image={project1}/>
            </div>
        </div>
    );
};

export default Projects;