import React from 'react';
import './Resume.scss';

export const Resume = () => {
  return (
    <div id="resume-container">
      <h3>To view my full resume click here:</h3>
      <a
        href="https://drive.google.com/file/d/1OPuBtAzy96BxfqNnHw-BFt1LKoNr2zy9/view?usp=sharing"
        target="_blank"
        className="resume-button">
        View Resume
      </a>
    </div>
  );
};
