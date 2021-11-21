import React from "react";
import styles from "../styles/About.module.scss";

export const About = () => {
  return (
    <div id={styles["about-container"]}>
      <h1 className={styles.name}>Cameron Brown</h1>
      <h2 className={styles.title}>Web Developer</h2>
      <p className={styles["about-me"]}>
        I am a Full Stack Web Developer working with HTML, CSS, Javascript,
        React, Node and SQL. Prior to becoming a developer, my educational
        background was 3D animation, and I have over 15 years of experience in
        hospitality.
      </p>
    </div>
  );
};
