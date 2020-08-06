import { Button, Typography } from "antd";
import { History } from "history";
import React from "react";
import { useHistory } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import { pathHome } from "../../paths";
import failIcon from "./assets/failIcon.svg";
import successIcon from "./assets/successIcon.svg";
import "./OperationResult.less";

const { Text } = Typography;

function goToHome(history: History) {
  history.push(pathHome);
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
      buttonAction: () => goToHome(history),
    };
  }

  return {
    icon: failIcon,
    textClass: "FailText",
    buttonText: "Retry",
    buttonAction: history.goBack,
  };
}

interface ResultState {
  readonly success: boolean;
  readonly message: string;
}

function OperationResult(): JSX.Element {
  const history = useHistory();
  const { success, message } = history.location.state as ResultState;
  const { icon, textClass, buttonText, buttonAction } = getResultContent(success, history);

  return (
    <Center tag="main" className="OperationResult">
      <Stack>
        <img src={icon} alt="Result icon" />
        <Text className={textClass}>{message}</Text>
        <Button type="primary" onClick={() => buttonAction()}>
          {buttonText}
        </Button>
      </Stack>
    </Center>
  );
}

export default OperationResult;
