import React from "react";
/* Styles */
import "./Project.css";
/* Constants */
import { IProject } from "../../constants";
/* npm */
import ReactPlayer from "react-player";

interface ProjectProps {
  project: IProject;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { title, description, vid_url, tech_stack, site_url } = props.project;

  const playerConfig = {
    youtube: {
      playerVars: {
        controls: 1,
        iv_load_policy: 3,
        fs: 0,
        modestbranding: 1,
      },
    },
  };

  return (
    <div className="Project__container">
      <h3>{title}</h3>
      <p>{description}</p>

      {/* video player */}
      <ReactPlayer url={vid_url.toString()} config={playerConfig} />

      {/* tech stack */}
      <h3>Tech:</h3>
      <ul>
        {tech_stack.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>

      {/* link to site */}
      <a href={site_url.toString()} target="_blank">
        Click here to visit the site
      </a>
    </div>
  );
};

export default Project;
