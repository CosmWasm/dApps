import { PageLayout } from "@cosmicdapp/design";
import { useSdk } from "@cosmicdapp/logic";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AccountMenu } from "../../components/AccountMenu";
import { pathValidators } from "../../paths";
import { BorderContainer, MainStack, MenuHeader, ValidatorItem, ValidatorStack } from "./style";

const { Title, Text } = Typography;

interface ValidatorData {
  readonly name: string;
  readonly address: string;
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
  const { getStakingClient } = useSdk();

  const [validatorsData, setValidatorsData] = useState<readonly ValidatorData[]>([]);

  useEffect(() => {
    (async function updateValidatorsData() {
      const { validators } = await getStakingClient().staking.validators("BOND_STATUS_BONDED");
      const validatorsData: readonly ValidatorData[] = validators
        .map((validator) => ({
          name: validator.description.moniker,
          address: validator.operatorAddress,
        }))
        .sort(validatorCompare);

      setValidatorsData(validatorsData);
    })();
  }, [getStakingClient]);

  function goToValidator(address: string) {
    history.push(`${pathValidators}/${address}`);
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
