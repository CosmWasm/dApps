import { Coin } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import copyToClipboard from "clipboard-copy";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAccount, useError, useSdk } from "../../../../service";
import { printableCoin } from "../../../../service/helpers";
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
      action: tryRegister,
    };
  }

  if (myAddress === nameOwnerAddress) {
    return {
      message: "is owned by you !",
      actionText: `Transfer ${printableCoin(prices.transfer)}`,
      action: navigateToTransfer,
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
  readonly contractAddress: string;
}

function SearchResult({ name, contractAddress }: SearchResultProps): JSX.Element {
  const history = useHistory();
  const { getClient } = useSdk();
  const accountProvider = useAccount();
  const { setError, error } = useError();

  const [nameOwnerAddress, setNameOwnerAddress] = useState("");
  const [prices, setPrices] = useState<Prices>({});

  React.useEffect(() => {
    getClient()
      .queryContractSmart(contractAddress, { resolve_record: { name } })
      .then((response) => {
        setNameOwnerAddress(response.address);
      })
      .catch((error) => {
        // a not found error means it is free, other errors need to be reported
        if (!error.toString().includes("NameRecord not found")) {
          setError(error);
        }
      });
  }, [setError, contractAddress, getClient, name]);

  React.useEffect(() => {
    getClient()
      .queryContractSmart(contractAddress, { config: {} })
      .then((response) => {
        setPrices({
          purchase: response.purchase_price,
          transfer: response.transfer_price,
        });
      })
      .catch(setError);
  }, [setError, contractAddress, getClient]);

  function tryRegister() {
    const purchasePrice = prices.purchase;
    const payment = purchasePrice ? [purchasePrice] : undefined;

    getClient()
      .execute(contractAddress, { register: { name: name } }, "Buying my name", payment)
      .then(() => accountProvider.refreshAccount())
      .catch(setError);

    history.push({
      pathname: pathOperationResult,
      state: { success: true, message: "Registered succesfully" },
    });
  }

  function navigateToTransfer() {
    history.push({ pathname: pathTransfer, state: { name: name, contractAddress: contractAddress } });
  }

  const { message, actionText, action } = getResult(
    accountProvider.account.address,
    nameOwnerAddress,
    prices,
    tryRegister,
    navigateToTransfer,
  );

  return (
    <Center tag="main" className="SearchResult">
      <Stack>
        <Text>{error}</Text>
        <Text className="SearchedName">{name}</Text>
        <Text className="LightText">{message}</Text>
        <Button type="primary" onClick={action}>
          {actionText}
        </Button>
      </Stack>
    </Center>
  );
}

export default SearchResult;
