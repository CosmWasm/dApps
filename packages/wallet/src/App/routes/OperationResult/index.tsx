import { Button, Typography } from "antd";
import { History } from "history";
import React from "react";
import { useHistory } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import { pathTokens } from "../../paths";
import failIcon from "./assets/failIcon.svg";
import successIcon from "./assets/successIcon.svg";
import "./OperationResult.less";

const { Text } = Typography;

function goToTokensList(history: History) {
  history.push(pathTokens);
}

interface ResultContent {
  readonly icon: string;
  readonly textClass: string;
  readonly buttonText: string;
  readonly buttonAction: () => void;
}

function getResultContent(success: boolean, history: History): ResultContent {
  if (success) {
    return {
      icon: successIcon,
      textClass: "SuccessText",
      buttonText: "Home",
      buttonAction: () => goToTokensList(history),
    };
  }

  return {
    icon: failIcon,
    textClass: "FailText",
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
  readonly customButtonActionState?: any;
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
  const { icon, textClass, buttonText, buttonAction } = getResultContent(success, history);

  const chosenButtonText = customButtonText || buttonText;
  const chosenButtonAction = customButtonActionPath
    ? () => history.push(customButtonActionPath, customButtonActionState)
    : buttonAction;

  return (
    <Center tag="main" className="OperationResult">
      <Stack className="MainStack">
        <img src={icon} alt="Result icon" />
        <Text className={textClass}>{message}</Text>
        {error && <Text className={textClass}>{error}</Text>}
        <Button type="primary" onClick={chosenButtonAction}>
          {chosenButtonText}
        </Button>
      </Stack>
    </Center>
  );
}

export default OperationResult;
