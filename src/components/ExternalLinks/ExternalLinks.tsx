import React from "react";
/* Styles */
import "./ExternalLinks.css";
/* Constants */
import { LINKED_IN_URL, GITHUB_URL, RESUME_URL } from "../../constants";

const ExternalLinks = () => {
  return (
    <div>
      <a href={LINKED_IN_URL} target="_tab">
        linked in
      </a>
      <a href={GITHUB_URL} target="_tab">
        github
      </a>
      <a href={RESUME_URL} target="_tab">
        resume
      </a>
    </div>
  );
};

export default ExternalLinks;
