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
} from "./mySkills";

// => personal projects
const drawmageddon: IProject = {
  title: "Drawmageddon",
  description: "A multiplayer multilobby web browser drawing game.",
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
  title: "Portfolio v1.0",
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

// => client projects
const calgaryFloatingLanterns: IProject = {
  title: "Calgary Floating Lanterns",
  description: "A non-profit organization website I built using WordPress.",
  vid_url: "https://www.youtube.com/embed/tXdaKpWALsA",
  tech_stack: [wordpress, html, css],
  site_url: "https://calgaryfloatinglanterns.com/",
};

const araguacu: IProject = {
  title: "Araguacu",
  description:
    "A website I made for international dance artists based in Toronto built using SquareSpace.",
  vid_url: "https://www.youtube.com/embed/GRj2ZgaHEY0",
  tech_stack: [squarespace, html, css],
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
