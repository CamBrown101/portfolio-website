import type { NextPage } from "next";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Project } from "../components/Project";
import { Projects } from "../components/Projects";
import { Resume } from "../components/Resume";
import { Skills } from "../components/Skills";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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

export default Home;
