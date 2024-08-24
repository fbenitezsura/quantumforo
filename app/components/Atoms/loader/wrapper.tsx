import React from 'react';

type LoaderWrapperProps = {
  children: React.ReactNode;
};

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full">
      {children}
    </div>
  );
};

export default LoaderWrapper;