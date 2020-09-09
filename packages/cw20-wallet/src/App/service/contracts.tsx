import React, { useState } from "react";
import { CW20Instance } from "./cw20";

interface ContractsContextType {
  contracts: CW20Instance[];
  readonly addContract: (newContract: CW20Instance) => void;
}

const defaultContext: ContractsContextType = {
  contracts: [],
  addContract: function () {
    return;
  },
};

const ContractsContext = React.createContext<ContractsContextType>(defaultContext);

const useContracts = (): ContractsContextType => React.useContext(ContractsContext);

function ContractsProvider({ children }: React.HTMLAttributes<HTMLOrSVGElement>): JSX.Element {
  const [contracts, setContracts] = useState<CW20Instance[]>(defaultContext.contracts);

  function addContract(newContract: CW20Instance) {
    const notPresent = !contracts.find(
      (contract) => contract.contractAddress === newContract.contractAddress,
    );

    if (notPresent) setContracts([...contracts, newContract]);
  }

  const value: ContractsContextType = { contracts, addContract };

  return <ContractsContext.Provider value={value}>{children}</ContractsContext.Provider>;
}

export { ContractsProvider, useContracts };