import { Button } from '@headlessui/react';

const buttonStyles = {
  base: 'inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm font-semibold focus:outline-none shadow-inner shadow-white/10',
  default: 'bg-gray-700 text-white hover:bg-gray-600 focus:outline-white focus:outline-1',
  primary: 'bg-blue-500 text-white hover:bg-blue-400 focus:outline-blue-300',
  secondary: 'bg-gray-500 text-white hover:bg-gray-400 focus:outline-gray-300',
  danger: 'bg-red-500 text-white hover:bg-red-400 focus:outline-red-300',
};

interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary' | 'danger';
  className?: string;
  onClick?: () => void;
  children: any;
}

const CustomButton: React.FC<ButtonProps> = ({ children, variant = 'default', className, onClick }) => {
  const classes = `${buttonStyles.base} ${buttonStyles[variant]} ${className || ''}`;

  return (
    <Button className={classes} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;