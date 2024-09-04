'use client'
import React from "react";
import dynamic from 'next/dynamic';
const MDPreview = dynamic(() => import('@components/Atoms/MDPreview/MDPreview'), {
  ssr: false,  // This will only load the component client-side
  loading: () => <p>Loading...</p>  // Optional: You can add a loading component if you want
});
const SingleContentDemo = ({
  content
}) => {
  return (
    <>
      <MDPreview value={content}/>
    </>
  );
};

export default SingleContentDemo;
