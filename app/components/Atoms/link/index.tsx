import clsx from 'clsx';
import Link from 'next/link'
import { memo } from "react";
import { AnchorHTMLAttributes } from "react";

export type LinkElementProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  onClick?: () => void;
  className?: string;
};

const LinkElement = ({ children, href, className, onClick } : any) => {
  return (
    <Link
    href={href}
    onClick={()=>{
      onClick && onClick();
    }}
    className={clsx(
      'focus:outline-none',
      className
    )}
    >
        {children}
    </Link>
  );
};

export default memo(LinkElement);
