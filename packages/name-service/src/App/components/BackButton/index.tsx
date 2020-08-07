import React from "react";
import { useHistory } from "react-router-dom";
import backArrow from "./assets/backArrow.svg";
import "./BackButton.less";

function BackButton(): JSX.Element {
  const history = useHistory();

  return <img src={backArrow} alt="Back arrow" className="BackButton" onClick={history.goBack} />;
}

export default BackButton;
