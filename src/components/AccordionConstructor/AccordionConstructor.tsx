import React from "react";
/* Material UI */
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface AccordionConstructorProps {
  expanded: string | boolean;
  handleChange: (
    panel: string
  ) => (event: React.ChangeEvent<{}>, expanded: boolean) => void;
  panelName: string;
  headerName: string;
}

const AccordionConstructor: React.FC<AccordionConstructorProps> = (props) => {
  const { expanded, handleChange, panelName, headerName } = props;

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

  return (
    <Accordion
      expanded={expanded === panelName}
      onChange={handleChange(panelName)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${panelName}a-content`}
        id={`${panelName}a-header`}
      >
        <Typography className={classes.heading}>{headerName}</Typography>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionConstructor;
