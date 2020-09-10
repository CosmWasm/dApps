import * as React from "react";

export interface StackProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly tag?: keyof JSX.IntrinsicElements;
}

export function Stack({ tag: Tag = "div", children, ...props }: StackProps): JSX.Element {
  return <Tag {...props}>{children}</Tag>;
}
