import React from "react";
/* Material UI */
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
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
        <span className="index__title">{headerName}</span>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionConstructor;
