import React from "react";
/* Styles */
import "./Project.css";
/* Constants */
import { IProject } from "../../constants/types";
/* npm */
import ReactPlayer from "react-player";
/* Material UI */
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

interface ProjectProps {
  project: IProject;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { title, description, vid_url, tech_stack, site_url } = props.project;

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

  return (
    <Card className="Project__container">
      <CardActionArea>
        <CardContent>
          {/* title */}
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>

          {/* video player */}
          <ReactPlayer
            className="Project__vid-player"
            url={vid_url.toString()}
            config={playerConfig}
          />

          {/* description */}
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>

          {/* tech stack */}
          <h3>Tech:</h3>
          <ul>
            {tech_stack.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>

          {/* link to site */}
          <a href={site_url.toString()} target="_blank">
            Visit site
          </a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Project;
