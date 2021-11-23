import NextLink, { LinkProps } from "next/link";
import { ReactChild } from "react";

interface PropsType extends LinkProps {
  children: ReactChild;
  className?: string;
}

export default function Link({ children, className = "", ...otherProps }: PropsType) {
  return (
    <NextLink {...otherProps}>
      <a className={className}>
        {children}
      </a>
    </NextLink>
  );
}
