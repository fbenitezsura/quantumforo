// LoaderSpinner.tsx
import React from 'react';

const LoaderSpinner: React.FC = () => {
  return (
    <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin mx-auto border-t-blue-500"></div>
  );
};

export default LoaderSpinner;
