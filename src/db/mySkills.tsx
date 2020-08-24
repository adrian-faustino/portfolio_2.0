import { ISkill } from "../constants/types";

// for SkillsView.tsx
// => technology string constants
const REACT = "React";
const JAVASCRIPT = "JavaScript";
const HTML = "HTML";
const CSS = "CSS";
const BOOTSTRAP = "Bootstrap";
const NODE_JS = "NodeJS";
const MONGO_DB = "MongoDB";
const EXPRESS = "Express";
const SOCKET_IO = "Socket.io";
const HTML5_CANVAS = "HTML5 Canvas";
const WORDPRESS = "WordPress";
const SQUARESPACE = "SquareSpace";
const MATERIAL_UI = "Material UI";
const REDUX = "Redux";
const JQUERY = "jQuery";
const SQL = "SQL";
const POSTGRESQL = "PostgreSQL";
const MYSQL = "MySQL";
const GIT = "Git";
const SASS = "Sass";
const RUBY_ON_RAILS = "Ruby on Rails";
const MOCHA = "Mocha";
const CHAI = "Chai";
const JEST = "Jest";
const STORYBOOK = "Storybook";
const JAVA = "Java";
// const PHP = "PHP";
// const REACT_NATIVE = "React Native";
// const ANGULAR_JS = "AngularJS";
const TYPESCRIPT = "TypeScript";

// use on tech with no definitive color or just have black as the logo color
const defaultLogoColor = "var(--grays2)";

// Misc section paragraph (3rd column in SkillsView.tsx)
export const miscParagraph =
  "I'm also familiar with SPA development, RESTfulAPI, OOP, unit testing, end-to-end testing, ES6, AJAX, DRY code, CRUD operations, CMS, REGEX, BEM, JSON, and am getting pretty good at remembering an ungodly amount of acronyms.";

// skills
// TODO: add img path to every obj

export const javascript: ISkill = {
  title: JAVASCRIPT,
  img_path: "portfolio_2.0_assets/tech_icons/javascript-original.svg",
  logo_color: "#F7DF1C",
};

export const html: ISkill = {
  title: HTML,
  img_path: "portfolio_2.0_assets/tech_icons/html.png",
  logo_color: "#E44D26",
};

export const css: ISkill = {
  title: CSS,
  img_path: "portfolio_2.0_assets/tech_icons/css3-original.svg",
  logo_color: "#274DE4",
};

export const react: ISkill = {
  title: REACT,
  img_path: "portfolio_2.0_assets/tech_icons/react-original.svg",
  logo_color: "#7CE0FE",
};

export const jquery: ISkill = {
  title: JQUERY,
  img_path: "portfolio_2.0_assets/tech_icons/jquery-original.svg",
  logo_color: "#0968AC",
};

export const node_js: ISkill = {
  title: NODE_JS,
  img_path: "portfolio_2.0_assets/tech_icons/nodejs-original-wordmark.svg",
  logo_color: "#539E43",
};

export const mongo_db: ISkill = {
  title: MONGO_DB,
  img_path: "portfolio_2.0_assets/tech_icons/mongodb-original-wordmark.svg",
  logo_color: "#9CBD8D",
};

export const sql: ISkill = {
  title: SQL,
  img_path: "portfolio_2.0_assets/tech_icons/sql.svg",
  logo_color: defaultLogoColor,
};

export const postgresql: ISkill = {
  title: POSTGRESQL,
  img_path: "portfolio_2.0_assets/tech_icons/postgresql-original-wordmark.svg",
  logo_color: "#346790",
};

export const mysql: ISkill = {
  title: MYSQL,
  img_path: "portfolio_2.0_assets/tech_icons/mysql-original-wordmark.svg",
  logo_color: "#F39110",
};

export const bootstrap: ISkill = {
  title: BOOTSTRAP,
  img_path: "portfolio_2.0_assets/tech_icons/bootstrap-plain-wordmark.svg",
  logo_color: "#563E7C",
};

export const html5_canvas: ISkill = {
  title: HTML5_CANVAS,
  img_path: "portfolio_2.0_assets/tech_icons/html5-original.svg",
  logo_color: html.logo_color,
};

export const wordpress: ISkill = {
  title: WORDPRESS,
  img_path: "portfolio_2.0_assets/tech_icons/wordpress-original.svg",
  logo_color: "#454342",
};

export const squarespace: ISkill = {
  title: SQUARESPACE,
  img_path: "portfolio_2.0_assets/tech_icons/squarespace.svg",
  logo_color: defaultLogoColor,
};

export const typescript: ISkill = {
  title: TYPESCRIPT,
  img_path: "portfolio_2.0_assets/tech_icons/typescript-original.svg",
  logo_color: "#007ACC",
};

export const ruby_on_rails: ISkill = {
  title: RUBY_ON_RAILS,
  img_path: "portfolio_2.0_assets/tech_icons/rails-original-wordmark.svg",
  logo_color: "#CC0202",
};

export const redux: ISkill = {
  title: REDUX,
  img_path: "portfolio_2.0_assets/tech_icons/redux-original.svg",
  logo_color: "#774ABC",
};

export const mocha: ISkill = {
  title: MOCHA,
  img_path: "portfolio_2.0_assets/tech_icons/mocha-plain.svg",
  logo_color: "#8D6848",
};

export const chai: ISkill = {
  title: CHAI,
  img_path: "portfolio_2.0_assets/tech_icons/chai.svg",
  logo_color: "#A1070E",
};

export const jest: ISkill = {
  title: JEST,
  img_path: "portfolio_2.0_assets/tech_icons/jest.svg",
  logo_color: "#C73D16",
};

export const storybook: ISkill = {
  title: STORYBOOK,
  img_path: "portfolio_2.0_assets/tech_icons/storybook.svg",
  logo_color: "#F2618C",
};

export const java: ISkill = {
  title: JAVA,
  img_path: "portfolio_2.0_assets/tech_icons/java-original-wordmark.svg",
  logo_color: "#E77002",
};

export const socket_io = {
  title: SOCKET_IO,
  img_path: "portfolio_2.0_assets/tech_icons/socket-io.svg",
  logo_color: defaultLogoColor,
};

export const express = {
  title: EXPRESS,
  img_path: "portfolio_2.0_assets/tech_icons/express-original-wordmark.svg",
  logo_color: defaultLogoColor,
};

export const sass = {
  title: SASS,
  img_path: "portfolio_2.0_assets/tech_icons/sass.svg",
  logo_color: "#CD679A",
};

export const git = {
  title: GIT,
  img_path: "portfolio_2.0_assets/tech_icons/git-original-wordmark.svg",
  logo_color: "#F05233",
};
export const material_ui = {
  title: MATERIAL_UI,
  img_path: "portfolio_2.0_assets/tech_icons/material-ui.svg",
  logo_color: "#03AAF7",
};

export const FRONT_END_TECH: Array<ISkill> = [
  react,
  redux,
  typescript,
  javascript,
  html,
  html5_canvas,
  css,
  sass,
  jquery,
  material_ui,
  bootstrap,
];
export const BACK_END_TECH: Array<ISkill> = [
  node_js,
  express,
  java,
  sql,
  socket_io,
  postgresql,
  mysql,
  mongo_db,
  ruby_on_rails,
];
export const MISC_SKILLS = [
  git,
  squarespace,
  wordpress,
  mocha,
  chai,
  jest,
  storybook,
];
