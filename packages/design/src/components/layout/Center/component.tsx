import * as React from "react";

interface CenterProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  readonly tag?: keyof JSX.IntrinsicElements;
}

function Center({ tag: Tag = "div", children, ...props }: CenterProps): JSX.Element {
  return <Tag {...props}>{children}</Tag>;
}

export { Center, CenterProps };
