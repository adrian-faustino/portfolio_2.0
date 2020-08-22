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
      <span key={`${item}-${i}-status`}>{item}</span>
    ));
  };

  // Accordion styles
  // Ref docs: https://material-ui.com/components/accordion/
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightMedium,
    },
  }));

  const classes = useStyles();

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
          <Typography>{spread_items_jsx(EMPLOYMENT_STATUS)}</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: currently learning */}
      <Accordion>
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
          <Typography>{spread_items_jsx(CURRENTLY_LEARNING)}</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: currently reviewing */}
      <Accordion>
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
          <Typography>{spread_items_jsx(CURRENTLY_REVIEWING)}</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Accordion row: learning next */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Learning Next</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{spread_items_jsx(LEARNING_NEXT)}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CurrentStatus;
