import React from 'react';
import TitleComp from '../../components/Title/TitleComp';
import PortfolioContent from './PortfolioContent';
import Footer from '../../components/Footer/Footer';
import './Projects.scss';

const Projects = () => {
    return (
    <>
        <div className="bd-container" id="portfolio">
            <TitleComp title={"projects"} span={"projects"}/>
            <PortfolioContent />
        </div>
        <Footer />
    </>
    );
};

export default Projects;