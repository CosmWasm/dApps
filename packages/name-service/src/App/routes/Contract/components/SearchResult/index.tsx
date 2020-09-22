import { OperationResultState } from "@cosmicdapp/design";
import { getErrorFromStackTrace, printableCoin, useAccount, useError, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import copyToClipboard from "clipboard-copy";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { pathContract, pathOperationResult, pathTransfer } from "../../../../paths";
import { BlackText, LightText, ResultStack } from "./style";

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
  readonly contractLabel: string;
  readonly contractAddress: string;
  readonly name: string;
  readonly setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchResult({
  contractLabel,
  contractAddress,
  name,
  setLoading,
}: SearchResultProps): JSX.Element {
  const fullContractPath = `${pathContract}/${contractLabel}/${contractAddress}/${name}`;

  const history = useHistory();
  const { setError, error } = useError();
  const { getClient } = useSdk();
  const accountProvider = useAccount();

  const [nameOwnerAddress, setNameOwnerAddress] = useState("");
  const [prices, setPrices] = useState<Prices>({});

  useEffect(() => {
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

  useEffect(() => {
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
    setLoading(true);

    const purchasePrice = prices.purchase;
    const payment = purchasePrice ? [purchasePrice] : undefined;

    getClient()
      .execute(contractAddress, { register: { name: name } }, "Buying my name", payment)
      .then(() => {
        accountProvider.refreshAccount();

        history.push({
          pathname: pathOperationResult,
          state: {
            success: true,
            message: `Successfully registered ${name}`,
            customButtonText: "Name details",
            customButtonActionPath: fullContractPath,
          } as OperationResultState,
        });
      })
      .catch((stackTrace) => {
        console.error(stackTrace);

        history.push({
          pathname: pathOperationResult,
          state: {
            success: false,
            message: "Name register failed:",
            error: getErrorFromStackTrace(stackTrace),
            customButtonActionPath: fullContractPath,
          } as OperationResultState,
        });
      });
  }

  function navigateToTransfer() {
    history.push(`${pathTransfer}/${contractLabel}/${contractAddress}/${name}`);
  }

  const { message, actionText, action } = getResult(
    accountProvider.account.address,
    nameOwnerAddress,
    prices,
    tryRegister,
    navigateToTransfer,
  );

  return (
    <ResultStack>
      <Text>{error}</Text>
      <BlackText>{name}</BlackText>
      <LightText>{message}</LightText>
      <Button type="primary" onClick={action}>
        {actionText}
      </Button>
    </ResultStack>
  );
}
