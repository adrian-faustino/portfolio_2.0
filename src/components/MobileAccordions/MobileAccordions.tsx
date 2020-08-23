import React from "react";
/* Styles */
import "./MobileAccordions.css";
/* Subcomponents */
import { ContentAccordion, Project } from "..";
/* Constants */
import { PERSONAL_PROJECTS, CLIENT_PROJECTS } from "../../db/myProjects";
import { IProject } from "../../constants/types";

const MobileAccordions = () => {
  const spreadProjectsJSX = (projects: Array<IProject>) => {
    return projects.map((project, i) => (
      <ContentAccordion
        key={`${project.title}-${i}-mobile-accordions`}
        title={project.title}
      >
        <Project project={project} />
      </ContentAccordion>
    ));
  };

  return (
    <div>
      <h3>Personal Projects</h3>
      {spreadProjectsJSX(PERSONAL_PROJECTS)}

      <h3>Client Projects</h3>
      {spreadProjectsJSX(CLIENT_PROJECTS)}
    </div>
  );
};

export default MobileAccordions;
