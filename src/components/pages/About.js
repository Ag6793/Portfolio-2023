import React from 'react';
import Profilepic from '../../images/Profilephoto.jpg'
import ('../../styles/About.css');

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <img src= {Profilepic} alt="A photograph of me"/>
      <p id="aboutInfo">
        I graduated in 2020 from the University of Texas at Austin with a BS in Radio, Television, and Film and a BFA in Studio Art.
        I was born and raised in Houston, Texas and moved to Austin in 2016. I have been in Austin ever since and currently work as a Frame consultant and gallery assistant
        at Ao5 Gallery in the Arboretum.
      </p>
    </div>
  );
}
