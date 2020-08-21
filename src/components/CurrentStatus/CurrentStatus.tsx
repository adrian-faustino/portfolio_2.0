import React from "react";
/* Styles */
import "./CurrentStatus.css";
/* Constants */
import {
  EMPLOYMENT_STATUS,
  CURRENTLY_LEARNING,
  CURRENTLY_REVIEWING,
  LEARNING_NEXT,
} from "../../db/myStatus";

const CurrentStatus = () => {
  const spread_li_jsx = (items: Array<String>) => {
    return items.map((item, i) => <li key={`${item}-${i}-status`}>{item}</li>);
  };

  return (
    <div>
      <h3>Employment status:</h3>
      <ul>{spread_li_jsx(EMPLOYMENT_STATUS)}</ul>

      <h3>Currently learning:</h3>
      <ul>{spread_li_jsx(CURRENTLY_LEARNING)}</ul>

      <h3>Currently reviewing:</h3>
      <ul>{spread_li_jsx(CURRENTLY_REVIEWING)}</ul>

      <h3>Learning next:</h3>
      <ul>{spread_li_jsx(LEARNING_NEXT)}</ul>
    </div>
  );
};

export default CurrentStatus;
