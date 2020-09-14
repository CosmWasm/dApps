import { OperationResult as OperationResultDesign } from "@cosmicdapp/design";
import { History } from "history";
import React from "react";
import { pathTokens } from "../../paths";
import failIcon from "./assets/failIcon.svg";
import successIcon from "./assets/successIcon.svg";

function goToTokensList(history: History) {
  history.push(pathTokens);
}

export function OperationResult(): JSX.Element {
  return (
    <OperationResultDesign
      defaultButtonAction={goToTokensList}
      successIcon={successIcon}
      failIcon={failIcon}
    />
  );
}
