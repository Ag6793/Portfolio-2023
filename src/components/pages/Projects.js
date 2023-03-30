import React from 'react';
import Tastemakers from '../../images/projectImages/Tastemaker_interact_1.png';
import BookEngine from '../../images/projectImages/BookSearchEngine-Screenshot.jpg';
import TeamGenerator from '../../images/projectImages/Generator-homepage.jpg';
import Gypsy from '../../images/projectImages/demo.png';
import PasswordGenerator from '../../images/projectImages/passwordgenerator-screenshot.jpeg';
import NoteTaker from '../../images/projectImages/Screen-shot_Note-Taker_1.jpeg';
import { Github } from 'react-bootstrap-icons';
import('../../styles/Projects.css')



export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section id="imageContainer">
        {/* Tastemaker Project */}
        <section class="projectCard">
          <a href="https://ag6793.github.io/Taste-Maker/" target="_blank" rel="noreferrer"><img src={Tastemakers} alt="A screenshot of Tastamker project" class='projectImg' /></a>
          <a href="https://github.com/Ag6793/Taste-Maker" target="_blank" rel="noreferrer"> <Github id="gitIcon" className="icon" /></a>
        </section>

        {/* Gypsy App */}
        <section class="projectCard">
          <a href="https://pure-peak-95833.herokuapp.com/" target="_blank" rel="noreferrer"><img src={Gypsy} alt="A screenshot of Gypsy project" class='projectImg' /></a>
          <a href="https://github.com/Ag6793/Gypsy/tree/main" target="_blank" rel="noreferrer"> <Github id="gitIcon" className="icon" /></a>
        </section>

          {/* Book Engine Project */}
          <section class="projectCard">
          <a href="https://booksearchengine2023.herokuapp.com/" target="_blank" rel="noreferrer"><img src={BookEngine} alt="A screenshot of Book Search Engine project" class='projectImg' /></a>
          <a href="https://github.com/Ag6793/Book-Search-Engine" target="_blank" rel="noreferrer"> <Github id="gitIcon" className="icon" /></a>
        </section>

          {/* Team Profile Generator */}
          <section class="projectCard">
          <img src={TeamGenerator} alt="A screenshot of Team Generator project" class='projectImg' />
          {/* Application does not have a live link */}
          {/* <a href="https://github.com/Ag6793/Team-Profile-Generator" target="_blank" rel="noreferrer"><img src={TeamGenerator} alt="A screenshot of Team Generator project" class='projectImg' /></a> */}
          <a href="https://github.com/Ag6793/Team-Profile-Generator" target="_blank" rel="noreferrer"> <Github id="gitIcon" className="icon" /></a>
        </section>

        {/* Password Generator */}
        <section class="projectCard">
          <a href="https://ag6793.github.io/Password-Generator/" target="_blank" rel="noreferrer"><img src={PasswordGenerator} alt="A screenshot of Password Generator project" class='projectImg' /></a>
          <a href="https://github.com/Ag6793/Password-Generator" target="_blank" rel="noreferrer"> <Github id="gitIcon" className="icon" /></a>
        </section>

        {/* NoteTaker App */}
        <section class="projectCard">
          <a href="https://notetaker233.herokuapp.com/" target="_blank" rel="noreferrer"><img src={NoteTaker} alt="A screenshot of Note Taker project" class='projectImg' /></a>
          <a href="https://github.com/Ag6793/Note-Taker" target="_blank" rel="noreferrer"> <Github id="gitIcon" className="icon" /></a>
        </section>

      </section>

    </div>
  );
}