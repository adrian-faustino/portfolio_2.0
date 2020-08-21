// for SkillsView.tsx
import { ISkill } from "../constants/types";

// => technology string constants
export const REACT = "React";
export const JAVASCRIPT = "JavaScript";
export const HTML = "HTML";
export const CSS = "CSS";
export const BOOTSTRAP = "Bootstrap";
export const NODE_JS = "NodeJS";
export const MONGO_DB = "MongoDB";
export const EXPRESS = "Express";
export const SOCKET_IO = "Socket.io";
export const HTML5_CANVAS = "HTML5 Canvas";
export const MERN_STACK = "Mern Stack";
export const WORDPRESS = "WordPress";
export const SQUARESPACE = "SquareSpace";
export const MATERIAL_UI = "Material UI";
export const REDUX = "Redux";
export const JQUERY = "jQuery";
export const SQL = "SQL";
export const POSTGRESQL = "PostgreSQL";
export const MYSQL = "MySQL";
export const GIT = "Git";
export const SASS = "Sass";
export const RUBY_ON_RAILS = "Ruby on Rails";
export const MOCHA = "Mocha";
export const CHAI = "Chai";
export const JEST = "Jest";
export const STORYBOOK = "Storybook";
export const JAVA = "Java";
export const PHP = "PHP";
export const REACT_NATIVE = "React Native";
export const ANGULAR_JS = "AngularJS";
export const TYPESCRIPT = "TypeScript";

export const MISC = {
  title:
    "I'm also familiar with SPA Development, RESTfulAPI, unit testing, end-to-end testing, ES6, and AJAX.",
};

// skills
// TODO: add img path to every obj

const javascript: ISkill = {
  title: JAVASCRIPT,
  img_path: "portfolio_2.0_assets/tech_icons/javascript-original.svg",
};

const html: ISkill = {
  title: HTML,
  img_path: "portfolio_2.0_assets/tech_icons/html.png",
};

const css: ISkill = {
  title: CSS,
  img_path: "portfolio_2.0_assets/tech_icons/css3-original.svg",
};

const react: ISkill = {
  title: REACT,
  img_path: "portfolio_2.0_assets/tech_icons/react-original.svg",
};

const jquery: ISkill = {
  title: JQUERY,
  img_path: "portfolio_2.0_assets/tech_icons/jquery-original.svg",
};

const node_js: ISkill = {
  title: NODE_JS,
  img_path: "portfolio_2.0_assets/tech_icons/nodejs-original-wordmark.svg",
};

const mongo_db: ISkill = {
  title: MONGO_DB,
  img_path: "portfolio_2.0_assets/tech_icons/mongodb-original-wordmark.svg",
};

const sql: ISkill = {
  title: SQL,
  img_path: "portfolio_2.0_assets/tech_icons/sql.svg",
};

const postgresql: ISkill = {
  title: POSTGRESQL,
  img_path: "portfolio_2.0_assets/tech_icons/postgresql-original-wordmark.svg",
};

const mysql: ISkill = {
  title: MYSQL,
  img_path: "portfolio_2.0_assets/tech_icons/mysql-original-wordmark.svg",
};

const bootstrap: ISkill = {
  title: BOOTSTRAP,
  img_path: "portfolio_2.0_assets/tech_icons/bootstrap-plain-wordmark.svg",
};

const html5_canvas: ISkill = {
  title: HTML5_CANVAS,
  img_path: "portfolio_2.0_assets/tech_icons/html5-original.svg",
};

const wordpress: ISkill = {
  title: WORDPRESS,
  img_path: "portfolio_2.0_assets/tech_icons/wordpress-original.svg",
};

const squarespace: ISkill = {
  title: SQUARESPACE,
  img_path: "portfolio_2.0_assets/tech_icons/squarespace.svg",
};

const typescript: ISkill = {
  title: TYPESCRIPT,
  img_path: "portfolio_2.0_assets/tech_icons/typescript-original.svg",
};

const ruby_on_rails: ISkill = {
  title: RUBY_ON_RAILS,
  img_path: "portfolio_2.0_assets/tech_icons/rails-original-wordmark.svg",
};

const redux: ISkill = {
  title: REDUX,
  img_path: "portfolio_2.0_assets/tech_icons/redux-original.svg",
};

const mocha: ISkill = {
  title: MOCHA,
  img_path: "portfolio_2.0_assets/tech_icons/mocha-plain.svg",
};

const chai: ISkill = {
  title: CHAI,
  img_path: "portfolio_2.0_assets/tech_icons/chai.svg",
};

const jest: ISkill = {
  title: JEST,
  img_path: "portfolio_2.0_assets/tech_icons/jest.svg",
};

const storybook: ISkill = {
  title: STORYBOOK,
  img_path: "portfolio_2.0_assets/tech_icons/storybook.svg",
};

const java: ISkill = {
  title: JAVA,
  img_path: "portfolio_2.0_assets/tech_icons/java-original-wordmark.svg",
};

const socket_io = {
  title: SOCKET_IO,
  img_path: "portfolio_2.0_assets/tech_icons/socket-io.svg",
};

const express = {
  title: EXPRESS,
  img_path: "portfolio_2.0_assets/tech_icons/express-original-wordmark.svg",
};

const sass = {
  title: SASS,
  img_path: "portfolio_2.0_assets/tech_icons/sass.svg",
};

const git = {
  title: GIT,
  img_path: "portfolio_2.0_assets/tech_icons/git-original-wordmark.svg",
};
const material_ui = {
  title: MATERIAL_UI,
  img_path: "portfolio_2.0_assets/tech_icons/material-ui.svg",
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
  MISC,
  git,
  squarespace,
  wordpress,
  mocha,
  chai,
  jest,
  storybook,
];
