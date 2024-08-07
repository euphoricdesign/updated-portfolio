import React from "react";
import html from '../../images/html-5.png'
import css from '../../images/css-3.png'
import js from '../../images/javascript.svg'
import react from '../../images/react.svg'
import redux from '../../images/redux.svg'
import git from '../../images/git.svg'
import node from '../../images/node3.svg'
import express from '../../images/express.svg'
import postgre from '../../images/postgresql.svg'
import mongodb from '../../images/mongodb.svg'
import firebase from '../../images/firebase.svg'
import tailwind from '../../images/tailwind.svg'
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
                    <img src={node} alt="node"/>
                    <p>Node</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={express} alt="express"/>
                    <p>Express</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={firebase} alt="firebase"/>
                    <p>Firebase</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={mongodb} alt="mongodb"/>
                    <p>Mongo DB</p>
                </div>
            </li>
            <li>
                <div className="item-container">
                    <img src={postgre} alt="postgre"/>
                    <p>PostgreSQL</p>
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
                    <img src={tailwind} alt="tailwind"/>
                    <p>Tailwind</p>
                </div>
            </li>
        </ul>
    </div>
    );
};

export default Skills;
