import React from "react";
/* Styles */
import "./Project.css";
/* Constants */
import { IProject } from "../../constants/types";
/* npm */
import ReactPlayer from "react-player";
/* Material UI */
import { Card, CardContent, Typography } from "@material-ui/core";

interface ProjectProps {
  project: IProject;
}

const Project: React.FC<ProjectProps> = (props) => {
  const {
    description,
    vid_url,
    tech_stack,
    site_url,
    github_url,
  } = props.project;

  const playerConfig = {
    youtube: {
      playerVars: {
        color: "white",
        controls: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        widget_referrer: "test",
      },
    },
  };

  const spreadTechJsx = (techs: Array<String>) => {
    return techs.map((tech, i) => (
      <li className="Project__tech-li" key={`${tech}-${i}`}>
        {tech}
      </li>
    ));
  };

  return (
    <Card className="Project__container">
      <CardContent>
        {/* video player */}
        <ReactPlayer
          className="Project__vid-player"
          url={vid_url.toString()}
          config={playerConfig}
        />

        {/* description */}
        <Typography
          className="Project__description"
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>

        {/* tech stack */}
        <h3>Tech</h3>
        <div className="Project__tech-grid">
          <ul className="Project__tech-ul">{spreadTechJsx(tech_stack)}</ul>
        </div>

        <div className="Project__links-container">
          {/* link to site */}
          <a
            className="Project__visit-site-link"
            href={site_url.toString()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit site
          </a>

          {/* link to GitHub */}
          {github_url && (
            <a
              className="Project__github-link"
              href={github_url.toString()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="portfolio_2.0_assets/tech_icons/github-original.svg"
                alt="github icon"
              />
              Code
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
