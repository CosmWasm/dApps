import { BackButton, OperationResultState, PageLayout } from "@cosmicdapp/design";
import { CW20, getErrorFromStackTrace, useContracts, useError, useSdk } from "@cosmicdapp/logic";
import { Contract } from "@cosmjs/cosmwasm-stargate";
import { Button, Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input, Transfer } from "formik-antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { contractValidationSchema } from "../../forms/validationSchemas";
import { pathOperationResult, pathTokens, pathTokensAdd } from "../../paths";
import { FormStack, MainStack } from "./style";

const { Title } = Typography;

function TokensAdd(): JSX.Element {
  const { getClient } = useSdk();
  const { setError } = useError();
  const { addContract } = useContracts();
  const history = useHistory();

  const [codeId, setCodeId] = useState<number>();

  const [contracts, setContracts] = useState<readonly Contract[]>([]);
  const [selectedContractAddresses, setSelectedContractAddresses] = useState<string[]>([]);

  function submitInputContract({ contract }) {
    const codeId = !Number.isNaN(Number(contract)) && Number(contract);

    if (codeId) {
      const client = getClient();
      client
        .getContracts(codeId)
        .then((contractAddresses) => {
          const contractsPromise = [];
          contractAddresses.forEach(contractAddress => {
            contractsPromise.push(client.getContract(contractAddress));
          });
          Promise.all(contractsPromise)
            .then((contracts) => {
              setContracts(contracts);
              setCodeId(codeId);
            });
        })
        .catch(setError);
    } else {
      const contractAddress = String(contract);
      const newCw20Contract = CW20(getClient()).use(contractAddress);

      newCw20Contract
        .tokenInfo()
        .then(() => addContract(newCw20Contract))
        .then(() =>
          history.push({
            pathname: pathOperationResult,
            state: {
              success: true,
              message: `"${contractAddress}" was successfully added :)`,
              customButtonText: "Tokens",
            } as OperationResultState,
          }),
        )
        .catch((stackTrace) =>
          history.push({
            pathname: pathOperationResult,
            state: {
              success: false,
              message: "Oh no... Something went wrong, please try again",
              error: getErrorFromStackTrace(stackTrace),
              customButtonActionPath: pathTokensAdd,
            } as OperationResultState,
          }),
        );
    }
  }

  function handleChangeSelected(selectedAddresses: string[]) {
    setSelectedContractAddresses(selectedAddresses);
  }

  function submitSelectContracts() {
    selectedContractAddresses.forEach((address) => {
      const newCw20Contract = CW20(getClient()).use(address);

      newCw20Contract
        .tokenInfo()
        .then(() => addContract(newCw20Contract))
        .catch((stackTrace) =>
          history.push({
            pathname: pathOperationResult,
            state: {
              success: false,
              message: "Oh no... Something went wrong, please try again",
              error: getErrorFromStackTrace(stackTrace),
              customButtonActionPath: pathTokensAdd,
            } as OperationResultState,
          }),
        );
    });

    history.push({
      pathname: pathOperationResult,
      state: {
        success: true,
        message: `"Your CodeID: ${codeId}" were successfully added :)`,
        customButtonText: "Tokens",
      } as OperationResultState,
    });
  }

  function filterCaseInsensitive(input, option) {
    return option.title.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }

  const showInputContract = !codeId;
  const showCodeIdForm = !showInputContract;

  return (
    <PageLayout>
      <BackButton icon={backArrowIcon} path={pathTokens} />
      <MainStack>
        <Title>Add Other</Title>
        {showInputContract && (
          <Formik
            initialValues={{ contract: "" }}
            onSubmit={submitInputContract}
            validationSchema={contractValidationSchema}
          >
            {(formikProps) => (
              <Form>
                <FormStack>
                  <FormItem name="contract">
                    <Input name="contract" placeholder="Enter a contract address or codeID" />
                  </FormItem>
                  <Button
                    type="primary"
                    onClick={formikProps.submitForm}
                    disabled={!(formikProps.isValid && formikProps.dirty)}
                  >
                    Continue
                  </Button>
                </FormStack>
              </Form>
            )}
          </Formik>
        )}
        {showCodeIdForm && (
          <Formik initialValues={{}} onSubmit={submitSelectContracts}>
            {(formikProps) => (
              <Form>
                <FormStack>
                  <FormItem name="contracts">
                    <Transfer
                      name="contracts"
                      showSearch
                      filterOption={filterCaseInsensitive}
                      dataSource={contracts.map((contract) => {
                        return { key: contract.address, title: contract.label };
                      })}
                      onSelectChange={handleChangeSelected}
                      listStyle={{ listStyle: "none" }}
                      render={(item) => item.title}
                    />
                  </FormItem>
                  <Button
                    type="primary"
                    onClick={formikProps.submitForm}
                    disabled={!selectedContractAddresses.length}
                  >
                    Continue
                  </Button>
                </FormStack>
              </Form>
            )}
          </Formik>
        )}
      </MainStack>
    </PageLayout>
  );
}

export default TokensAdd;
