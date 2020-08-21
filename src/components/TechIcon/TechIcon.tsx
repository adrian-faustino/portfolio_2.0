import React from "react";
/* Styles */
import "./TechIcon.css";
/* Constants */
import { ISkill } from "../../constants/types";

interface TechIconProps {
  skill: ISkill;
}

const TechIcon: React.FC<TechIconProps> = ({ skill }) => {
  return (
    <div className="TechIcon__show-on-hover">
      <span>{skill.title}</span>
      <img
        alt={`${skill.title} logo`}
        className="TechIcon__skill-image"
        src={skill.img_path.toString()}
        // add rotation animation to react logo (CSS IN App.css)
        id={
          skill.title.toLowerCase() === "react"
            ? "rotate-icon".toString()
            : undefined
        }
      />
    </div>
  );
};

export default TechIcon;
