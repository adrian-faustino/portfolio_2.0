import React, { useState } from "react";
/* Styles */
import "./CurrentStatus.css";
/* Constants */
import {
  EMPLOYMENT_STATUS,
  CURRENTLY_LEARNING,
  CURRENTLY_REVIEWING,
  LEARNING_NEXT,
} from "../../db/myStatus";
/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const CurrentStatus = () => {
  /* State */
  const [expanded, setExpanded] = useState<string | false>(false);

  // spread the list of items in myStatus.tsx db
  const spread_items_jsx = (items: Array<String>) => {
    return items.map((item, i) => (
      <span className="CurrentStatus__list-item" key={`${item}-${i}-status`}>
        {item}
      </span>
    ));
  };

  // Accordion styles
  // Ref docs: https://material-ui.com/components/accordion/
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: "var(--secondary-color2)",
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightMedium,
    },
  }));

  const classes = useStyles();

  // toggle clicked accordion title
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {/* Accordion row: employment status*/}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Employment Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {spread_items_jsx(EMPLOYMENT_STATUS)}
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: currently learning */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Currently Learning
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {spread_items_jsx(CURRENTLY_LEARNING)}
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: currently reviewing */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Currently Reviewing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {spread_items_jsx(CURRENTLY_REVIEWING)}
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: learning next */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Learning Next</Typography>
        </AccordionSummary>
        <AccordionDetails>{spread_items_jsx(LEARNING_NEXT)}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CurrentStatus;
