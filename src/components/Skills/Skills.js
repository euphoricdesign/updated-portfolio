import React from "react";
import "./Skills.scss";
import html from '../../images/html-5.png'
import css from '../../images/css-3.png'
import js from '../../images/js.png'
import react from '../../images/react.svg'
import sass from '../../images/sass.svg'
import redux from '../../images/redux.svg'
import git from '../../images/git.svg'
import gsap from '../../images/gsap.svg'

const Skills = () => {
    return (
    <div className="skills-container">
        <ul className="skill-grid">
            <li>
                <div className="item-container">
                    <img src={html}/>
                    <p>HTML</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={css}/>
                    <p>CSS</p>

                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={js}/>
                    <p>Javascript</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={react}/>
                    <p>React</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={sass}/>
                    <p>SASS</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={redux}/>
                    <p>Redux</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={git}/>
                    <p>Git</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={gsap}/>
                    <p>GSAP</p>
                </div>
            </li>
        </ul>
    </div>
    );
};

export default Skills;
