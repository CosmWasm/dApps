import { getErrorFromStackTrace, mapCoin, useAccount, useSdk } from "@cosmicdapp/logic";
import { Coin, isPostTxFailure } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import { config } from "../../../config";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import YourAccount from "../../components/YourAccount";
import { sendAddressValidationSchema } from "../../forms/validationSchemas";
import { pathOperationResult, pathTokens } from "../../paths";
import { OperationResultState } from "../OperationResult";
import { TokenDetailState } from "../TokenDetail";
import "./TokenSend.less";

const { Title, Text } = Typography;

interface TokenSendParams {
  readonly tokenName: string;
}

export interface TokenSendState {
  readonly tokenAmount: string;
}

function TokenSend(): JSX.Element {
  const { getClient } = useSdk();
  const accountProvider = useAccount();

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { tokenName }: TokenSendParams = useParams();
  const { tokenAmount }: TokenSendState = history.location.state as TokenSendState;

  const tokenDetailPath = `${pathTokens}/${tokenName}`;
  const tokenDetailState: TokenDetailState = { tokenAmount };

  const sendTokensAction = (values) => {
    setLoading(true);
    const { address, amount } = values;

    const recipientAddress: string = address;
    const mappedCoin = mapCoin({ denom: tokenName, amount }, config.coinMap);
    const transferAmount: readonly Coin[] = [mappedCoin];

    getClient()
      .sendTokens(recipientAddress, transferAmount)
      .then((result) => {
        if (isPostTxFailure(result)) {
          return Promise.reject(result.rawLog);
        }

        accountProvider.refreshAccount();

        history.push({
          pathname: pathOperationResult,
          state: {
            success: true,
            message: `${amount} ${tokenName} succesfully sent to ${recipientAddress}`,
            customButtonText: "Tokens",
          } as OperationResultState,
        });
      })
      .catch((stackTrace) => {
        console.error(stackTrace);

        history.push({
          pathname: pathOperationResult,
          state: {
            success: false,
            message: "Send transaction failed:",
            error: getErrorFromStackTrace(stackTrace),
            customButtonActionPath: tokenDetailPath,
            customButtonActionState: tokenDetailState,
          } as OperationResultState,
        });
      });
  };

  const sendAmountValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("An amount is required")
      .positive("Amount should be positive")
      .max(parseFloat(tokenAmount), `Amount cannot be greater than ${tokenAmount}`),
  });

  const sendValidationSchema = sendAmountValidationSchema.concat(sendAddressValidationSchema);

  return (
    (loading && <Loading loadingText={`Sending ${tokenName}...`} />) ||
    (!loading && (
      <Center tag="main" className="TokenSend">
        <Stack className="MainStack">
          <BackButton path={tokenDetailPath} state={tokenDetailState} />
          <Stack className="AccountStack">
            <Title>Your Account</Title>
            <YourAccount showTitle={false} />
          </Stack>
          <Stack className="SendStack">
            <Formik
              initialValues={{ amount: "", address: "" }}
              onSubmit={sendTokensAction}
              validationSchema={sendValidationSchema}
            >
              {(formikProps) => (
                <Form>
                  <Stack className="FormStack">
                    <div>
                      <Text>Send</Text>
                      <FormItem name="amount">
                        <Input name="amount" placeholder="Enter amount" />
                      </FormItem>
                      <Text>{tokenName}</Text>
                    </div>
                    <div>
                      <Text>to</Text>
                      <FormItem name="address">
                        <Input name="address" placeholder="Enter address" />
                      </FormItem>
                    </div>
                  </Stack>
                  <Button
                    type="primary"
                    onClick={formikProps.submitForm}
                    disabled={!(formikProps.isValid && formikProps.dirty)}
                  >
                    Send
                  </Button>
                </Form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </Center>
    ))
  );
}

export default TokenSend;
