import React from 'react';
import LoaderWrapper from '@components/Atoms/loader/wrapper';
import LoaderSpinner from '@components/Atoms/loader/spinner';
import LoadingText from '@components/Atoms/loader/loadingText';

type LoadingProps = {
  text?: string;
};

const LoadingSpinner: React.FC<LoadingProps> = ({ text }) => {
  return (
    <LoaderWrapper>
      <div className="flex flex-col items-center">
        <LoaderSpinner />
        {text && <LoadingText text={text} />}
      </div>
    </LoaderWrapper>
  );
};

export default LoadingSpinner;
