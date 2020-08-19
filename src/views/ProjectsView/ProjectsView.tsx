import React from "react";
/* Styles */
import "./ProjectsView.css";
/* Constants */
import { PERSONAL_PROJECTS, CLIENT_PROJECTS, IProject } from "../../constants";

const ProjectsView = () => {
  const spread_projects_jsx = (projects: Array<IProject>) => {
    return projects.map((project) => <div>{project.title}</div>);
  };

  return (
    <section>
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
