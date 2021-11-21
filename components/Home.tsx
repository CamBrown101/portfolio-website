import React from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Resume } from './Resume';
import './Home.scss';

export const Home = () => {
  return (
    <div id="home-container">
      <div className="home-container-inner">
        <About />
        <h1 id="skills">Skills</h1>
        <Skills />
        <h1 id="projects">Projects</h1>
        <Projects />
        <Contact />
        <Resume />
      </div>
    </div>
  );
};
