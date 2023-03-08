import React from 'react';
//The styling for the Navbar
import '../styles/Header.css';
import signatureimg from '../images/signature2.png';

function Header() {

    return (
        <div id="headerbar">
            <img src={signatureimg} alt = "signature of name" id="signature"/>
        </div>
    );
}

export default Header;