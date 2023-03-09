import React from 'react';
import PDF from '../../pdf/AlexandriaGuerrero_resume.pdf';
import resumeimg from '../../images/resumeimg1.jpg';
import resumeimg2 from '../../images/resumeimg2.jpg';
import('../../styles/Resume.css');


export default function Resume() {
  const onButtonClick = () => {
    fetch(PDF).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = PDF;
        alink.click();
      })
    })
  }

  return (
    <div id="resumebody">
      <h1>Resume</h1>
      <br></br>
      <p>
        Click the button below to download my resume<br></br>
        <button onClick={onButtonClick} id="resumeBtn">
          Download pdf
        </button>
      </p>

      <section>
        <img src={resumeimg} alt="Page 1 of resume" class="resumeimg" />
        <img src={resumeimg2} alt="Page 2 of resume" class="resumeimg" />
      </section>
    </div>
  );
}