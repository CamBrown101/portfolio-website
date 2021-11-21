import React from "react";
import styles from "../styles/Contact.module.scss";

export const Contact = () => {
  return (
    <div id={styles["contact-container"]}>
      <h1>Contact Me</h1>
      <a
        className={`${styles.flex} ${styles.contact}`}
        href="mailto:cameron-brown@live.com?subject=Mail from Cameron Brown's Website"
      >
        <i className={`fas fa-envelope-square mail-icon ${styles.icon}`}></i>
        <h3>Cameron-Brown@live.com</h3>
      </a>
      <a
        className={`${styles.flex} ${styles.contact}`}
        href="https://www.linkedin.com/in/cameron-brown-101/"
      >
        <i className="fab fa-linkedin linkedin-icon icon"></i>
        <h3>Cameron-Brown-101</h3>
      </a>
      <a
        className={`${styles.flex} ${styles.contact}`}
        href="https://github.com/CamBrown101"
      >
        <i className={`fab fa-github-square github-icon ${styles.icon}`}></i>
        <h3>CamBrown101</h3>
      </a>
      <a
        className={`${styles.flex} ${styles.contact}`}
        href="https://twitter.com/CamBrown101"
      >
        <i className={`fab fa-twitter-square github-icon ${styles.icon}`}></i>
        <h3>CamBrown101</h3>
      </a>
    </div>
  );
};
