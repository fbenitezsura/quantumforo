// Loading.tsx
import React from 'react';
import LoaderWrapper from '@/app/components/Atoms/loader/wrapper';
import LoaderSpinner from '@/app/components/Atoms/loader/spinner';
import LoadingText from '@/app/components/Atoms/loader/loadingText';

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
