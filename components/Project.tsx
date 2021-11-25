import React, { useState } from "react";
import styles from "../styles/Project.module.scss";

type Props = {
  title: string;
  image: string;
  description: string;
  techstack: string;
  githubLink: string;
  projectLink: string;
  isRight: boolean;
};

export const Project = ({
  title,
  image,
  description,
  techstack,
  githubLink,
  projectLink,
  isRight,
}: Props) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <article
      onMouseOver={() => setHover(true)}
      onMouseOut={() => {
        setHover(false);
      }}
      className={styles.project}
    >
      <div
        className={
          isRight
            ? `${styles["project-inner"]} ${styles.right}`
            : styles["project-inner"]
        }
      >
        <img
          className={styles.screenshot}
          alt="This is a project"
          src={image}
        />
        <div className={styles["project-text"]}>
          <h4 className={styles["project-title"]}>{title}</h4>
          <p className={styles["project-description"]}>{description}</p>
          <h3 className={styles["tech-stack-header"]}>Tech Stack</h3>
          <p className={styles["tech-stack"]}>{techstack}</p>
        </div>
        <div
          className={
            hover ? styles["project-buttons"] : styles["project-buttons hide"]
          }
        >
          <a className={styles["link-container"]} href={githubLink}>
            <i className={`fab fa-github ${styles["hover-icon"]}`} />
          </a>
          <a className={styles["link-container"]} href={projectLink}>
            <i className={`fas fa-link ${styles["hover-icon"]}`} />
          </a>
        </div>
      </div>
    </article>
  );
};
