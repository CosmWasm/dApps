import { OperationResult as OperationResultDesign } from "@cosmicdapp/design";
import { History } from "history";
import React from "react";
import { pathHome } from "../../paths";
import failIcon from "./assets/failIcon.svg";
import successIcon from "./assets/successIcon.svg";

function goToHome(history: History) {
  history.push(pathHome);
}

export function OperationResult(): JSX.Element {
  return (
    <OperationResultDesign defaultButtonAction={goToHome} successIcon={successIcon} failIcon={failIcon} />
  );
}
