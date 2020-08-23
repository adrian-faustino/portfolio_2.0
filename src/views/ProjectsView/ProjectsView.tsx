import React, { useState } from "react";
/* Styles */
import "./ProjectsView.css";
import { IProject } from "../../constants/types";
/* Subcomponents */
import { Project, ProjectTree, MobileAccordions } from "../../components";
/* Material UI */
import Alert from "@material-ui/lab/Alert";

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
      <h2 className="section-title">My Projects</h2>

      <Alert className="ProjectsView__info-alert" severity="info">
        I've added a link to each project's code repository. Please feel free to
        have a look. Code reviews and feedback are very veeerry welcome!
      </Alert>

      {/* Only show above 945px */}
      <div className="hide show-above-945px">
        <div className="ProjectsView__wrapper">
          <ProjectTree handleChangeProject={handleChangeProject} />

          {currentProject.title ? (
            <Project project={currentProject} />
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {/* Only displayed/rendered if viewport below 945px */}
      <div className="hide-above-945px">
        <MobileAccordions />
      </div>
    </section>
  );
};

export default ProjectsView;
