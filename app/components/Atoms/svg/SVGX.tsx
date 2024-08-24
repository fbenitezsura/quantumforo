import clsx from 'clsx';

const SVGX = ({
  className,
  variant,
  onClick
}) => {

  return (
    <svg onClick={onClick} className={clsx(`cursor-pointer`, className)} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.36328 6.36328L19.0912 19.0912" stroke={variant === 'bold' ? "#1C1C23" : "#878787"} strokeWidth="1.6"
            strokeLinecap="round" />
        <path d="M6.36328 19.0918L19.0912 6.36387" stroke={variant === 'bold' ? "#1C1C23" : "#878787"} strokeWidth="1.6"
            strokeLinecap="round" />
    </svg>
  )
}

export default SVGX;
