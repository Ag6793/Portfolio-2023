import React from 'react';
import PDF from '../../files/AlexandriaGuerrero_resume.pdf';
import ('../../styles/Resume.css');

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
    <div>
      <h1>Resume</h1>
      <p>
      Click the button below to download my resume<br></br>
     
      <button onClick={onButtonClick} id="resumeBtn">
        Download pdf
      </button>
      </p>
    </div>
  );
}