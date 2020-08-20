import React from "react";
/* Styles */
import "./ExternalLinks.css";
/* Constants */
import { LINKED_IN_URL, GITHUB_URL, RESUME_URL } from "../../db/myAboutMe";

const ExternalLinks = () => {
  return (
    <div>
      <div className="ExternalLinks__container">
        <a href={LINKED_IN_URL} target="_blank">
          <img
            src="portfolio_2.0_assets/icons/linkedin-original.svg"
            alt="linked-in-logo"
          />
        </a>
        <a href={GITHUB_URL} target="_blank">
          <img
            src="portfolio_2.0_assets/icons/github-original-wordmark.svg"
            alt="github-logo"
          />
        </a>
        <a href={RESUME_URL} target="_blank">
          <img
            src="portfolio_2.0_assets/icons/download-resume-large.png"
            alt="download-resume-logo"
          />
        </a>
      </div>
    </div>
  );
};

export default ExternalLinks;
