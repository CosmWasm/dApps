import { mapCoin, useError, useSdk, useAccount } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../../../config";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import { Formik } from "formik";
import { Form, FormItem } from "formik-antd";
import YourAccount from "../../components/YourAccount";
import { pathTokens } from "../../paths";
import { TokenDetailState } from "../TokenDetail";
import "./TokenList.less";
import Search from "../../forms/Search";
import { searchValidationSchema } from "../../forms/validationSchemas";

const { Title, Text } = Typography;

function TokenList(): JSX.Element {
  const { account } = useAccount();
  const { getClient } = useSdk();
  const { setError } = useError();

  const [currentAddress, setCurrentAddress] = useState(account.address);
  const amAllowed = account.address === currentAddress;

  const [balance, setBalance] = useState<readonly Coin[]>([]);

  useEffect(() => {
    getClient()
      .getAccount(currentAddress)
      .then(({ balance }) => {
        const mappedBalance: readonly Coin[] = balance.map((coin) => mapCoin(coin, config.coinMap));
        setBalance(mappedBalance);
      })
      .catch(setError);
  }, [getClient, currentAddress, setError]);

  const history = useHistory<TokenDetailState>();

  function goTokenDetail(token: Coin) {
    history.push(`${pathTokens}/${token.denom}`, { tokenAmount: token.amount });
  }

  return (
    <Center tag="main" className="TokenList">
      <Stack className="MainStack">
        <Title>Tokens</Title>
        <Stack className="TokenStack">
          {balance.map((token) => (
            <div
              key={token.denom}
              className="tokenItem"
              data-state={amAllowed ? "" : "forbidden"}
              onClick={() => {
                amAllowed && goTokenDetail(token);
              }}
            >
              <div className="borderContainer">
                <Text>{token.denom}</Text>
                <Text>{token.amount !== "0" ? token.amount : "No tokens"}</Text>
              </div>
            </div>
          ))}
        </Stack>
        <Formik
          initialValues={{ address: currentAddress }}
          validationSchema={searchValidationSchema}
          onSubmit={(values) => {
            setCurrentAddress(values.address);
          }}
        >
          {(formikProps) => (
            <Form>
              <FormItem name="address">
                <Search
                  name="address"
                  placeholder="Enter address"
                  enterButton
                  onSearch={formikProps.submitForm}
                />
              </FormItem>
            </Form>
          )}
        </Formik>
        <YourAccount />
      </Stack>
    </Center>
  );
}

export default TokenList;
