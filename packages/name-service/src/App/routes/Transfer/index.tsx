import { Coin } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAccount, useError, useSdk } from "../../../service";
import { printableCoin } from "../../../service/helpers";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import YourAccount from "../../components/YourAccount";
import { TransferValidationSchema } from "../../forms/validationSchemas";
import { pathOperationResult } from "../../paths";
import { OperationResultState } from "../OperationResult";
import "./Transfer.less";

const { Title, Text } = Typography;

interface TransferState {
  readonly name: string;
  readonly contractAddress: string;
}

function Transfer(): JSX.Element {
  const { name, contractAddress } = useLocation().state as TransferState;
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
            message: `Succesfully transferred ${name} to ${newOwnerAddress}`,
          } as OperationResultState,
        });
      })
      .catch((error) => {
        console.error(error);

        history.push({
          pathname: pathOperationResult,
          state: { success: false, message: "Name transfer failed" } as OperationResultState,
        });
      });
  }

  return (
    (loading && <Loading loadingText={`Transferring name: ${name}...`} />) ||
    (!loading && (
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
            <Formik
              initialValues={{ address: "" }}
              validationSchema={TransferValidationSchema}
              onSubmit={(values) => {
                setNewOwnerAddress(values.address);
              }}
            >
              <Form>
                <FormItem name="address">
                  <Input name="address" placeholder="Enter address" />
                </FormItem>
              </Form>
            </Formik>
            <Button type="primary" onClick={tryTransfer}>
              Transfer {printableCoin(transferPrice)}
            </Button>
          </Stack>
          <YourAccount tag="footer" />
        </Stack>
      </Center>
    ))
  );
}

export default Transfer;
