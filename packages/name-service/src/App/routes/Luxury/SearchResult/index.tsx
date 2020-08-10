import { Button, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import Center from "../../../../theme/layout/Center";
import Stack from "../../../../theme/layout/Stack";
import { pathOperationResult, pathTransfer } from "../../../paths";
import "./SearchResult.less";

const { Text } = Typography;

export interface Prices {
  readonly purchase?: Coin;
  readonly transfer?: Coin;
}

interface Result {
  readonly message: string;
  readonly actionText: string;
  readonly action: () => void;
}

function getResult(
  myAddress: string,
  nameOwnerAddress: string,
  prices: Prices,
  tryRegister: () => void,
  navigateToTransfer: () => void,
): Result {
  if (!nameOwnerAddress) {
      return {
      message: "is available!",
      actionText: `Register ${printableCoin(prices.purchase)}`,
      action: () => {
        tryRegister();
      },
    };
  }

  if (myAddress === nameOwnerAddress) {
    return {
        message: "is owned by you !",
      actionText: `Transfer ${printableCoin(prices.transfer)}`,
      action: () => {
          navigateToTransfer();
        },
      };
  } else {
      return {
      message: `is owned by ${nameOwnerAddress}`,
        actionText: "Copy Owner Address",
      action: () => {
        copyToClipboard(nameOwnerAddress);
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
