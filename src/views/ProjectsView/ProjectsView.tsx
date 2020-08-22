import React, { useState } from "react";
/* Styles */
import "./ProjectsView.css";
import { IProject } from "../../constants/types";
/* Subcomponents */
import { Project, ProjectTree } from "../../components";

const initialState: IProject = {
  title: "",
  description: "",
  vid_url: "",
  tech_stack: [""],
  site_url: "",
};

const ProjectsView = () => {
  /* State */
  const [currentProject, setCurrentProejct] = useState(initialState);

  const handleChangeProject = (project: IProject) => {
    setCurrentProejct(project);
  };

  return (
    <section>
      <ProjectTree handleChangeProject={handleChangeProject} />

      {currentProject.title && <Project project={currentProject} />}
    </section>
  );
};

export default ProjectsView;
