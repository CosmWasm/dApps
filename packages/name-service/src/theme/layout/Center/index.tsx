import joinClassNames from "classnames";
import * as React from "react";
import "./Center.less";

interface TagProp {
  readonly tag?: keyof JSX.IntrinsicElements;
}

export type CenterProps = TagProp & React.HTMLAttributes<HTMLOrSVGElement>;

function Center({ tag: Tag = "div", className, children, ...props }: CenterProps): JSX.Element {
  const classNames = joinClassNames("Center", className);

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
}

export default Center;
