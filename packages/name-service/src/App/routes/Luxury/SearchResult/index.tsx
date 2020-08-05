import { Button, Typography } from "antd";
import React from "react";
import Center from "../../../../theme/layout/Center";
import Stack from "../../../../theme/layout/Stack";
import "./SearchResult.less";

const { Text } = Typography;

interface Result {
  readonly message: string;
  readonly actionText: string;
  readonly action: (name: string) => void;
}

function getDummyResult(name: string): Result {
  switch (name) {
    case "ownedByYou":
      return {
        message: "is owned by you !",
        actionText: "Transfer 1 COSM",
        action: (name) => {
          console.log("Transfer" + name);
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
  const { message, actionText, action } = getDummyResult(name);

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
