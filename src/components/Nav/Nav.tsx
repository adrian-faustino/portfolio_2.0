import React from "react";
/* Styles */
import "./Nav.css";
/* Material UI */
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Nav = () => {
  return (
    <div className="Nav">
      <ul className="Nav__links-container">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Projects</a>
        </li>
        <li>
          <a>Skills</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>

      {/* <hr className="Nav__underline" /> */}

      {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            // className={classes.title}
          >
            News
          </Typography>
        </Toolbar>
      </AppBar> */}
    </div>
  );
};

export default Nav;
