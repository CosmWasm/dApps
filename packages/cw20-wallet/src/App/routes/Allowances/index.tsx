import { BackButton, PageLayout } from "@cosmicdapp/design";
import { useAccount, useSdk } from "@cosmicdapp/logic";
import { Divider, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathAllowanceEdit, pathAllowances, pathTokens } from "../../paths";
import { AllowanceInfo, CW20 } from "../../service/cw20";
import { AllowanceItem, Amount, MainStack, TitleAmountStack } from "./style";

const { Title, Text } = Typography;

interface AllowancesParams {
  readonly contractAddress: string;
}

function Allowances(): JSX.Element {
  const history = useHistory();
  const { getClient } = useSdk();
  const { account } = useAccount();

  const { contractAddress }: AllowancesParams = useParams();

  const [allowances, setAllowances] = useState<readonly AllowanceInfo[]>([]);
  const [tokenName, setTokenName] = useState("");
  const [tokenAmount, setTokenAmount] = useState("0");

  useEffect(() => {
    const cw20Contract = CW20(getClient()).use(contractAddress);

    cw20Contract.tokenInfo().then(({ symbol }) => setTokenName(symbol));
    cw20Contract.balance(account.address).then((balance) => setTokenAmount(balance));
    cw20Contract.allAllowances(account.address, "0", 20).then(({ allowances }) => setAllowances(allowances));
  }, [getClient, contractAddress, account.address]);

  function goEdit(spender: string) {
    history.push(`${pathAllowances}/${contractAddress}${pathAllowanceEdit}/${spender}`);
  }

  const [amountInteger, maybeAmountDecimal] = tokenAmount.split(".");
  const amountDecimal = maybeAmountDecimal ?? "";

  return (
    <PageLayout>
      <MainStack>
        <BackButton icon={backArrowIcon} path={pathTokens} />
        <TitleAmountStack>
          <Title>Allowances</Title>
          <Amount>
            <Text>{`${amountInteger}${amountDecimal ? "." : ""}`}</Text>
            <Text>
              {amountDecimal} {tokenName}
            </Text>
            <Text>{" tokens"}</Text>
          </Amount>
        </TitleAmountStack>
        {allowances.map((allowanceInfo, index) => (
          <>
            {index > 0 && <Divider />}
            <AllowanceItem>
              <Text>{allowanceInfo.spender}</Text>
              <Text>{allowanceInfo.allowance}</Text>
              <div onClick={() => goEdit(allowanceInfo.spender)}>edit</div>
            </AllowanceItem>
          </>
        ))}
      </MainStack>
    </PageLayout>
  );
}

export default Allowances;
