import React from "react";
/* Styles */
import "./HomeView.css";
/* Constants */
import {
  FULL_NAME,
  JOB_DESCRIPTION,
  AVATAR_PATH,
  ABOUT_ME_P1,
  ABOUT_ME_P2,
} from "../../db/myAboutMe";
/* Subcomponents */
import { ExternalLinks, CurrentStatus } from "../../components";

const HomeView = () => {
  return (
    <section className="HomeView__">
      <h1 className="HomeVew__full-name">{FULL_NAME}</h1>
      <h2 className="HomeView__description">{JOB_DESCRIPTION}</h2>
      <div className="HomeView__avatar-container">
        <img className="HomeView__avatar" src={AVATAR_PATH} alt="my avatar" />
      </div>
      <div className="HomeView__about-me">
        <p>{ABOUT_ME_P1}</p>
        <p>{ABOUT_ME_P2}</p>
      </div>

      <ExternalLinks />

      <h2 className="section-title">My Status</h2>
      <CurrentStatus />
    </section>
  );
};

export default HomeView;
