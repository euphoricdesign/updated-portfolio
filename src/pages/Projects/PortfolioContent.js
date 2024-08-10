import React, {useEffect} from "react";
import image from '../../images/mockup4.gif';
import image2 from '../../images/mockup3.gif' ;
import image3 from '../../images/mockup2.gif' ;
import image4 from '../../images/mockup1.gif' ;
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

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
        const fourthImage = document.querySelector('.fourth-image');
        const aboutText4 = document.querySelectorAll('.about-text4');

        timeline.from(image, {opacity: 0, x: -600, duration: 1.3})
        .from(aboutText, {opacity: 0, x: 600, duration: 1.5, stagger:0.2}, "-=1.3")
        .from(secondImage, {opacity: 0, x: 600, duration: 1.3, stagger:0.2}, "-=1.3")
        .from(aboutText2, {opacity: 0, x: -600, duration: 1.5, stagger:0.2}, "-=1.3")
        .from(thirdImage, {opacity: 0, x: -600, duration: 1.3, stagger:0.2}, "-=1.3")
        .from(aboutText3, {opacity: 0, x: 600, duration: 1.5, stagger:0.3}, "-=1.3")
        .from(fourthImage, {opacity: 0, x: 600, duration: 1.3, stagger:0.4}, "-=1.3")
        .from(aboutText4, {opacity: 0, x: -600, duration: 1.5, stagger:0.5}, "-=1.3")
    })


  return ( 
    <>
      <div className="container-work">
        <div className="container-img md:w-[600px] md:h-[600px]">
          <img src={image} className="img-size" alt="" />
        </div>
        <div className="container-text mobile:items-center md:items-start md:pl-[6rem] md:w-[600px] md:h-[600px] flex flex-col justify-center">
          <h4 className="about-text">GoHire</h4>
          <p className="about-text text-[#8D8D92] mb-[10px] mobile:text-center md:text-start mobile:text-[14px] md:text-lg">Marketplace de servicios profesionales.</p>
          <h4 className="about-text tech font-[500]">Tecnologías</h4>
          <ul className="tech-list about-text">
            <BiLogoTypescript className="text-[25px] ml-[6px] text-sky-700" />
            <RiNextjsFill className="text-[25px] ml-[6px] text-gray-700" />
            <RiTailwindCssFill className="text-[25px] ml-[6px] text-sky-500" />
          </ul>
          <p className="about-text w-[150px] h-[100px]"><a className="button-projects" href="https://go-hire-app.vercel.app/" target='_blank' rel="noreferrer" title="View site here">View site here</a></p>
        </div>
      </div>

      <div className="container-work">
        <div className="container-img md:w-[600px] md:h-[600px]">
          <img src={image2} className="img-size second-image" alt="" />
        </div>
        <div className="container-text mobile:items-center md:items-start md:pl-[6rem] md:w-[600px] md:h-[600px] flex flex-col justify-center">
          <h4 className="about-text2">Gadget</h4>
          <p className="about-text2 text-[#8D8D92] mb-[10px] mobile:text-center md:text-start mobile:text-[14px] md:text-lg">Ecommerce de productos electronicos.</p>
          <h4 className="about-text2 tech font-[500]">Tecnologías</h4>
          <ul className="tech-list about-text2">
            <BiLogoTypescript className="text-[25px] ml-[6px] text-sky-700" />
            <RiNextjsFill className="text-[25px] ml-[6px] text-gray-700" />
            <RiTailwindCssFill className="text-[25px] ml-[6px] text-sky-500" />
          </ul>
          <p className="about-text2 w-[150px] h-[100px]"><a className="button-projects" href="https://gadget-app.vercel.app/" target='_blank' rel="noreferrer" title="View site here">View site here</a></p>
        </div>
      </div>

      <div className="container-work">
        <div className="container-img md:w-[600px] md:h-[600px]">
          <img src={image3} className="img-size third-image" alt="" />
        </div>
        <div className="container-text mobile:items-center md:items-start md:pl-[6rem] md:w-[600px] md:h-[600px] flex flex-col justify-center">
          <h4 className="about-text3">DocTrack</h4>
          <p className="about-text2 text-[#8D8D92] mb-[10px] mobile:text-center md:text-start mobile:text-[14px] md:text-lg">Plataforma de gestión de turnos médicos.</p>
          <h4 className="tech about-text3 font-[500]">Tecnologías</h4>
          <ul className="tech-list about-text3">
            <FaReact className="text-[25px] ml-[6px] text-sky-600" />
            <SiRedux className="text-[25px] ml-[6px] text-violet-500" />
            <SiExpress className="text-[25px] ml-[6px] text-gray-700" />
            <FaNodeJs className="text-[25px] ml-[6px] text-green-700" />
            <SiPostgresql className="text-[25px] ml-[6px] text-sky-800" />
          </ul>
          <p className="about-text3 w-[150px] h-[100px]"><a className="button-projects" href="https://euphodesign.netlify.app/" target='_blank' rel="noreferrer" title="View site here">View site here</a></p>
        </div>
      </div>
      

      <div style={{"marginBottom":"200px"}} className="container-work clase-prueba">
        <div className="container-img md:w-[600px] md:h-[600px]">
          <img src={image4} className="img-size fourth-image" alt="" />
        </div>
        <div className="container-text mobile:items-center md:items-start md:pl-[6rem] md:w-[600px] md:h-[600px] flex flex-col justify-center">
          <h4 className="about-text4">FlickPick</h4>
          <p className="about-text2 text-[#8D8D92] mb-[10px] mobile:text-center md:text-start mobile:text-[14px] md:text-lg">Plataforma de salas de cine interactivas.</p>
          <h4 className="tech about-text4 font-[500]">Tecnologías</h4>
          <ul className="tech-list about-text4">
            <FaHtml5 className="text-[25px] ml-[6px] text-orange-500" />
            <FaCss3Alt className="text-[25px] ml-[6px] text-sky-600" />
            <IoLogoJavascript className="text-[25px] ml-[6px] text-yellow-400" />
            <FaNodeJs className="text-[25px] ml-[6px] text-green-700" />
            <SiExpress className="text-[25px] ml-[6px] text-gray-700" />
            <DiMongodb className="text-[25px] ml-[6px] text-green-400" />
          </ul>
          <p className="about-text4 w-[150px] h-[100px]"><a className="button-projects" href="https://euphodesign.netlify.app/" target='_blank' rel="noreferrer" title="View site here">View site here</a></p>
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