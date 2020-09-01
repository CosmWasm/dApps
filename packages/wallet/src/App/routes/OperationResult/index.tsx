import { PageLayout } from "@cosmicdapp/design";
import { Button } from "antd";
import { History } from "history";
import React from "react";
import { useHistory } from "react-router-dom";
import { pathTokens } from "../../paths";
import failIcon from "./assets/failIcon.svg";
import successIcon from "./assets/successIcon.svg";
import { MainStack, ResultText } from "./style";

function goToTokensList(history: History) {
  history.push(pathTokens);
}

interface ResultContent {
  readonly result: "success" | "fail";
  readonly icon: string;
  readonly buttonText: string;
  readonly buttonAction: () => void;
}

function getResultContent(success: boolean, history: History): ResultContent {
  if (success) {
    return {
      result: "success",
      icon: successIcon,
      buttonText: "Home",
      buttonAction: () => goToTokensList(history),
    };
  }

  return {
    result: "fail",
    icon: failIcon,
    buttonText: "Retry",
    buttonAction: history.goBack,
  };
}

export interface OperationResultState {
  readonly success: boolean;
  readonly message: string;
  readonly error?: string;
  readonly customButtonText?: string;
  readonly customButtonActionPath?: string;
  readonly customButtonActionState?: unknown;
}

function OperationResult(): JSX.Element {
  const history = useHistory();

  const {
    success,
    message,
    error,
    customButtonText,
    customButtonActionPath,
    customButtonActionState,
  } = history.location.state as OperationResultState;
  const { icon, result, buttonText, buttonAction } = getResultContent(success, history);

  const chosenButtonText = customButtonText || buttonText;
  const chosenButtonAction = customButtonActionPath
    ? () => history.push(customButtonActionPath, customButtonActionState)
    : buttonAction;

  return (
    <PageLayout>
      <MainStack>
        <img src={icon} alt="Result icon" />
        <ResultText data-result={result}>{message}</ResultText>
        {error && <ResultText data-result={result}>{error}</ResultText>}
        <Button type="primary" onClick={chosenButtonAction}>
          {chosenButtonText}
        </Button>
      </MainStack>
    </PageLayout>
  );
}

export default OperationResult;
