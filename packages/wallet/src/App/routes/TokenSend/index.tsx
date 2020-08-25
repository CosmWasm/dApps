import * as Yup from "yup";
import { Button, Typography } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import YourAccount from "../../components/YourAccount";
import { pathTokens } from "../../paths";
import { TokenDetailState } from "../TokenDetail";
import "./TokenSend.less";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import { useSdk, useError } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { sendAddressValidationSchema } from "../../forms/validationSchemas";

const { Title, Text } = Typography;

interface TokenSendParams {
  readonly tokenName: string;
}

export interface TokenSendState {
  readonly tokenAmount: string;
}

function TokenSend(): JSX.Element {
  const { getClient } = useSdk();
  const { setError } = useError();
  const history = useHistory<TokenSendState>();

  const { tokenName }: TokenSendParams = useParams();
  const { tokenAmount }: TokenSendState = history.location.state;

  const tokenDetailState: TokenDetailState = { tokenAmount };

  const sendTokensAction = (values) => {
    const { address, amount } = values;

    const recipientAddress: string = address;
    const transferAmount: readonly Coin[] = [{ denom: tokenName, amount }];

    getClient().sendTokens(recipientAddress, transferAmount).catch(setError);
  };

  const sendAmountValidationSchema = Yup.object().shape({
    amount: Yup.number()
      .required("An amount is required")
      .positive("Amount should be positive")
      .max(parseFloat(tokenAmount), "Amount cannot be greater than ${max}"),
  });

  const sendValidationSchema = sendAmountValidationSchema.concat(sendAddressValidationSchema);

  return (
    <Center tag="main" className="TokenSend">
      <Stack className="MainStack">
        <BackButton path={`${pathTokens}/${tokenName}`} state={tokenDetailState} />
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
  );
}

export default TokenSend;
