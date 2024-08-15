

import { SVGProps } from './Interfaces/SVGProps';
import clsx from 'clsx';

type SVGCalendarProps = {
  className: string
};
const SVGCheck: React.FC<SVGCalendarProps> = ({
  className
}) => {

  return (
    <svg className={clsx(``, className)} width="77" height="77" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5814_24301)">
      <path d="M8 14.5C11.866 14.5 15 11.366 15 7.5C15 3.63401 11.866 0.5 8 0.5C4.13401 0.5 1 3.63401 1 7.5C1 11.366 4.13401 14.5 8 14.5Z" fill="#5CB176" stroke="#5CB176"/>
      <path d="M5.31 6.34998L7 8.03998L10.69 4.34998L12 5.65998L8.31 9.34998L7 10.66L5.69 9.34998L4 7.65998L5.31 6.34998Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_5814_24301">
      <rect width="15" height="15" fill="white" transform="translate(0.5)"/>
      </clipPath>
      </defs>
    </svg>
  )
}
export default SVGCheck;
