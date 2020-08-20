import React from "react";
/* Styles */
import "./SkillsView.css";
/* Constants */
import {
  FRONT_END_TECH,
  BACK_END_TECH,
  MISC,
  MISC_SKILLS,
} from "../../db/mySkills";
import { ISkill } from "../../constants/types";

const SkillsView = () => {
  const mapSkillsJSX = (skills: Array<ISkill>) => {
    return skills.map((skill) => (
      <div className="SkillsView__show-on-hover">
        <span className="SkillsView__skill-label">{skill.title}</span>
        {skill.img_path && (
          <img
            alt={`${skill.title} logo`}
            className="SkillsView__skill-image"
            src={skill.img_path?.toString()}
          />
        )}
      </div>
    ));
  };

  return (
    <div>
      <h2>Skills</h2>

      <div className="SkillsView__wrapper">
        <div className="SkillsView__col1">
          <h3>Front End</h3>
          <div className="SkillsView__icon-container">
            {mapSkillsJSX(FRONT_END_TECH)}
          </div>
        </div>

        <div className="SkillsView__col2">
          <h3>Back End</h3>
          <div className="SkillsView__icon-container">
            {mapSkillsJSX(BACK_END_TECH)}
          </div>
        </div>

        <div className="SkillsView__col3">
          <h3>Misc</h3>
          <div className="SkillsView__icon-container">
            {mapSkillsJSX(MISC_SKILLS)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
