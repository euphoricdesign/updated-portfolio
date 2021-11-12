import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';


const Navbar = () => {
    const ThemeSwitcher = useThemeSwitcher();

    const [ isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => setIsMenuActive(!isMenuActive);
    const titleText1 = `<`;
    const titleText2 = ` />`;
    
    return (
        <div>
            <header className="header" id="header">
                <nav className="nav container">
                    <Link className="nav-logo" to="/">
                        <h1>{titleText1}<span>EuphoricDesign</span>{titleText2}</h1>
                    </Link>

                    <div className={`nav-menu ${ isMenuActive ? "show-menu" : "" }`} id="nav-menu">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link onClick={toggleMenu} className="nav-link" to="/about">.about()</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={toggleMenu} className="nav-link" to="/projects">.projects()</Link>
                            </li>
                            <li className="nav-item">
                                <Link onClick={toggleMenu} className="nav-link" to="/contact">.contact()</Link>
                            </li>
                            {ThemeSwitcher}
                        </ul>

                        
                    </div>

                    <div onClick={toggleMenu} className="nav-toggle" id="nav-toggle">
                        <div className={`hamburger ${ isMenuActive ? "active" : "" }`}><div className="bar"></div></div>
                    </div>
                </nav>
            </header>
        </div>
    )
};

export default Navbar;