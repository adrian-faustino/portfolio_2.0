// for SkillsView.tsx

import { IProject } from "../constants/types";
import {
  mongo_db,
  express,
  react,
  node_js,
  javascript,
  html5_canvas,
  socket_io,
  css,
  redux,
  html,
  bootstrap,
  wordpress,
  squarespace,
  typescript,
  material_ui,
  postgresql,
} from "./mySkills";

// => personal projects
const drawmageddon: IProject = {
  title: "Drawmageddon",
  description:
    "A 4-player multilobby web browser drawing game utilizing web sockets to sync each unique game instance.",
  vid_url: "https://www.youtube.com/embed/PjMwslXvpuc",
  tech_stack: [
    mongo_db,
    express,
    react,
    node_js,
    javascript,
    html5_canvas,
    socket_io,
    css,
  ],
  site_url: "https://draw-mageddon.herokuapp.com/",
  github_url: "https://github.com/adrian-faustino/draw-mageddon",
};

const dispatchScheduler: IProject = {
  title: "Dispatch Scheduler",
  description: "An app that helps track dispatches for truck companies.",
  vid_url: "https://www.youtube.com/embed/thNQ45Q_w0g",
  tech_stack: [react, redux, javascript, css, bootstrap, express],
  site_url: "https://dispatch-scheduler.herokuapp.com/",
  github_url: "https://github.com/adrian-faustino/dispatch-app",
};

const mintbeanApp: IProject = {
  title: "GitHub Hall Of Fame",
  description: "My submission for a 4-hour mini-hackathon hosted by Mintbean.",
  vid_url: "https://www.youtube.com/embed/z1G0xFyx7Wo",
  tech_stack: [react, javascript, css, bootstrap, express],
  site_url: "https://mintbean-app.herokuapp.com/",
  github_url: "https://github.com/adrian-faustino/mintbean_hackathon",
};

const portfolio_v1: IProject = {
  title: "Portfolio Site v1",
  description:
    "My first attempt at a portfolio site using plain JS, HTML, CSS.",
  vid_url: "https://www.youtube.com/embed/imw17ohWppI",
  tech_stack: [javascript, html, css],
  site_url: "https://adrian-faustino.herokuapp.com/",
  github_url: "https://github.com/adrian-faustino/portfolio-site",
};

const timeboxR: IProject = {
  title: "Timebox-r",
  description: "A productivity app that combines todo-lists and timeboxing.",
  vid_url: "https://www.youtube.com/embed/Wfv3NJR55kY",
  tech_stack: [react, javascript, css, express],
  site_url: "https://timebox-r.herokuapp.com/",
  github_url: "https://github.com/adrian-faustino/time_r",
};

const portfolio_v2: IProject = {
  title: "Portfolio Site v2",
  description:
    "Utilizing TypeScript to create an app that extracts data from a single JSON file and turn it into a portfolio site (the site you're currently browsing!).",
  vid_url: "https://www.youtube.com/embed/TQ6WkiYA5-0",
  tech_stack: [typescript, react, material_ui, javascript, css],
  site_url: "https://adrianfaustino.netlify.app/",
  github_url: "https://github.com/adrian-faustino/portfolio_2.0",
};

const habit_book: IProject = {
  title: "HabitBook",
  description:
    "A social media platform that allows a user to share their habit goals to promote consistency by allowing users and their followers to visualize days when a habit was performed. Users can follow other users and visit other user's pages to see how well others are doing on their habits. Users can like and comment on each other's habits. This is a full stack project exercising my knowledge in relational database design, RestAPI, and AJAX CRUD operations.",
  vid_url: "https://www.youtube.com/embed/Ne5xNf_oPgk",
  tech_stack: [
    postgresql,
    react,
    redux,
    javascript,
    express,
    node_js,
    css,
    bootstrap,
  ],
  github_url: "https://github.com/adrian-faustino/habit_book",
};

// => client projects
const calgaryFloatingLanterns: IProject = {
  title: "Calgary Floating Lanterns",
  description:
    "A website for a non-profit organization I built using WordPress.",
  vid_url: "https://www.youtube.com/embed/tXdaKpWALsA",
  tech_stack: [wordpress, html, css],
  site_url: "https://calgaryfloatinglanterns.com/",
};

const araguacu: IProject = {
  title: "Araguacu",
  description:
    "A website I'm developing for international dance artists based in Toronto built using SquareSpace.",
  vid_url: "https://www.youtube.com/embed/GRj2ZgaHEY0",
  tech_stack: [squarespace, html, css],
  site_url: "https://www.araguacu.com/",
};

export const PERSONAL_PROJECTS: Array<IProject> = [
  habit_book,
  portfolio_v2,
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
