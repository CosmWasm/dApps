import * as React from "react";

/*
Ugly to use a singleton to manage functions, but the issue is that we want to return the same
setError, clearError functions to the consumers, so they don't trigger new effects everytime
we update the error state, which can lead to an infinite loop:

Component.useEffect returns error, calls setError
ErrorProvider updates value and returns new closure for setError
useEffect is triggered again, with another error....

When this is updated, we only want things to re-render that depend on the actual error value.
There may be cleaner ways to do this but encapsulating a singleton here seemed fine.
(We can't rely on local variables that change each time ErrorProvider() is called).
*/

let initError: string | undefined;

// this should be set on first render
let callback = (state: State): void => {
  // this is overriden on first render
  initError = state.error;
};

function setError(err: any): void {
  const error = typeof err === "string" ? err : err.toString();
  callback({ error });
}

function clearError(): void {
  callback({});
}

/** ****************/

export interface ErrorContextType {
  readonly error?: string;
  readonly setError: (err: string) => void;
  readonly clearError: () => void;
}

const defaultContext = (): ErrorContextType => {
  return {
    setError,
    clearError,
  };
};

export const ErrorContext = React.createContext<ErrorContextType>(defaultContext());

export const useError = (): ErrorContextType => React.useContext(ErrorContext);

interface State {
  readonly error?: string;
}

export function ErrorProvider(props: { readonly children: any }): JSX.Element {
  const [value, setValue] = React.useState<State>({});
  callback = setValue;
  // if there is an error before we render the first time, make sure we render it
  if (initError) {
    setValue({ error: initError });
    initError = undefined;
  }

  const context: ErrorContextType = {
    error: value.error,
    setError,
    clearError,
  };

  return <ErrorContext.Provider value={context}>{props.children}</ErrorContext.Provider>;
}
