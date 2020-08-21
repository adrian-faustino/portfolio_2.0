import React from "react";
/* Styles */
import "./ProjectsView.css";
/* Constants */
import { PERSONAL_PROJECTS, CLIENT_PROJECTS } from "../../db/myProjects";
import { IProject } from "../../constants/types";
/* Subcomponents */
import { Project, ContentAccordion } from "../../components";

const ProjectsView = () => {
  const spread_projects_jsx = (projects: Array<IProject>) => {
    return projects.map((project, i) => (
      <ContentAccordion key={`${project}-${i}-accordion`} title={project.title}>
        <Project project={project} />
      </ContentAccordion>
    ));
  };

  return (
    <section>
      <h2>Projects</h2>

      <div className="ProjectsView__wrapper">
        <div className="ProjectsView__col1">
          <h3>Personal Projects</h3>
          {spread_projects_jsx(PERSONAL_PROJECTS)}
        </div>

        <div className="ProjectsView__col2">
          <h3>Client Projects</h3>
          {spread_projects_jsx(CLIENT_PROJECTS)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsView;
