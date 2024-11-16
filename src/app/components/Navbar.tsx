import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-logo" >Shabana</div>
            <ul className={`navbar-links ${menuActive ? "active" : ""}`}>
                <li className="navbar-link">
                    <a href="#hero">Home</a>
                </li>
                <li className="navbar-link">
                    <a href="#about">About</a>
                </li>
                <li className="navbar-link">
                    <a href="#projects">Projects</a>
                </li>
                <li className="navbar-link">
                    <a href="#skills">Skills</a>
                </li>
                <li className="navbar-link">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <AiOutlineMenu className="navbar-menu-icon" size={30} onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;