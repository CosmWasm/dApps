import { BackButton, PageLayout } from "@cosmicdapp/design";
import { AllowanceInfo, CW20, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Button, Divider, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathAllowanceAdd, pathAllowanceEdit, pathAllowances, pathTokens } from "../../paths";
import editIcon from "./assets/edit.svg";
import {
  AllowanceAmountCopy,
  AllowanceItem,
  AllowancesStack,
  Amount,
  MainStack,
  TitleAmountStack,
} from "./style";

const { Title, Text } = Typography;

interface AllowancesParams {
  readonly contractAddress: string;
}

function Allowances(): JSX.Element {
  const history = useHistory();
  const { getClient, address } = useSdk();

  const { contractAddress }: AllowancesParams = useParams();

  const [allowances, setAllowances] = useState<readonly AllowanceInfo[]>([]);
  const [tokenName, setTokenName] = useState("");
  const [tokenAmount, setTokenAmount] = useState("0");
  const [fractionalDigits, setFractionalDigits] = useState(0);

  useEffect(() => {
    const cw20Contract = CW20(getClient()).use(contractAddress);

    cw20Contract.tokenInfo().then(({ symbol, decimals }) => {
      setTokenName(symbol);
      setFractionalDigits(decimals);
    });
    cw20Contract.balance(address).then((balance) => setTokenAmount(balance));
    cw20Contract.allAllowances(address).then(({ allowances }) => setAllowances(allowances));
  }, [getClient, contractAddress, address]);

  function goToAllowancesEdit(spender: string) {
    history.push(`${pathAllowances}/${contractAddress}${pathAllowanceEdit}/${spender}`);
  }

  function goToAllowancesAdd() {
    history.push(`${pathAllowances}/${contractAddress}${pathAllowanceAdd}`);
  }

  const amountToDisplay = Decimal.fromAtomics(tokenAmount, fractionalDigits).toString();
  const [amountInteger, maybeAmountDecimal] = amountToDisplay.split(".");
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
        <AllowancesStack>
          {allowances.map((allowanceInfo, index) => {
            const allowanceToDisplay = Decimal.fromAtomics(
              allowanceInfo.allowance,
              fractionalDigits,
            ).toString();

            return (
              <>
                {index > 0 && <Divider />}
                <AllowanceItem>
                  <Text>{allowanceInfo.spender}</Text>
                  <AllowanceAmountCopy>
                    <Text>{allowanceToDisplay}</Text>
                    <img
                      alt="Edit allowance"
                      src={editIcon}
                      onClick={() => goToAllowancesEdit(allowanceInfo.spender)}
                    />
                  </AllowanceAmountCopy>
                </AllowanceItem>
              </>
            );
          })}
        </AllowancesStack>
        <Button type="primary" onClick={goToAllowancesAdd}>
          Add New
        </Button>
      </MainStack>
    </PageLayout>
  );
}

export default Allowances;
