import React from "react";
/* Styles */
import "./ContentAccordion.css";
/* Material UI */
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface IContentAccordion {
  title: String;
}

const ContentAccordion: React.FC<IContentAccordion> = (props) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="ContentAccordion__title">
            {props.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{props.children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ContentAccordion;
