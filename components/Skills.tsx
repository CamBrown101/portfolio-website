import React from 'react';
import './Skills.scss';

export const Skills = () => {
  return (
    <article id="skills-container">
      <h4>Languages</h4>
      <ul className="languages-list list">
        <li className="languages-list-item">HTML</li>
        <li className="languages-list-item">CSS</li>
        <li className="languages-list-item">SASS</li>
        <li className="languages-list-item">JavaScript</li>
        <li className="languages-list-item">TypeScript</li>
        <li className="languages-list-item">SQL</li>
        <li className="languages-list-item">C#</li>
        <li className="languages-list-item">Ruby</li>
      </ul>
      <h4>Frameworks</h4>
      <ul className="frameworks-list list">
        <li className="frameworks-list-item">React</li>
        <li className="frameworks-list-item">React-Router</li>
        <li className="frameworks-list-item">React-Native</li>
        <li className="frameworks-list-item">Redux</li>
        <li className="frameworks-list-item">Node</li>
        <li className="frameworks-list-item">Express</li>
        <li className="frameworks-list-item">Rails</li>
        <li className="frameworks-list-item">jQuery</li>
        <li className="frameworks-list-item">Bootstrap</li>
        <li className="frameworks-list-item">.Net</li>
      </ul>
      <h4>Experiences</h4>
      <ul className="experiences-list list">
        <li className="experiences-list-item">Single page applications</li>
        <li className="experiences-list-item">AJAX</li>
        <li className="experiences-list-item">Restful routing with express</li>
        <li className="experiences-list-item">Normalizing databases</li>
        <li className="experiences-list-item">Test driven development</li>
        <li className="experiences-list-item">
          End to end testing with Cypress
        </li>
        <li className="experiences-list-item">Git on group projects</li>
        <li className="experiences-list-item">
          Component testing with storybook
        </li>
        <li className="experiences-list-item">Insertion testing with Jest</li>
        <li className="experiences-list-item">
          Continuous integration with CircleCI
        </li>
        <li className="experiences-list-item">Object Orientated Programming</li>
        <li className="experiences-list-item">MVC concept</li>
        <li className="experiences-list-item">Unity</li>
      </ul>
    </article>
  );
};
