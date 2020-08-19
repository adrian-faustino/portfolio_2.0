// Make changes to portfolio info here

// HomeView.tsx
export const FULL_NAME = "Adrian Faustino";
export const JOB_DESCRIPTION = "Full Stack Web Developer";
export const AVATAR_PATH = "/portfolio_2.0_assets/images/myAvatar.jpg";
export const ABOUT_ME_P1 =
  "Welcome to my portfolio site! I am a Toronto based web developer with a keen interest in game development and building things for the web.";
export const ABOUT_ME_P2 =
  "I enjoy working with TypeScript and powerful frameworks such as React. I am confident in being able to bring ideas to life with JavaScript, HTML, CSS, and love getting design pattern ideas from other languages such as Java and PHP.";

// ExternalLinks.tsx
export const LINKED_IN_URL = "https://www.linkedin.com/in/adrianfaustino/";
export const GITHUB_URL = "https://github.com/adrian-faustino";
export const RESUME_URL =
  "https://www.dropbox.com/s/yvq7nz98rtqrdjf/resume_ADRIAN_FAUSTINO.pdf?dl=0";

// ProjectsView.tsx
export interface IProject {
  title: String;
  description: String;
  vid_url: String;
  tech_stack: Array<String>;
  site_url: String;
}

// => technology string constants
const REACT = "React";
const JAVASCRIPT = "JavaScript";
const HTML = "HTML";
const CSS = "CSS";
const BOOTSTRAP = "BOOTSTRAP";
const NODE_JS = "NodeJS";
const MONGO_DB = "MongoDB";
const EXPRESS = "Express";
const SOCKET_IO = "Socket.io";
const HTML5_CANVAS = "HTML5 Canvas";
const MERN_STACK = "Mern Stack";
const WORDPRESS = "WordPress";
const SQUARESPACE = "SquareSpace";

export const drawmageddon: IProject = {
  title: "Drawamgeddon",
  description: "A multiplayer multilobby web browser drawing game.",
  vid_url: "https://www.youtube.com/embed/PjMwslXvpuc",
  tech_stack: [
    MERN_STACK,
    MONGO_DB,
    EXPRESS,
    REACT,
    NODE_JS,
    JAVASCRIPT,
    HTML5_CANVAS,
    SOCKET_IO,
    CSS,
  ],
  site_url: "https://draw-mageddon.herokuapp.com/",
};

// => personal projects
const dispatchScheduler: IProject = {
  title: "Dispatch Scheduler",
  description: "An app that helps track dispatches for truck companies.",
  vid_url: "https://www.youtube.com/embed/thNQ45Q_w0g",
  tech_stack: [REACT, JAVASCRIPT, CSS, BOOTSTRAP, EXPRESS],
  site_url: "https://dispatch-scheduler.herokuapp.com/",
};

const mintbeanApp: IProject = {
  title: "GitHub Hall Of Fame",
  description: "My submission for a 4-hour mini-hackathon hosted by Mintbean.",
  vid_url: "https://www.youtube.com/embed/z1G0xFyx7Wo",
  tech_stack: [REACT, JAVASCRIPT, CSS, BOOTSTRAP, EXPRESS],
  site_url: "https://mintbean-app.herokuapp.com/",
};

const portfolio_v1: IProject = {
  title: "Portfolio v1.0",
  description: "My first attempt at a portfolio using plain JS, HTML, CSS.",
  vid_url: "https://www.youtube.com/embed/imw17ohWppI",
  tech_stack: [JAVASCRIPT, HTML, CSS],
  site_url: "https://adrian-faustino.herokuapp.com/",
};

const timeboxR: IProject = {
  title: "Timebox-r",
  description: "A productivty app that combines todo-lists and timeboxing.",
  vid_url: "https://www.youtube.com/embed/Wfv3NJR55kY",
  tech_stack: [REACT, JAVASCRIPT, CSS, EXPRESS],
  site_url: "https://timebox-r.herokuapp.com/",
};

// => client projects
const calgaryFloatingLanterns: IProject = {
  title: "Calgary Floating Lanterns",
  description: "A non-profit organization website I built using WordPress.",
  vid_url: "https://www.youtube.com/embed/tXdaKpWALsA",
  tech_stack: [WORDPRESS, CSS],
  site_url: "https://calgaryfloatinglanterns.com/",
};

const araguacu: IProject = {
  title: "Araguacu",
  description:
    "A website I made for international dance artists based in Toronto built using SquareSpace.",
  vid_url: "https://www.youtube.com/embed/GRj2ZgaHEY0",
  tech_stack: [SQUARESPACE, CSS],
  site_url: "https://www.araguacu.com/",
};

export const PERSONAL_PROJECTS: Array<IProject> = [
  drawmageddon,
  dispatchScheduler,
  mintbeanApp,
  timeboxR,
  portfolio_v1,
];
export const CLIENT_PROJECTS: Array<IProject> = [
  araguacu,
  calgaryFloatingLanterns,
];
