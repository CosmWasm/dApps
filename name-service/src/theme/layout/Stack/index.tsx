import joinClassNames from "classnames";
import * as React from "react";
import "./Stack.less";

interface TagProp {
  readonly tag?: keyof JSX.IntrinsicElements;
}

export type StackProps = TagProp & React.HTMLAttributes<HTMLOrSVGElement>;

function Stack({ tag: Tag = "div", className, children, ...props }: StackProps): JSX.Element {
  const classNames = joinClassNames("Stack", className);

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}

export default Stack;
