import { OperationResult as OperationResultDesign } from "@cosmicdapp/design";
import { History } from "history";
import React from "react";
import { pathValidators } from "../../paths";
import failIcon from "./assets/failIcon.svg";
import successIcon from "./assets/successIcon.svg";

function goToValidators(history: History) {
  history.push(pathValidators);
}

export function OperationResult(): JSX.Element {
  return (
    <OperationResultDesign
      defaultButtonAction={goToValidators}
      successIcon={successIcon}
      failIcon={failIcon}
    />
  );
}
