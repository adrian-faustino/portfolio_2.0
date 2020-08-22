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
/* Subcomponents */
import { AccordionConstructor } from "../";

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

  // toggle clicked accordion title
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="CurrentStatus__main-container">
      {/* Accordion row: employment status*/}
      <AccordionConstructor
        expanded={expanded}
        handleChange={handleChange}
        panelName="panel1"
        headerName="Employment Status"
      >
        {spread_items_jsx(EMPLOYMENT_STATUS)}
      </AccordionConstructor>

      {/* Accordion row: currently learning */}
      <AccordionConstructor
        expanded={expanded}
        handleChange={handleChange}
        panelName="panel2"
        headerName="Currently Learning"
      >
        {spread_items_jsx(CURRENTLY_LEARNING)}
      </AccordionConstructor>

      {/* Accordion row: currently reviewing */}
      <AccordionConstructor
        expanded={expanded}
        handleChange={handleChange}
        panelName="panel3"
        headerName="Currently Reviewing"
      >
        {spread_items_jsx(CURRENTLY_REVIEWING)}
      </AccordionConstructor>

      {/* Accordion row: learning next */}
      <AccordionConstructor
        expanded={expanded}
        handleChange={handleChange}
        panelName="panel4"
        headerName="Learning Next"
      >
        {spread_items_jsx(LEARNING_NEXT)}
      </AccordionConstructor>
    </div>
  );
};

export default CurrentStatus;
