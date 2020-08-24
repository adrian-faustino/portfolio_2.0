import React from "react";
/* Styles */
import "./Project.css";
/* Constants */
import { IProject, ISkill } from "../../constants/types";
/* npm */
import ReactPlayer from "react-player";
/* Material UI */
import {
  Card,
  CardContent,
  Typography,
  Chip,
  withStyles,
} from "@material-ui/core";
/* Subcomponents */
import { TechIcon } from "../";

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

  // Youtube player config
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

  // display chips containing tech title, logo color as bg color, and the TechIcon.tsx component to diplay the tech's logo
  const spreadTechJsx = (techs: Array<ISkill>) => {
    return techs.map((tech, i) => {
      // add color to each chip
      const StyledChip = withStyles({
        root: {
          backgroundColor: tech.logo_color
            ? tech.logo_color.toString()
            : undefined,
        },
      })(Chip);
      return (
        <StyledChip
          className="Project__tech-item"
          key={`${tech.title}-${i}`}
          label={tech.title}
          icon={
            <div className="Project__tech-item-icon">
              <TechIcon skill={tech} />
            </div>
          }
        />
      );
    });
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
        <div className="Project__tech-grid">{spreadTechJsx(tech_stack)}</div>

        <div className="Project__links-container">
          {/* link to site */}
          <a
            className="Project__visit-site-link"
            href={site_url.toString()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Site
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
