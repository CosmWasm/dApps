import { Button, Input, Typography } from "antd";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAccount, useError, useSdk } from "../../../service";
import { printableCoin } from "../../../service/helpers";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import YourAccount from "../../components/YourAccount";
import { pathOperationResult } from "../../paths";
import { Prices } from "../Luxury/SearchResult";
import "./Transfer.less";

const { Title, Text } = Typography;

interface TransferState {
  readonly name: string;
  readonly contractAddress: string;
}

function Transfer(): JSX.Element {
  const { name, contractAddress } = useLocation().state as TransferState;
  const { getClient } = useSdk();
  const accountProvider = useAccount();
  const { setError } = useError();
  const history = useHistory();
  const [newOwnerAddress, setNewOwnerAddress] = useState("");
  const [prices, setPrices] = useState<Prices>({});
  const transferPrice = prices.transfer;

  React.useEffect(() => {
    getClient()
      .queryContractSmart(contractAddress, { config: {} })
      .then((response) => {
        setPrices({
          transfer: response.transfer_price,
        });
      })
      .catch(setError);
  }, [setError, contractAddress, getClient]);

  function tryTransfer() {
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
          state: { success: true, message: `Succesfully transferred ${name} to ${newOwnerAddress}` },
        });
      })
      .catch((error) => {
        console.error(error);

        history.push({
          pathname: pathOperationResult,
          state: { success: false, message: "Name transfer failed" },
        });
      });
  }

  return (
    <Center tag="main" className="Transfer">
      <Stack>
        <BackButton />
        <Stack className="TransferStack">
          <Title>Transfer</Title>
          <Typography>
            <Text>Name: </Text>
            <Text>{name}</Text>
          </Typography>
          <Text>to</Text>
          <Input placeholder="Enter address" onChange={(event) => setNewOwnerAddress(event.target.value)} />
          <Button type="primary" onClick={tryTransfer}>
            Transfer {printableCoin(transferPrice)}
          </Button>
        </Stack>
        <YourAccount tag="footer" />
      </Stack>
    </Center>
  );
}

export default Transfer;
