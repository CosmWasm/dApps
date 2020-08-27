import * as React from "react";

interface StackProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly tag?: keyof JSX.IntrinsicElements;
}

function Stack({ tag: Tag = "div", children, ...props }: StackProps): JSX.Element {
  return <Tag {...props}>{children}</Tag>;
}

export { Stack, StackProps };
