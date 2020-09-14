import { BackButton, PageLayout, YourAccount } from "@cosmicdapp/design";
import { useAccount, useSdk } from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathAllowances, pathTokenSend, pathTokens } from "../../paths";
import { CW20 } from "../../service/cw20";
import FormSearchAllowing from "./FormSearchAllowing";
import { AccountStack, Amount, MainStack } from "./style";

const { Title, Text } = Typography;

interface TokenDetailParams {
  readonly contractAddress: string;
  readonly allowingAddress?: string;
}

function TokenDetail(): JSX.Element {
  const history = useHistory();
  const { getClient } = useSdk();
  const { account } = useAccount();

  const { contractAddress, allowingAddress: allowingAddressParam }: TokenDetailParams = useParams();

  const [allowingAddress, setAllowingAddress] = useState(allowingAddressParam);
  const [allowance, setAllowance] = useState<string>();

  const [tokenName, setTokenName] = useState("");
  const [tokenAmount, setTokenAmount] = useState("0");

  useEffect(() => {
    const cw20Contract = CW20(getClient()).use(contractAddress);
    const tokenAddress = allowingAddress ?? account.address;

    cw20Contract.tokenInfo().then(({ symbol }) => setTokenName(symbol));
    cw20Contract.balance(tokenAddress).then((balance) => setTokenAmount(balance));
  }, [getClient, contractAddress, allowingAddress, account.address]);

  function updateAllowance(allowingAddress: string) {
    if (!allowingAddress) {
      setAllowingAddress(undefined);
      setAllowance(undefined);
      return;
    }

    setAllowingAddress(allowingAddress);

    const cw20contract = CW20(getClient()).use(contractAddress);
    cw20contract
      .allowance(allowingAddress, account.address)
      .then((response) => setAllowance(response.allowance));
  }

  function goToSend() {
    const optionalAllowingAddress = allowingAddress ? allowingAddress : "";
    history.push(`${pathTokenSend}/${contractAddress}/${optionalAllowingAddress}`);
  }

  function goToAllowances() {
    history.push(`${pathAllowances}/${tokenName}`);
  }

  const [amountInteger, amountDecimal] = tokenAmount.split(".");

  const showCurrentAllowance = !!allowance && allowance !== "0";
  const showSendButton = !allowance || allowance !== "0";
  const isSendButtonDisabled = tokenAmount === "0";
  const showAllowancesLink = !allowingAddress;

  return (
    <PageLayout>
      <MainStack>
        <BackButton icon={backArrowIcon} path={pathTokens} />
        <AccountStack>
          <Title>{tokenName}</Title>
          <YourAccount hideTitle hideBalance />
        </AccountStack>
        <Amount>
          <Text>{`${amountInteger}${amountDecimal ? "." : ""}`}</Text>
          {amountDecimal && <Text>{amountDecimal}</Text>}
          <Text>{" tokens"}</Text>
        </Amount>
        <FormSearchAllowing initialAddress={allowingAddress} setSearchedAddress={updateAllowance} />
        {showCurrentAllowance && <Text>{`Your allowance: ${allowance}`}</Text>}
        {showSendButton && (
          <Button type="primary" onClick={goToSend} disabled={isSendButtonDisabled}>
            Send
          </Button>
        )}
        {showAllowancesLink && (
          <Button type="primary" onClick={goToAllowances}>
            My allowances
          </Button>
        )}
      </MainStack>
    </PageLayout>
  );
}

export default TokenDetail;
