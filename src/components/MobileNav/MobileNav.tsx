import React, { useState, useEffect } from "react";
/* Material UI */
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
/* Constants */
import { SECTIONS } from "../../constants/skeleton";

interface MobileNavProps {
  jumpToSection: (sectionName: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ jumpToSection }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState();

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

  // jump to section
  useEffect(() => {
    console.log("Triggering effect.");
    // cannot use !selectedIndex because index 0 returns as falsey
    !isNaN(selectedIndex) && jumpToSection(SECTIONS[selectedIndex].toString());
  }, [selectedIndex, jumpToSection]);

  return (
    <div>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={handleClickListItem}
        >
          <ListItemText secondary={"Jump to section"} />
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
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MobileNav;
