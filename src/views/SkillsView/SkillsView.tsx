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
      <h2 className="section-title">My Skills</h2>

      {/* front end cloumn */}
      <div className="SkillsView__wrapper">
        <div>
          <h3>Front End</h3>
          <div className="SkillsView__icon-container">
            {mapSkillsJSX(FRONT_END_TECH)}
          </div>
        </div>

        {/* back end column */}
        <div>
          <h3>Back End</h3>
          <div className="SkillsView__icon-container">
            {mapSkillsJSX(BACK_END_TECH)}
          </div>
        </div>

        {/* misc column */}
        <div>
          <h3>Misc</h3>
          <div className="SkillsView__icon-container col-3">
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
