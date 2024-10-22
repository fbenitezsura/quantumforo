import Link from 'next/link';
import { memo } from "react";
export interface ILogo {
  width: number,
}
const Logo = ({
  width
}: ILogo) => {

  return (
    <Link href={`/`}>
      <img
        alt="icon.png"
        src={'/logo/logo.jpg'}
        className="h-full w-full"
      />
    </Link>
  );
}
export default memo(Logo);
