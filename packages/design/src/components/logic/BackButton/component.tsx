import React from "react";
import { useHistory } from "react-router-dom";

export interface BackButtonProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly icon: string;
  readonly path?: string;
  readonly state?: any;
}

export function BackButton({ icon, path, state, ...props }: BackButtonProps): JSX.Element {
  const history = useHistory();
  const goBack = path ? () => history.push(path, state) : history.goBack;

  return <img src={icon} alt="Back arrow" onClick={goBack} {...props} />;
}
