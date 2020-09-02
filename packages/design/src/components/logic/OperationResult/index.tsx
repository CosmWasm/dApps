import { Button } from "antd";
import { History } from "history";
import React from "react";
import { useHistory } from "react-router-dom";
import { PageLayout } from "../../layout/PageLayout";
import { MainStack, ResultText } from "./style";

interface ResultContent {
  readonly result: "success" | "fail";
  readonly icon: string;
  readonly buttonText: string;
  readonly buttonAction: () => void;
}

interface OperationResultState {
  readonly success: boolean;
  readonly message: string;
  readonly error?: string;
  readonly customButtonText?: string;
  readonly customButtonActionPath?: string;
  readonly customButtonActionState?: any;
}

interface OperationResultProps {
  readonly defaultButtonAction: (history: History) => void;
  readonly successIcon: string;
  readonly failIcon: string;
}

function OperationResult({ defaultButtonAction, successIcon, failIcon }: OperationResultProps): JSX.Element {
  const history = useHistory();

  const {
    success,
    message,
    error,
    customButtonText,
    customButtonActionPath,
    customButtonActionState,
  } = history.location.state as OperationResultState;

  function getResultContent(success: boolean): ResultContent {
    if (success) {
      return {
        result: "success",
        icon: successIcon,
        buttonText: "Home",
        buttonAction: () => defaultButtonAction(history),
      };
    }

    return {
      result: "fail",
      icon: failIcon,
      buttonText: "Retry",
      buttonAction: history.goBack,
    };
  }

  const { icon, result, buttonText, buttonAction } = getResultContent(success);

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

export { OperationResult, OperationResultProps, OperationResultState };
