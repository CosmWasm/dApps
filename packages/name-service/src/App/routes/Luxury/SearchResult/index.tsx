import { Button, Typography } from "antd";
import React from "react";
import Center from "../../../../theme/layout/Center";
import { useHistory } from "react-router-dom";
import Stack from "../../../../theme/layout/Stack";
import "./SearchResult.less";
import { pathTransfer } from "../../../paths";

const { Text } = Typography;

interface Result {
  readonly message: string;
  readonly actionText: string;
  readonly action: (name: string) => void;
}

function getDummyResult(name: string, navigateToTransfer: () => void): Result {
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
        action: (name) => {
          console.log("Register " + name);
        },
      };
  }
}

interface SearchResultProps {
  readonly name: string;
}

function SearchResult({ name }: SearchResultProps): JSX.Element {
  const history = useHistory();

  function navigateToTransfer() {
    history.push({ pathname: pathTransfer, state: name });
  }

  const { message, actionText, action } = getDummyResult(name, navigateToTransfer);

  return (
    <Center tag="main" className="SearchResult">
      <Stack>
        <Typography>
          <Text className="SearchedName">{name}</Text>
        </Typography>
        <Typography>
          <Text className="LightText">{message}</Text>
        </Typography>
        <Button type="primary" onClick={() => action(name)}>
          {actionText}
        </Button>
      </Stack>
    </Center>
  );
}

export default SearchResult;
