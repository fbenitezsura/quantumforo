'use client'
import { useState, useEffect } from 'react';
import createDOMPurify from 'dompurify';
import { marked } from 'marked';

export type MDPreviewProps = {
  value: string;
};

const MDPreview = ({ value = '' }: MDPreviewProps) => {
  const [sanitizedHTML, setSanitizedHTML] = useState('');

  useEffect(() => {
    if(window){      
      setSanitizedHTML(createDOMPurify(window).sanitize(marked(value)));
    }    
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: sanitizedHTML,
      }}
    />
  );
};

export default MDPreview;
