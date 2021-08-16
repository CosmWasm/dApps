import { PageLayout } from "@cosmicdapp/design";
import { CW20, CW20Instance, useContracts, useSdk } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../../../config";
import { AccountMenu } from "../../components/AccountMenu";
import { pathValidator } from "../../paths";
import { BorderContainer, MainStack, MenuHeader, ValidatorItem, ValidatorStack } from "./style";

const { Title, Text } = Typography;

interface ValidatorData {
  readonly name: string;
  readonly address: string;
}

async function getValidatorData(contract: CW20Instance): Promise<ValidatorData> {
  const { name } = await contract.tokenInfo();
  const address = contract.contractAddress;

  return { name, address };
}

function validatorCompare(a: ValidatorData, b: ValidatorData) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export function Validators(): JSX.Element {
  const history = useHistory();
  const { getClient } = useSdk();
  const { contracts: cw20Contracts, addContract } = useContracts();

  const [validatorsData, setValidatorsData] = useState<ValidatorData[]>([]);

  useEffect(() => {
    const client = getClient();

    (async function updateContracts() {
      const contracts = await client.getContracts(config.codeId);

      for (const contract of contracts) {
        const newCw20contract = CW20(client).use(contract);
        addContract(newCw20contract);
      }
    })();
  }, [getClient, addContract]);

  useEffect(() => {
    const validatorsDataPromises = cw20Contracts.map(getValidatorData);

    (async function updateValidatorsData() {
      const validatorsData = await Promise.all(validatorsDataPromises);
      setValidatorsData(validatorsData.sort(validatorCompare));
    })();
  }, [cw20Contracts]);

  function goToValidator(address: string) {
    history.push(`${pathValidator}/${address}`);
  }

  return (
    <PageLayout>
      <MainStack>
        <MenuHeader>
          <AccountMenu />
        </MenuHeader>
        <Title>Validators</Title>
        <ValidatorStack>
          {validatorsData.map((validator) => (
            <ValidatorItem key={validator.name} onClick={() => goToValidator(validator.address)}>
              <BorderContainer>
                <Text>{validator.name}</Text>
              </BorderContainer>
            </ValidatorItem>
          ))}
        </ValidatorStack>
      </MainStack>
    </PageLayout>
  );
}
