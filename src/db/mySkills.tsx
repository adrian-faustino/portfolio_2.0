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

export const REDUX = "Redux";
export const JQUERY = "jQuery";
export const SQL = "SQL";
export const POSTGRESQL = "PostgreSQL";
export const MYSQL = "MySQL";
export const GIT = "Git";
export const SASS = "SaSS";
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
};

const html: ISkill = {
  title: HTML,
};

const css: ISkill = {
  title: CSS,
};

const react: ISkill = {
  title: REACT,
};

const jquery: ISkill = {
  title: JQUERY,
};

const node_js: ISkill = {
  title: NODE_JS,
};

const mongo_db: ISkill = {
  title: MONGO_DB,
};

const sql: ISkill = {
  title: SQL,
};

const postgresql: ISkill = {
  title: POSTGRESQL,
};

const mysql: ISkill = {
  title: MYSQL,
};

const bootstrap: ISkill = {
  title: BOOTSTRAP,
};

const html5_canvas: ISkill = {
  title: HTML5_CANVAS,
};

const wordpress: ISkill = {
  title: WORDPRESS,
};

const squarespace: ISkill = {
  title: SQUARESPACE,
};

const typescript: ISkill = {
  title: TYPESCRIPT,
};

const ruby_on_rails: ISkill = {
  title: RUBY_ON_RAILS,
};

const redux: ISkill = {
  title: REDUX,
};

const mocha: ISkill = {
  title: MOCHA,
};

const chai: ISkill = {
  title: CHAI,
};

const jest: ISkill = {
  title: JEST,
};

const storybook: ISkill = {
  title: STORYBOOK,
};

const java: ISkill = {
  title: JAVA,
};

const socket_io = {
  title: SOCKET_IO,
};

const express = {
  title: EXPRESS,
};

const sass = {
  title: SASS,
};

const git = {
  title: GIT,
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
