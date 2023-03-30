import React from 'react';
import '../styles/Footer.css';
import GithubLogo from '../images/githublogo.png';
import LinkedIn from '../images/LinkedIn.png';


function Footer() {
    return (
      <footer className='container'>
        <a href="https://github.com/Ag6793" target="_blank" rel="noopener noreferrer" id="gitlogo"><img src={ GithubLogo } alt="Github logo" className='logo'/></a>

        <a href="https://www.linkedin.com/in/alexandria-guerrero-589941172/" target="_blank" rel="noopener noreferrer" id="linkedinlogo"><img src={ LinkedIn } alt="LinkedIn Logo" className='logo'/></a>

        
      </footer>
    );
  }
  
  export default Footer;