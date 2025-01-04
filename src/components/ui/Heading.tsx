import React, { HTMLAttributes, ElementType, ReactNode } from "react";
import classNames from "classnames";

const variantStyles = {
  h1: "text-[32px] font-bold",
  h2: "text-xl font-bold", //20px
};

type Variant = keyof typeof variantStyles;

// *** This is how to setup if you want to pass anything not just html
// *** elements but also a React component
// interface HeadingProps {
//   as?: ElementType;
//   variant?: Variant;
//   className?: string;
//   children?: ReactNode;
//   [key: string]: any; // or a more specific type
// }

// *** This is just for HTML elements h1, h2, p, etc
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  as: Tag = "h1",
  variant = "h1",
  className = "",
  children,
  ...props
}) => {
  const headingClass = classNames(variantStyles[variant], className);

  return (
    <Tag className={headingClass} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
