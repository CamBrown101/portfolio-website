import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav id="nav-bar">
      <nav id="nav-menu">
        <div className="sections">
          <a className="nav-link home-link" href="#home-container">
            Home
          </a>
          <a className="nav-link skills-link" href="#skills">
            Skills
          </a>
          <a className="nav-link projects-link" href="#projects">
            Projects
          </a>
          <a className="nav-link contact-link" href="#contact-container">
            Contact
          </a>
          <a
            className="nav-link resume-link"
            href="https://drive.google.com/file/d/1OPuBtAzy96BxfqNnHw-BFt1LKoNr2zy9/view?usp=sharing"
            target="_blank">
            Resume
          </a>

          {/* <NavLink exact to="/" className="nav-menu-item" id="nav-menu-home">
            Home
          </NavLink>
          <NavLink
            exact
            to="#about-container"
            className="nav-menu-item"
            id="nav-menu-about">
            About
          </NavLink>
          <NavLink
            exact
            to="/contact"
            className="nav-menu-item"
            id="nav-menu-contact">
            Contact
          </NavLink>
          <NavLink
            exact
            to="/projects"
            className="nav-menu-item"
            id="nav-menu-projects">
            Projects
          </NavLink> */}
        </div>
        <div className="nav-contacts">
          <a
            className="nav-contact"
            href="mailto:cameron-brown@live.com?subject=Mail from Cameron Brown's Website">
            <i className="fas fa-envelope-square mail-icon icon"></i>
          </a>
          <a
            className="nav-contact"
            href="https://www.linkedin.com/in/cameron-brown-101/">
            <i className="fab fa-linkedin linkedin-icon icon"></i>
          </a>
          <a className="nav-contact" href="https://github.com/CamBrown101">
            <i className="fab fa-github-square github-icon icon"></i>
          </a>
          <a
            className="nav-contact contact-last"
            href="https://twitter.com/CamBrown101">
            <i className="fab fa-twitter-square github-icon icon"></i>
          </a>
        </div>
      </nav>
    </nav>
  );
};
