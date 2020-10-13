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

export const useContracts = (): ContractsContextType => React.useContext(ContractsContext);

export function ContractsProvider({ children }: React.HTMLAttributes<HTMLOrSVGElement>): JSX.Element {
  const [contracts, setContracts] = useState<CW20Instance[]>(defaultContext.contracts);

  function addContract(newContract: CW20Instance) {
    setContracts((contracts) => {
      const notPresent = !contracts.find(
        (contract) => contract.contractAddress === newContract.contractAddress,
      );

      if (notPresent) return [...contracts, newContract];
      return contracts;
    });
  }

  const value: ContractsContextType = { contracts, addContract };

  return <ContractsContext.Provider value={value}>{children}</ContractsContext.Provider>;
}
