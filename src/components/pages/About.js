import React from 'react';
import Profilepic from '../../images/Profilephoto.jpg'
import ('../../styles/About.css');

export default function About() {
  return (
    <div>
      <h1 id="about">About me</h1>
      <img src= {Profilepic} alt="A photograph of me" id="profilepic"/>
      <p id="aboutInfo">
        Hi! My name is Alexandria and I am a recent graduate of the Full-Stack Coding Bootcamp at the University of Texas at Austin with an emphasis in Front-End development. I also earned a BFA
        in Studio Art and a BS in Radio,Technology, and Film from UT Austin as well. I have a strong background in Art and Design, with my current occupation as a Framing Consultant
        and Gallery Assistant for the Ao5 Gallery here in the Austin Area.
        <br></br>
        <br></br>
        I was born and raised in Houston, Texas and moved to Austin to attend college in 2016. I love to watch movies and TV, especially animation. I also enjoy reading, crafting,
        and drawing in my free time, when I have any. I've recently delved into the coding world, and I am looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.
        </p>
    </div>
  );
}
