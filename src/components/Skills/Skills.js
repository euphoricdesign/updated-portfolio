import React from "react";
import "./Skills.scss";

const Skills = () => {
    return (
    <div className="skills-menu">
        <ul>
            <li>
                <div>
                    <i className="fab fa-html5"></i>
                </div>
            </li>
            <li>
                <div>
                    <i className="fab fa-css3"></i>
                </div>
            </li>
            <li>
                <div>
                    <i className="fab fa-js-square"></i>
                </div>
            </li>
            <li>
                <div>
                    <i className="fab fa-react"></i>
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div>
                    <i className="fab fa-sass"></i>
                </div>
            </li>
            <li>
                <div>
                    <i className="fab fa-bootstrap"></i>
                </div>
            </li>
        </ul>
    </div>
    );
};

export default Skills;
