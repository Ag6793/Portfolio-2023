import React from 'react';
//The styling for the Navbar
import '../styles/Navbar.css';

function Navbar() {

    return (
        <div className="navbar">
            <ul className="navbar">
                <li><a href="home">Home</a></li>
                <li><a href="contact">Contact Me</a></li>
                <li><a href="resume">Resume</a></li>
                <li><a href="projects">Projects</a></li>
            </ul>
        </div>
    );
}

export default Navbar;