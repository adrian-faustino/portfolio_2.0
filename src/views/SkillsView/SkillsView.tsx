import React from "react";
/* Styles */
import "./SkillsView.css";
/* Constants */
import {
  FRONT_END_TECH,
  BACK_END_TECH,
  miscParagraph,
  MISC_SKILLS,
} from "../../db/mySkills";
import { ISkill } from "../../constants/types";
/* Subcomponents */
import { TechIcon } from "../../components";

const SkillsView = () => {
  const mapSkillsJSX = (skills: Array<ISkill>) => {
    return skills.map((skill, i) => (
      <TechIcon skill={skill} key={`${skill}-${i}-skill`} />
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

            {/* Misc skills paragraph on 3rd column */}
            <p className="SkillsView__misc-paragraph">{miscParagraph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsView;
