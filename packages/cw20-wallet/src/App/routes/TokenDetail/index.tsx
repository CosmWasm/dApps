import { BackButton, PageLayout, YourAccount } from "@cosmicdapp/design";
import { CW20, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Button, Divider, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathAllowances, pathTokens, pathTokenSend } from "../../paths";
import FormSearchAllowing from "./FormSearchAllowing";
import { AccountStack, Allowance, AllowanceStack, Amount, MainStack } from "./style";

const { Title, Text } = Typography;

interface TokenDetailParams {
  readonly contractAddress: string;
  readonly allowingAddress?: string;
}

function TokenDetail(): JSX.Element {
  const history = useHistory();
  const { getClient, address } = useSdk();

  const { contractAddress, allowingAddress: allowingAddressParam }: TokenDetailParams = useParams();

  const [allowingAddress, setAllowingAddress] = useState(allowingAddressParam);
  const [allowance, setAllowance] = useState<string>();

  const [tokenName, setTokenName] = useState("");
  const [tokenAmount, setTokenAmount] = useState("0");
  const [fractionalDigits, setFractionalDigits] = useState(0);

  useEffect(() => {
    const cw20Contract = CW20(getClient()).use(contractAddress);
    const tokenAddress = allowingAddress ?? address;

    cw20Contract.tokenInfo().then(({ symbol, decimals }) => {
      setTokenName(symbol);
      setFractionalDigits(decimals);
    });
    cw20Contract.balance(tokenAddress).then((balance) => setTokenAmount(balance));
  }, [getClient, contractAddress, allowingAddress, address]);

  function updateAllowance(allowingAddress: string) {
    if (!allowingAddress) {
      setAllowingAddress(undefined);
      setAllowance(undefined);
      return;
    }

    setAllowingAddress(allowingAddress);

    const cw20contract = CW20(getClient()).use(contractAddress);
    cw20contract.allowance(allowingAddress, address).then((response) => setAllowance(response.allowance));
  }

  function goToSend() {
    const optionalAllowingAddress = allowingAddress ? allowingAddress : "";
    history.push(`${pathTokenSend}/${contractAddress}/${optionalAllowingAddress}`);
  }

  function goToAllowances() {
    history.push(`${pathAllowances}/${contractAddress}`);
  }

  const amountToDisplay = Decimal.fromAtomics(tokenAmount, fractionalDigits).toString();
  const [amountInteger, amountDecimal] = amountToDisplay.split(".");

  const allowanceToDisplay = Decimal.fromAtomics(allowance, fractionalDigits).toString();

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
        {showCurrentAllowance && (
          <AllowanceStack>
            <Divider />
            <Allowance>
              <Text>Your allowance</Text>
              <Text>{allowanceToDisplay}</Text>
            </Allowance>
          </AllowanceStack>
        )}
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
