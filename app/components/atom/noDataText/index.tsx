import React from 'react';

type NoDataTextProps = {
  message: string;
};

const NoDataText: React.FC<NoDataTextProps> = ({ message }) => {
  return (
    <p className="text-gray-500 text-center text-lg">
      {message}
    </p>
  );
};

export default NoDataText;