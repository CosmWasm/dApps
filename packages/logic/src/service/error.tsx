import * as React from "react";

interface ErrorContextType {
  readonly error?: string;
  readonly setError: (error: string) => void;
  readonly clearError: () => void;
}

const defaultContext: ErrorContextType = {
  setError: () => {
    return;
  },
  clearError: () => {
    return;
  },
};

const ErrorContext = React.createContext<ErrorContextType>(defaultContext);

const useError = (): ErrorContextType => React.useContext(ErrorContext);

function ErrorProvider({ children }: React.HTMLAttributes<HTMLOrSVGElement>): JSX.Element {
  const [error, setError] = React.useState<string>();

  const context: ErrorContextType = {
    error: error,
    setError: setError,
    clearError: () => {
      setError(undefined);
    },
  };

  return <ErrorContext.Provider value={context}>{children}</ErrorContext.Provider>;
}

export { ErrorProvider, useError };
