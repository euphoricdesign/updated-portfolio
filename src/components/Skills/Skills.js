import React from "react";
import html from '../../images/html-5.png'
import css from '../../images/css-3.png'
import js from '../../images/js.png'
import react from '../../images/react.svg'
import sass from '../../images/sass.svg'
import redux from '../../images/redux.svg'
import git from '../../images/git.svg'
import gsap from '../../images/gsap.svg'
import chakra from '../../images/chakra.svg'
import figma from '../../images/figma.png'
import next from '../../images/next.png'
import "./Skills.scss";

const Skills = () => {
    return (
    <div className="skills-container">
        <ul className="skill-grid">
            <li>
                <div className="item-container">
                    <img src={html} alt="html"/>
                    <p>HTML</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={css} alt="css"/>
                    <p>CSS</p>

                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={js} alt="js"/>
                    <p>Javascript</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={react} alt="react"/>
                    <p>React</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={redux} alt="redux"/>
                    <p>Redux</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={next} alt="next"/>
                    <p>Next</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={git} alt="git"/>
                    <p>Git</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={sass} alt="sass"/>
                    <p>SASS</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={chakra} alt="chakra"/>
                    <p>Chakra UI</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={gsap} alt="gsap"/>
                    <p>GSAP</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={figma} alt="figma"/>
                    <p>Figma</p>
                </div>
            </li>
        </ul>
    </div>
    );
};

export default Skills;
