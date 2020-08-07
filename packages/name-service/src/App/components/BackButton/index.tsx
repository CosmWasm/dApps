import React from "react";
import { useHistory } from "react-router-dom";
import "./BackButton.less";

function BackButton(): JSX.Element {
  const history = useHistory();

  return (
    <div className="BackButton" onClick={history.goBack}>
      {"<-"}
    </div>
  );
}

export default BackButton;
