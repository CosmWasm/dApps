import { Button, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import Center from "../../../../theme/layout/Center";
import Stack from "../../../../theme/layout/Stack";
import { pathOperationResult, pathTransfer } from "../../../paths";
import "./SearchResult.less";

const { Text } = Typography;

interface Result {
  readonly message: string;
  readonly actionText: string;
  readonly action: (name: string) => void;
}

function getDummyResult(name: string, tryRegister: () => void, navigateToTransfer: () => void): Result {
  switch (name) {
    case "ownedByYou":
      return {
        message: "is owned by you !",
        actionText: "Transfer 1 COSM",
        action: (_name) => {
          navigateToTransfer();
        },
      };
    case "ownedByOther":
      return {
        message: "is owned by cosmos1ym5m5ueud683p202u3h4f5v6k6ll7h",
        actionText: "Copy Owner Address",
        action: (name) => {
          console.log("Copied" + name);
        },
      };
    default:
      return {
        message: "is available!",
        actionText: "Register 2 COSM",
        action: (_name) => {
          tryRegister();
        },
      };
  }
}

interface SearchResultProps {
  readonly name: string;
}

function SearchResult({ name }: SearchResultProps): JSX.Element {
  const history = useHistory();

  function tryRegister() {
    history.push({
      pathname: pathOperationResult,
      state: { success: true, message: "Registered succesfully" },
    });
  }

  function navigateToTransfer() {
    history.push({ pathname: pathTransfer, state: name });
  }

  const { message, actionText, action } = getDummyResult(name, tryRegister, navigateToTransfer);

  return (
    <Center tag="main" className="SearchResult">
      <Stack>
        <Text className="SearchedName">{name}</Text>
        <Text className="LightText">{message}</Text>
        <Button type="primary" onClick={() => action(name)}>
          {actionText}
        </Button>
      </Stack>
    </Center>
  );
}

export default SearchResult;
