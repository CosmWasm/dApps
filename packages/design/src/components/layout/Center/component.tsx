import * as React from "react";

export interface CenterProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly tag?: keyof JSX.IntrinsicElements;
}

export function Center({ tag: Tag = "div", children, ...props }: CenterProps): JSX.Element {
  return <Tag {...props}>{children}</Tag>;
}
