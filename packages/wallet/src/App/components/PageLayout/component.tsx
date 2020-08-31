import { Center, CenterProps } from "@cosmicdapp/design";
import * as React from "react";

export function PageLayout({ children, ...props }: CenterProps): JSX.Element {
  return (
    <Center tag="main" {...props}>
      {children}
    </Center>
  );
}
