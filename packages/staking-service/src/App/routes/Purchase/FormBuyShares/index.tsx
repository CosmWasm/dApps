import { displayAmountToNative, useAccount, useSdk } from "@cosmicdapp/logic";
import { Coin, coins, MsgDelegate } from "@cosmjs/launchpad";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React from "react";
import { config } from "../../../../config";
import { StakingValidator } from "../../../utils/staking";
import { FormField, FormStack } from "./style";

const { Text } = Typography;

export interface FormBuySharesFields {
  readonly amount: string;
}

interface FormBuySharesProps {
  readonly validator: StakingValidator;
}

export function FormBuyShares({ validator }: FormBuySharesProps): JSX.Element {
  const { account } = useAccount();
  const { getClient } = useSdk();

  function submitBuyShares({ amount }: FormBuySharesFields) {
    // TODO: get from config? Can't test due to insufficient funds
    const delegateToken = "ureef";
    const nativeAmountString = displayAmountToNative(amount, config.coinMap, delegateToken);
    const nativeAmountCoin: Coin = { amount: nativeAmountString, denom: delegateToken };

    const delegateMsg: MsgDelegate = {
      type: "cosmos-sdk/MsgDelegate",
      value: {
        delegator_address: account.address,
        validator_address: validator.operator_address,
        amount: nativeAmountCoin,
      },
    };

    const defaultFee = {
      amount: coins(37500, config.feeToken),
      gas: "1500000", // 1.5 million
    };

    getClient()
      .signAndBroadcast([delegateMsg], defaultFee)
      .then((result) => {
        console.log(result);
      })
      .catch(console.error);
  }

  return (
    <Formik initialValues={{ amount: "" }} onSubmit={submitBuyShares}>
      {(formikProps) => (
        <Form>
          <FormStack>
            <FormField>
              <Text>Tokens</Text>
              <FormItem name="amount">
                <Input name="amount" placeholder="Enter amount" />
              </FormItem>
            </FormField>
            {/* //TODO display shares / let choose shares instead of tokens */}
            <Text>{validator?.description.moniker ?? ""} Shares XXXXXX</Text>
            <Button
              type="primary"
              onClick={formikProps.submitForm}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            >
              Buy
            </Button>
          </FormStack>
        </Form>
      )}
    </Formik>
  );
}
