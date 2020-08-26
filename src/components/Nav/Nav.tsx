import React from "react";
/* Styles */
import "./Nav.css";
/* Material UI */
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
/* Constants */
import { SECTIONS, viewIDs } from "../../constants/skeleton";
/* Util */
import { scrollToRef } from "../../util";
/* Subcomponents */
import { MobileNav } from "../";

interface NavProps {
  homeViewRef: React.RefObject<HTMLDivElement>;
  projectsViewRef: React.RefObject<HTMLDivElement>;
  skillsViewRef: React.RefObject<HTMLDivElement>;
  contactViewRef: React.RefObject<HTMLDivElement>;
}

const Nav: React.FC<NavProps> = (props) => {
  const { homeViewRef, projectsViewRef, skillsViewRef, contactViewRef } = props;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (null !== contactViewRef.current) {
      // scroll to the respective ref based on the inner text which is determined by the same variable found in skeleton.tsx
      switch (e.currentTarget.lastChild?.textContent) {
        case viewIDs.ABOUT_VIEW:
          return scrollToRef(homeViewRef);
        case viewIDs.PROJECTS_VIEW:
          return scrollToRef(projectsViewRef);
        case viewIDs.SKILLS_VIEW:
          return scrollToRef(skillsViewRef);
        case viewIDs.CONTACT_VIEW:
          return scrollToRef(contactViewRef);
      }
    }
  };

  const spreadNavBreadCrumbsJSX = () => {
    return SECTIONS.map((sectionName, i) => (
      <Link
        key={`${sectionName}-${i}-nav`}
        color="inherit"
        underline="none"
        onClick={handleClick}
        className="Nav__link"
      >
        {sectionName}
      </Link>
    ));
  };

  return (
    <nav className="Nav__main-container">
      <div className="Nav__desktop hide">
        <Breadcrumbs aria-label="breadcrumb">
          {spreadNavBreadCrumbsJSX()}
        </Breadcrumbs>
      </div>

      <div className="Nav__mobile hide">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
