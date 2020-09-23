import { BackButton, Loading, OperationResultState, PageLayout, YourAccount } from "@cosmicdapp/design";
import { getErrorFromStackTrace, printableCoin, useAccount, useError, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathContract, pathOperationResult, pathTransfer } from "../../paths";
import { FormTransferName } from "./FormTransferName";
import { BackTransferStack, MainStack, TransferStack } from "./style";

const { Title, Text } = Typography;

interface TransferParams {
  readonly contractLabel: string;
  readonly contractAddress: string;
  readonly name: string;
}

export function Transfer(): JSX.Element {
  const { contractLabel, contractAddress, name } = useParams() as TransferParams;
  const fullContractPath = `${pathContract}/${contractLabel}/${contractAddress}/${name}`;

  const history = useHistory();
  const { setError } = useError();
  const { getClient } = useSdk();
  const accountProvider = useAccount();

  const [loading, setLoading] = useState(false);
  const [newOwnerAddress, setNewOwnerAddress] = useState("");
  const [transferPrice, setTransferPrice] = useState<Coin>();

  useEffect(() => {
    getClient()
      .queryContractSmart(contractAddress, { config: {} })
      .then((response) => {
        setTransferPrice(response.transfer_price);
      })
      .catch(setError);
  }, [setError, contractAddress, getClient]);

  function tryTransfer() {
    setLoading(true);
    const payment = transferPrice ? [transferPrice] : undefined;

    getClient()
      .execute(
        contractAddress,
        { transfer: { name: name, to: newOwnerAddress } },
        "Transferring my name",
        payment,
      )
      .then(() => {
        accountProvider.refreshAccount();

        history.push({
          pathname: pathOperationResult,
          state: {
            success: true,
            message: `Successfully transferred ${name} to ${newOwnerAddress}`,
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
            message: "Name transfer failed:",
            error: getErrorFromStackTrace(stackTrace),
            customButtonActionPath: `${pathTransfer}/${contractLabel}/${contractAddress}/${name}`,
          } as OperationResultState,
        });
      });
  }

  return (
    (loading && <Loading loadingText={`Transferring name: ${name}...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <BackTransferStack>
            <BackButton icon={backArrowIcon} path={fullContractPath} />
            <TransferStack>
              <Title>Transfer</Title>
              <Typography>
                <Text>Name: </Text>
                <Text>{name}</Text>
              </Typography>
              <Text>to</Text>
              <FormTransferName
                setNewOwnerAddress={setNewOwnerAddress}
                transferButtonText={`Transfer ${printableCoin(transferPrice)}`}
                transferButtonAction={tryTransfer}
              />
            </TransferStack>
          </BackTransferStack>
          <YourAccount tag="footer" />
        </MainStack>
      </PageLayout>
    ))
  );
}
