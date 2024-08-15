import React from 'react';
import NoDataText from '@components/atom/noDataText/index';
import NoDataIcon from '@components/atom/svg/noDataIcon';

type NoDataProps = {
  message?: string;
};

const NoData: React.FC<NoDataProps> = ({ message = "Sin datos disponibles" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <NoDataIcon />
      <NoDataText message={message} />
    </div>
  );
};

export default NoData;