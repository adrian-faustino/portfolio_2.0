import React, { useState, useRef } from "react";
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
  tech_stack: [{ title: "", img_path: "", logo_color: "" }],
  site_url: "",
};

const ProjectsView = () => {
  /* State */
  const [currentProject, setCurrentProejct] = useState(initialState);

  // reference to scroll to this view when user clicks project
  const projectViewRef = useRef<HTMLDivElement>(null);

  const handleChangeProject = (project: IProject) => {
    setCurrentProejct(project);
  };

  return (
    <section className="ProjectsView__main-wrapper">
      <h2 className="section-title">My Projects</h2>

      <Alert className="ProjectsView__info-alert" severity="info">
        I've added a link to each project's code repository. Please feel free to
        have a look. Code reviews and feedback are very veeerry welcome!
      </Alert>

      {/* when user selects project, view will scroll to this target */}
      <div ref={projectViewRef}></div>

      {/* Only show above 945px */}
      <div className="hide show-above-945px">
        <div className="ProjectsView__wrapper">
          <ProjectTree
            projectViewRef={projectViewRef}
            handleChangeProject={handleChangeProject}
          />

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
