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
    return skills.map((skill) => <div>{skill.title}</div>);
  };

  return (
    <div>
      <h3>From SkillsView</h3>
      <div className="SkillsView__wrapper">
        <div className="SkillsView__col1">
          <h3>Front End</h3>
          {mapSkillsJSX(FRONT_END_TECH)}
        </div>

        <div className="SkillsView__col2">
          <h3>Back End</h3>
          {mapSkillsJSX(BACK_END_TECH)}
        </div>

        <div className="SkillsView__col3">
          <h3>Misc</h3>
          {mapSkillsJSX(MISC_SKILLS)}
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
