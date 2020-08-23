import React from "react";
/* Styles */
import "./ExternalLinks.css";
/* Constants */
import { LINKED_IN_URL, GITHUB_URL, RESUME_URL } from "../../db/myAboutMe";

const ExternalLinks = () => {
  return (
    <div>
      <a
        href="https://github.com/adrian-faustino/portfolio_2.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        See this site's repo
      </a>
      {/* TODO: refactor all these a tags, DRY up code */}
      <div className="ExternalLinks__container">
        {/* linkedin */}
        <a
          className="hover-white-bg"
          href={LINKED_IN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="portfolio_2.0_assets/icons/linkedin-original.svg"
            alt="linked-in-logo"
          />
        </a>

        {/* github */}
        <a
          className="hover-white-bg"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="portfolio_2.0_assets/icons/github-original-wordmark.svg"
            alt="github-logo"
          />
        </a>

        {/* resume */}
        <a
          className="hover-white-bg"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
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
