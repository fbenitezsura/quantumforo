import React from 'react';

type LoadingTextProps = {
  text: string;
};

const LoadingText: React.FC<LoadingTextProps> = ({ text }) => {
  return (
    <p className="mt-2 text-sm text-gray-500">{text}</p>
  );
};

export default LoadingText;
