import React from "react";
import { useHistory } from "react-router-dom";
import backArrow from "./assets/backArrow.svg";

interface BackButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly path?: string;
  readonly state?: unknown;
}

export function BackButton({ path, state, ...props }: BackButtonProps): JSX.Element {
  const history = useHistory();
  const goBack = path ? () => history.push(path, state) : history.goBack;

  return <img src={backArrow} alt="Back arrow" onClick={goBack} {...props} />;
}
