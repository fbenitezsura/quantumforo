// Loading.tsx
import React from 'react';
import LoaderWrapper from '@components/atom/loader/wrapper';
import LoaderSpinner from '@components/atom/loader/spinner';
import LoadingText from '@components/atom/loader/loadingText';

type LoadingProps = {
  text?: string;
};

const Loading: React.FC<LoadingProps> = ({ text }) => {
  return (
    <LoaderWrapper>
      <div className="flex flex-col items-center">
        <LoaderSpinner />
        {text && <LoadingText text={text} />}
      </div>
    </LoaderWrapper>
  );
};

export default Loading;
