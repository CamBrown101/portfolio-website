import './Projects.scss';
import { Project } from './Project';
import screenShot1 from '../images/ScreenShot.png';
import buyThings from '../images/BuythingsScreen.png';
import scheduler from '../images/scheduler.png';
import tweeter from '../images/tweeter.png';

export const Projects = () => {
  const projectDetails = [
    {
      title: 'Buy Food, Sell Food',
      image: screenShot1,
      description:
        'A restaurant point of sales system with analytic information as well as production screens for making drinks and food. This was my final project for Lighthouse Labs Bootcamp. This project was all about getting more familiar with React, we used React-Router as well. I also learned a lot about scaling a React app and keeping state organized.  Use 1111 to login.',
      techStack:
        'React, Axios, React- Router, SASS, HTML, Node, Express, PostgreSQL, Node - mailer, Canvas.js',
      githubLink: 'https://github.com/CamBrown101/final-project',
      projectLink: 'https://buy-food-sell-food.netlify.app/login',
    },
    {
      title: 'Buy Things, Sell Things',
      image: buyThings,
      description:
        'A single page App for buying and selling items. We used AJAX calls for all of the reloads within the page. The app includes a chat function using AJAX calls to the database on intervals to allow real time conversations. We did all of this without using frameworks so we could learn how these frameworks work behind the scenes.',
      techStack:
        'jQuery, EJS, SASS, Node, Express, PostgreSQL, HTML, Bootstrap',
      githubLink: 'https://github.com/CamBrown101/mid-term-project',
      projectLink: 'https://buythingssellthings.herokuapp.com/',
    },
    {
      title: 'Schedular',
      image: scheduler,
      description:
        'A React app for booking interviews with interviewers.Using useReducers and  useState to change how the user interacts with the app as well as practise writing different types of tests and setting up testing environments as well as setting up CircleCI for continuous integration.',
      techStack:
        'React, Axios, SASS, HTML, Node, Express, Storybook, Jest, CircleCI',
      githubLink: 'https://github.com/CamBrown101/scheduler',
      projectLink: 'https://scheduler-cam-brown.netlify.app/',
    },
    {
      title: 'Tweeter',
      image: tweeter,
      description:
        'A twitter clone for posting short messages. This project was made using jQuery for everything and AJAX calls for all of the reloading.  I also used animation effects on things like scroll to allow a button to appear to take you back to the top after scrolling down.',
      techStack: 'EJS, jQuery, Axios, Node, Express, SASS',
      githubLink: 'https://github.com/CamBrown101/tweeter',
      projectLink: 'https://cam-brown-tweeter.herokuapp.com/',
    },
  ];
  return (
    <div id="projects-container">
      <Project
        title={projectDetails[0].title}
        description={projectDetails[0].description}
        techstack={projectDetails[0].techStack}
        image={projectDetails[0].image}
        githubLink={projectDetails[0].githubLink}
        projectLink={projectDetails[0].projectLink}
        isRight={false}
      />
      <Project
        title={projectDetails[1].title}
        description={projectDetails[1].description}
        techstack={projectDetails[1].techStack}
        image={projectDetails[1].image}
        githubLink={projectDetails[1].githubLink}
        projectLink={projectDetails[1].projectLink}
        isRight={true}
      />
      <Project
        title={projectDetails[2].title}
        description={projectDetails[2].description}
        techstack={projectDetails[2].techStack}
        image={projectDetails[2].image}
        githubLink={projectDetails[2].githubLink}
        projectLink={projectDetails[2].projectLink}
        isRight={false}
      />
      <Project
        title={projectDetails[3].title}
        description={projectDetails[3].description}
        techstack={projectDetails[3].techStack}
        image={projectDetails[3].image}
        githubLink={projectDetails[3].githubLink}
        projectLink={projectDetails[3].projectLink}
        isRight={true}
      />
    </div>
  );
};
