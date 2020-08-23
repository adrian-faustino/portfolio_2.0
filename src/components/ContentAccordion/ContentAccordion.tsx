import React, { useRef } from "react";
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
/* Util */
import { scrollToRef } from "../../util";

interface IContentAccordion {
  title: String;
}

const ContentAccordion: React.FC<IContentAccordion> = (props) => {
  const scrollIntoViewRef = useRef<HTMLDivElement>(null);

  const handleScrollIntoView = () => {
    scrollToRef(scrollIntoViewRef);
  };

  return (
    <div className="ContentAccordion__main-container" ref={scrollIntoViewRef}>
      <Accordion square>
        <AccordionSummary
          onClick={handleScrollIntoView}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="ContentAccordion__title">
            {props.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="ContentAccordion__expanded-container">
          {props.children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ContentAccordion;

// Component notes: This is rendering uncontrolled accordion. i.e. Multiple can open vs only 1 currently opened.
// See AccordionConstructor.tsx for controlled
