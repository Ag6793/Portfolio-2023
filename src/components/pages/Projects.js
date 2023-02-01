import React from 'react';
import Tastemakers from '../../images/projectImages/Tastemaker_interact_1.png'
import BookEngine from '../../images/projectImages/BookSearchEngine-Screenshot.jpg'
import TeamGenerator from '../../images/projectImages/Generator-homepage.jpg'
import Gypsy from '../../images/projectImages/demo.png'
import PasswordGenerator from '../../images/projectImages/passwordgenerator-screenshot.jpeg'
import NoteTaker from '../../images/projectImages/Screen-shot_Note-Taker_1.jpeg'
import ('../../styles/Projects.css')


export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p id="imageContainer">
      <img src= {Tastemakers} alt="A screenshot of Tastamker project" class='projectImg'/>
      <img src= {BookEngine} alt="A screenshot of Book Search Engine project" class='projectImg'/>
      <img src= {TeamGenerator} alt="A screenshot of Team Generator project" class='projectImg'/>
      <img src= {Gypsy} alt="A screenshot of Gypsy project" class='projectImg'/>
      <img src= {PasswordGenerator} alt="A screenshot of Password Generator project" class='projectImg'/>
      <img src= {NoteTaker} alt="A screenshot of Note Taker project" class='projectImg'/>
      </p>
    </div>
  );
}