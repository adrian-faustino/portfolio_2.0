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
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

const CurrentStatus = () => {
  /* State */
  const [expanded, setExpanded] = useState("panel1");

  // spread the list of items in myStatus.tsx db
  const spread_items_jsx = (items: Array<String>) => {
    return items.map((item, i) => (
      <div key={`${item}-${i}-status`}>{item}</div>
    ));
  };

  // one accordion "row"
  const Accordion = withStyles({
    root: {
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: "auto",
      },
    },
    expanded: {},
  })(MuiAccordion);

  // accordion title
  const AccordionSummary = withStyles({
    root: {
      backgroundColor: "rgba(0, 0, 0, .03)",
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      marginBottom: -1,
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
      },
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      // set bg color of expanded accordion details
      backgroundColor: "var(--secondary-color)",
      boxShadow: "inset 0 0 5px black",
    },
  }))(MuiAccordionDetails);

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {/* Accordion row: employment status */}
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Employment Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {spread_items_jsx(EMPLOYMENT_STATUS)}
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: currently learning */}
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary id="panel2d-header">
          <Typography>Currently Learning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{spread_items_jsx(CURRENTLY_LEARNING)}</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: currently reviewing */}
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Currently Reviewing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{spread_items_jsx(CURRENTLY_REVIEWING)}</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: learning next */}
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Learning Next</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{spread_items_jsx(LEARNING_NEXT)}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CurrentStatus;
