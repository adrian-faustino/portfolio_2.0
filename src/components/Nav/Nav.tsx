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

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            onClick={handleClickListItem}
          >
            <ListItemText primary={SECTIONS[selectedIndex]} />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {SECTIONS.map((option, index) => (
            <MenuItem
              key={option.toString()}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </nav>
  );
};

export default Nav;
